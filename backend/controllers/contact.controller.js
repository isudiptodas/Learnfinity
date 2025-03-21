import { contactMessage } from '../models/contact.models.js';
import nodemailer from 'nodemailer';

export const contact = async (req, res) => {
    const { name, email, query, desc } = req.body;

    try{
        const newMessage = new contactMessage({
            userName: name,
            userEmail: email,
            userQuery: query,
            userQueryDescription: desc
        });
    
        const savedMessage = await newMessage.save();
    
        if (savedMessage) {
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
                subject: "Conatct Message Confirmation",
                html: `
                    <p>Dear ${name},</p><br/>
                    <p>We just found your message and we assure you that we will try to respond within the earliest possible.</p><br/>
                    <p>For reference, below we are adding the details that you provided us, in case of any fault or misinformation please contact us on at learnfinity1224@gmail.com</p><br/>
    
                    <h1>Name</h1>
                    <p>${name}</p>
                    <h1>Email</h1>
                    <p>${email}</p>
                    <h1>Query</h1>
                    <p>${query}</p>
                    <h1>Description</h1>
                    <p>${desc}</p><br/>
    
                    <p>Thank you for contacting Learnfinity. Hope you had a good day.</p>
                    <p>Best regards, </p>
                    <p>Team Learnfinity</p>
                `,
            };
    
            transporter.sendMail(mailOptions, (error, info) => {
                if(error){
                    console.log(error.message);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to send confirmation mail",
                    });
                }
        
                return res.status(200).json({
                    success: true,
                    message: "Confirmation mail sent successfully",
                });
            });
        }
    }
    catch(err){
        console.error(err.message);
        return res.status(400).json({
            success: false,
            message: "Failed to send confirmation mail",
        });
    }

}