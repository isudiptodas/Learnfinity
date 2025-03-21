import { SavedPost } from '../models/savedPost.models.js';
import { User } from '../models/user.models.js';

export const savedPost = async (req, res) => {
    const userId = req.userId;
    const { title, desc, tags, img, author } = req.body;

    try {
        const found = await User.findById(userId);
        // console.log(found);

        if (!found) {
            return res.status(404).json({
                success: false,
                message: "No user found",
            });
        }

        if (img !== null) {
            const post = new SavedPost({
                postTitle: title,
                postDescription: desc,
                postAuthor: author || "Anynomous",
                postTags: tags,
                userId: userId,
                postImage: img
            });

            await post.save();

            return res.status(200).json({
                success: true,
                message: "Post created ",
                // post
            });

        }
        else {
            const post = new SavedPost({
                postTitle: title,
                postDescription: desc,
                postAuthor: author || "Anynomous",
                postTags: tags,
                userId: userId,
            });

            await post.save();

            return res.status(200).json({
                success: true,
                message: "Post created ",
                // post
            });
        }

    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong ",
        });

    }
}