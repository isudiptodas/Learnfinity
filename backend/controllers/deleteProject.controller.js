import { Project } from '../models/project.models.js';

export const deleteProject = async (req, res) => {
    const projectId = req.params.id;

    try{
        const deletedProject = await Project.findByIdAndDelete(projectId);

        if(!deleteProject){
            return res.status(404).json({
                success: false,
                message: "No project found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            deleteProject,
        });
    }
    catch(err){
        return res.status(404).json({
            success: false,
            message: "Unable to delete project",
        });
    }
}