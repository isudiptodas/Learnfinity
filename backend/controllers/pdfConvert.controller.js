import axios from 'axios';
import fs from 'fs';
import CloudConvert from 'cloudconvert';

export const convertFile = async (req, res) => {

    const API = process.env.CLOUDCONVERT_API;

    const filepath = req.file.path;

    //console.log(filepath);

    const cloudConvert = new CloudConvert(API);

    //console.log(API);
    const file = req.file;
    const format = req.body.outputFormat;

    //console.log(file, format);

    try {

        // Step 1: Create a CloudConvert job
        const job = await cloudConvert.jobs.create({
            tasks: {
                "import-file": { operation: "import/upload" },
                "convert-file": {
                    operation: "convert",
                    input: "import-file",
                    output_format: format
                },
                "export-file": {
                    operation: "export/url",
                    input: "convert-file"
                }
            }
        });

        console.log("Job created");

        // Step 2: Get upload URL
        const uploadTask = job.tasks.find(task => task.name === "import-file");

        if (!uploadTask || !uploadTask.result || !uploadTask.result.form.url) {
            return res.status(500).json(
                { error: "CloudConvert upload failed" }
            );
        }

        console.log("Upload URL received");

        // Step 3: Upload file to CloudConvert
        await axios.put(uploadTask.result.form.url, fs.readFileSync(filepath), {
            headers : uploadTask.result.form.parameters
        });
         

        console.log('File uploaded');

        // Step 4: Wait for conversion to complete
        const convertedJob = await cloudConvert.jobs.wait(job.id);
        const exportTask = convertedJob.tasks.find(task => task.name === "export-file");

        if (!exportTask || !exportTask.result || !exportTask.result.files) {
            return res.status(500).json({
                error: "CloudConvert conversion failed"
            });
        }

        // Step 5: Get the download link
        const downloadUrl = exportTask.result.files[0].url;

        fs.unlink(file.path, (err) => {
            if (err) console.error("Error deleting file:", err);
        });

        return res.status(200).json({
            success: true,
            message: 'Conversion successfull',
            downloadUrl
        });

    }
    catch (err) {

        console.log(err.message);

        return res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}
