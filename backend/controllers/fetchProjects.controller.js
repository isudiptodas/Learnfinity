import { Project } from '../models/project.models.js';

export const fetchProjects = async (req, res) => {
    const userId = req.userId;

    try {
        const allProjects = await Project.find({userId});

        if(!allProjects){
            return res.status(404).json({
                success: false,
                message: "No projects found"
            });
        }

        return res.status(201).json({
            success: true,
            message: "Projects fetched successfull",
            allProjects,
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Unable to find project",
        });
    }
}