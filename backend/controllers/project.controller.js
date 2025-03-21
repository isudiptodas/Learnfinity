import { Project } from '../models/project.models.js';

export const saveProject = async (req, res) => {
    const { projectTitle, htmlValue, cssValue, jsValue } = req.body;
    const userId = req.userId;

    try{
        const newProject = new Project({
            projectTitle,
            htmlValue, 
            cssValue, 
            jsValue,
            userId
        });
    
        const savedProject = await newProject.save();

        return res.status(200).json({
            success: true,
            message: "Project saved successfully",
            savedProject
        });
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({
            success: false,
            message: "Unable to save project"
        })
    }
}