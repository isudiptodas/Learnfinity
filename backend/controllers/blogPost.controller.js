
import { Blogpost } from '../models/blogPost.models.js';
import { User } from '../models/user.models.js';

export const createBlogPost = async (req, res) => {
    const { title, desc, tags, postImage, date } = req.body;
    const userId = req.userId;

    try {
        const found = await User.findOne({ userId });

        if (!found) {
            return res.status(404).json({
                success: false,
                message: "No user found",
            });
        }

        if (postImage !== null) {
            const post = new Blogpost({ 
                postTitle: title,
                postDescription: desc,
                postAuthor: found.displayname || "Anynomous",
                postTags: tags,
                userId: userId,
                postImage: postImage,
                postTime: date
            });
            
            await post.save();

            return res.status(200).json({
                success: true,
                message: "Post created ",
                post
            });

        }
        else {
            const post = new Blogpost({
                postTitle: title,
                postDescription: desc,
                postAuthor: found.displayname || "Anynomous",
                postTags: tags,
                userId: userId,
                postTime: date
            });

            await post.save();

            return res.status(200).json({
                success: true,
                message: "Post created ",
                post
            });
        }

    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong ",
        });

        console.log(err.message);
    }
}