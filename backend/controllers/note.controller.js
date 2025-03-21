import { Note } from '../models/note.models.js'

export const addNote = async (req, res) => {
    try{ 
        const { note, desc, category, time } = req.body;
        const userId = req.userId;

        const newNote = new Note({
            title: note, 
            desc, 
            userId,
            category,
            noteTime: time
        });

        const savedNote = await newNote.save();

        return res.status(200).json({
            success: true,
            message: "Note added successfully !",
            savedNote,
        })
    }
    catch(err){
        console.error(err.message);
        return res.status(400).json({
            success: false,
            message: "Error in adding note ! Please try again later",
        });
    }
}

export const showNotes = async (req, res) => {
    const userId = req.userId;
    const { category } = req.body;

    try{
        const notes = await Note.find({userId, category: category});
        return res.status(200).json({
            success: true,
            message: "Notes fetched successfully !",
            notes,
        });
    }
    catch(err){
        console.log(err.message);
        return res.status(400).json({
            success: false,
            message: "Error fetching notes !",
        });
    }

}

export const updateNote = async (req, res) => {
   try{
    const { note, desc, category } = req.body;
    const noteId = req.params.id;

    const updatedNote = await Note.findByIdAndUpdate(
        noteId, {
            title: note, 
            desc, 
            category
        },
        {new: true}
    )

    return res.status(201).json({
        success: true,
        message: "Note updated successfully !",
        notes: updatedNote,
    });
   }
   catch(err){
    console.error(err.message);
    return res.status(500).json({
        success: false,
        message: "Error updating note "
    });
   }
}

export const deleteNote = async (req, res) => {
    try{
        const noteId = req.params.id;

        const deletedNote = await Note.findByIdAndDelete(noteId);
        return res.status(201).json({
            success: true,
            message: "Note deleted",
        });
    }
    catch(err){
        console.error(err.message);
        return res.status(400).json({
            success: false,
            message: "Error deleting note"
        });
    }
}