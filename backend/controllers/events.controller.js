import { Events } from '../models/events.models.js';

export const addEvent = async (req, res) => {
    const { currentDate, eventDesc, eventTitle } = req.body;
    const userId = req.userId;

    //console.log(currentDate, eventDesc, eventTitle);

    try {
        const found = await Events.findOne({ title: eventTitle });

        if (found) {
            return res.status(205).json({
                success: false,
                message: "Event already exists"
            });
        }

        const newEvent = new Events({
            title: eventTitle,
            description: eventDesc,
            date: currentDate,
            userId: userId
        });

        await newEvent.save();

        return res.status(200).json({
            success: true,
            message: "Event added"
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

export const fetchEvents = async (req, res) => {
    const { date } = req.query;

    //console.log(date);

    try{
        const found = await Events.find({date: date});

        if(!found){
            return res.status(204).json({
                success: false,
                message: "No events found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Events fetched",
            found
        });
    }
    catch(err){
        return res.status(5000).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

export const updateEvent = async (req, res) => {
    const { eventDesc, eventTitle } = req.body;
    const { id } = req.params;

    // console.log(currentDate, eventDesc, eventTitle, id);

    try{
        const found = await Events.findByIdAndUpdate(id, {
            title: eventTitle,
            description: eventDesc,
        }, {new: true});

        return res.status(201).json({
            success: true,
            message: "Event updated",
        });
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    //console.log(id);

    try{
        const found = await Events.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Event deleted"
        });
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}