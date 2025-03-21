import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { Actions } from './Actions.js';
import { connectDb } from './config/connectDb.js';
import loginRoute from './routes/login.routes.js';
import registerRoute from './routes/register.routes.js';
import { protectedRoute } from './middlewares/routeMiddleware.js';
import addNote from './routes/note.routes.js';
import viewNotes from './routes/note.routes.js';
import updateNote from './routes/note.routes.js';
import deleteNote from './routes/note.routes.js';
import userdataRoute from './routes/userdata.routes.js';
import updateUser from './routes/updateuser.routes.js';
import verifyUser from './routes/emailVerify.routes.js';
import sendOtp from './routes/sendotp.routes.js';
import resetPassword from './routes/resetpassword.routes.js';
import subscribe from './routes/subscribe.routes.js';
import contactMessage from './routes/contactMessage.routes.js';
import saveProject from './routes/project.routes.js';
import allProjects from './routes/fetchProjects.routes.js';
import deleteProject from './routes/deleteProject.routes.js';
import summarize from './routes/summarize.routes.js';
import saveSummary from './routes/saveSummary.routes.js';
import deleteSummary from './routes/deleteSummary.routes.js';
import deleteText from './routes/deleteText.routes.js';
import saveText from './routes/saveText.routes.js';
import text from './routes/text.routes.js';
import code from './routes/code.routes.js';
import saveCode from './routes/saveCode.routes.js';
import deleteCode from './routes/deleteCode.routes.js';
import saveProfilePic from './routes/saveProfilePic.routes.js';
import deleteProfilePic from './routes/deleteProfilePic.routes.js';
import { v2 as cloudinary } from 'cloudinary';
import saveVideo from './routes/saveVideo.routes.js';
import getSavedVideos from './routes/savedVideos.routes.js';
import deleteVideo from './routes/deleteSavedVideo.routes.js';
import saveDoc from './routes/saveDoc.routes.js';
import getSavedDoc from './routes/savedDoc.routes.js';
import deleteDoc from './routes/deleteSavedDoc.routes.js';
import createInterviewPost from './routes/interviewPost.routes.js';
import fetchInterviewPosts from './routes/fetchInterviewPost.routes.js';
import createBlogPost from './routes/blogPost.routes.js';
import fetchBlogPosts from './routes/fetchBlogPost.routes.js';
import savePost from './routes/savePost.routes.js';
import fetchSavedPost from './routes/fetchAllSavedPost.routes.js';
import fetchInterviewPost from './routes/fetchAllSavedPost.routes.js';
import fetchBlogPost from './routes/fetchAllSavedPost.routes.js';
import deleteSavedPost from './routes/deleteSavedPosts.routes.js';
import deleteInterviewPost from './routes/deleteSavedPosts.routes.js';
import deleteBlogPost from './routes/deleteSavedPosts.routes.js';
import addComment from './routes/addComment.routes.js';
import fetchAllComments from './routes/fetchAllComments.routes.js';
import deleteComment from './routes/deleteComment.routes.js';
import resume from './routes/resume.routes.js';
import events from './routes/events.routes.js';
import convert from './routes/pdfConvert.routes.js';

const app = express();
const server = http.createServer(app);

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: "https://learnfinity-1.onrender.com",
}));

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
    },
});

const userSocketMap = {}; // Keeps track of users and their socket IDs.

function getAllConnectedClients(roomID) {
    const clientsInRoom = io.sockets.adapter.rooms.get(roomID) || new Set();
    return Array.from(clientsInRoom).map((socketId) => ({
        socketId,
        username: userSocketMap[socketId],
    }));
}

