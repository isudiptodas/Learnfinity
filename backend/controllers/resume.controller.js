import { Resume } from '../models/resume.models.js';

export const saveResume = async (req, res) => {
    const { title, userId, name, email, contact, link1, link2, edu1, edu1start, edu1end, edu1grade, edu2, edu2start, edu2end, edu2grade, exp1, expDetail1, exp2, expDetail2, skill1, skill2, skill3, project1, project1Details, project2, project2Details, project3, project3Details } = req.body;

    //console.log(title, userId, name, edu1);

    try {
        const found = await Resume.findOne({ title });
        //console.log(found);

        if (found) {
                found.name = name,
                found.email = email,
                found.contact = contact,
                found.social1 = link1,
                found.social2 = link2,
                found.edu1 = edu1,
                found.edu1start = edu1start,
                found.edu1end = edu1end,
                found.edu1grade = edu1grade,
                found.edu2 = edu2,
                found.edu2start = edu2start,
                found.edu2end = edu2end,
                found.edu2grade = edu2grade,
                found.exp1 = exp1,
                found.exp1detail = expDetail1,
                found.exp2 = exp2,
                found.exp2detail = expDetail2,
                found.skill1 = skill1,
                found.skill2 = skill2,
                found.skill3 = skill3,
                found.project1 = project1,
                found.project1detail = project1Details,
                found.project2 = project2,
                found.project2detail = project2Details,
                found.project3 = project3,
                found.project3detail = project3Details

                await found.save();

                return res.status(201).json({
                    success: true,
                    message: "Updated resume saved",
                });
        }
        else {
            const newResume = new Resume({
                title, name, email, contact,
                social1: link1,
                social2: link2,
                edu1, edu1start, edu1end, edu1grade, edu2, edu2start, edu2end, edu2grade,
                exp1, exp1detail: expDetail1, exp2, exp2detail: expDetail2,
                skill1, skill2, skill3,
                project1, project1detail: project1Details, project2, project2detail: project2Details, project3, project3detail: project3Details,
                userId
            });

            await newResume.save();

            return res.status(200).json({
                success: true,
                message: "Resume saved",
                newResume
            });
        }

    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }

}

export const getResume = async (req, res) => {
    const userId = req.userId;
    const { title } = req.query;

    //console.log(userId, title);

    try {
        const found = await Resume.findOne({ title });
        // console.log(found);

        if(found) {
            return res.status(400).json({
                success: false,
                message: "Resume already exists",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Resume created",
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }

}

export const fetchResume = async (req, res) => {
    const userId = req.userId;

    //console.log(userId);

    try {
        const found = await Resume.find({ userId });
        //console.log(found);

        if (!found) {
            return res.status(400).json({
                success: false,
                message: "Resume not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Resume fetched",
            found
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }

}

export const deleteResume = async (req, res) => {
    const { id } = req.params;
    //console.log(id);

    try{
        const deletedResume = await Resume.findByIdAndDelete(id);
        // console.log(deletedResume);

        return res.status(201).json({
            success: true,
            message: "Resume Deleted"
        });
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}
