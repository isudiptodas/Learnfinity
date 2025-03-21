import nodemailer from 'nodemailer';

export const sendOtp = async (req, res) => {

    const {email, generatedOTP} = req.body;
    const myEmail = process.env.LEARNFINITY_EMAIL;
    const myPassword = process.env.LEARNFINITY_PASSWORD;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myEmail,
            pass: myPassword,
        },
    });

    const mailOptions = {
        from : myEmail,
        to: email,
        subject: "OTP for recovering password",
        text: `Your OTP for recovering password is ${generatedOTP}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error.message);
            return res.status(500).json({
                success: false,
                message: "Failed to send OTP",
            });
        }

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully",
        });
    });
}