io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Handle user joining
    socket.on(Actions.JOIN, ({ roomID, username }) => {
        // Check if this username already exists in the userSocketMap
        const existingSocketId = Object.keys(userSocketMap).find(
            (key) => userSocketMap[key] === username
        );
 
        if (existingSocketId) {
            // Remove the old socket ID if the user reconnects
            delete userSocketMap[existingSocketId];
            io.to(existingSocketId).disconnectSockets(true); // Disconnect old socket
        }

        // Map the new socket ID to the username
        userSocketMap[socket.id] = username;
        socket.join(roomID);

        // Fetch updated client list
        const clients = getAllConnectedClients(roomID);
        console.log('Clients in room:', clients); // Verify client list

        // Notify all clients in the room about the new list
        clients.forEach(({ socketId }) => {
            io.to(socketId).emit(Actions.JOINED, {
                clients,
                username,
                socketId: socket.id,
            });
        });
    });

    // Handle user disconnection
    socket.on('disconnecting', () => {
        const username = userSocketMap[socket.id];
        const rooms = [...socket.rooms]; // Get all rooms the socket is part of

        rooms.forEach((roomID) => {
            const clients = getAllConnectedClients(roomID).filter(
                (client) => client.socketId !== socket.id
            );

            clients.forEach(({ socketId }) => {
                io.to(socketId).emit(Actions.DISCONNECTED, {
                    socketId: socket.id,
                    username,
                });
            });

            io.to(roomID).emit(Actions.DISCONNECTED, {
                socketId: socket.id,
                username,
            });
        });

        // Clean up after notifying
        delete userSocketMap[socket.id];
    });

    // Optional: Handle user manual leave (if applicable)
    socket.on(Actions.LEAVE, ({ roomID }) => {
        const username = userSocketMap[socket.id];
        socket.leave(roomID);

        const clients = getAllConnectedClients(roomID);

        clients.forEach(({ socketId }) => {
            io.to(socketId).emit(Actions.DISCONNECTED, {
                socketId: socket.id,
                username,
            });
        });

        console.log(`${username} left the room: ${roomID}`);
        delete userSocketMap[socket.id];
    });

    socket.on(Actions.LANGUAGE_CHANGED, ({ roomID, language, code }) => {
        socket.to(roomID).emit(Actions.LANGUAGE_CHANGED, {
            language,
            code,
        });
    });

    socket.on(Actions.CODE_CHANGE, ({ roomID, code, username }) => {
        socket.to(roomID).emit(Actions.CODE_CHANGE, {
            code,
            username,
        });
    });

    socket.on(Actions.TYPING, ({ roomID, username }) => {
        socket.to(roomID).emit(Actions.TYPING, {
            username,
        });
    });

});

connectDb();
app.use("/auth", loginRoute);
app.use("/auth", registerRoute);
app.use("/auth/protected", protectedRoute);
app.use("/note", addNote);
app.use("/note", viewNotes);
app.use("/note", updateNote);
app.use("/note", deleteNote);
app.use("/user", userdataRoute);
app.use("/user", updateUser);
app.use("/verify", verifyUser);
app.use("/forgot-password", sendOtp);
app.use(resetPassword);
app.use(subscribe);
app.use(contactMessage);
app.use("/save", saveProject);
app.use("/all", allProjects);
app.use("/delete", deleteProject);
app.use("/history", summarize);
app.use("/save", saveSummary);
app.use("/delete", deleteSummary);
app.use("/history", text);
app.use("/save", saveText);
app.use("/delete", deleteText);
app.use("/history", code);
app.use("/save", saveCode);
app.use("/delete", deleteCode);
app.use("/profile", saveProfilePic);
app.use("/profile", deleteProfilePic);
app.use("/save", saveVideo);
app.use("/get", getSavedVideos);
app.use("/delete", deleteVideo);
app.use("/save", saveDoc);
app.use("/get", getSavedDoc);
app.use('/delete', deleteDoc);
app.use(createInterviewPost);
app.use('/api',createBlogPost);
app.use(fetchInterviewPost);
app.use(fetchBlogPost);
app.use(fetchSavedPost);
app.use(savePost);
app.use(fetchBlogPosts);
app.use(fetchInterviewPosts);
app.use(deleteBlogPost);
app.use(deleteInterviewPost);
app.use(deleteSavedPost);
app.use(addComment);
app.use(fetchAllComments);
app.use(deleteComment);
app.use(resume);
app.use(events);
app.use(convert);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
