import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { FaPencilAlt } from "react-icons/fa";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { girlsProfile, boysProfile } from '../profile.js';
import FormData from 'form-data';
import Loading from '../components/Loading.jsx';

function UpdateProfile({ className }) {

    const { dark } = useTheme();
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newDisplayName, setNewDisplayName] = useState('');
    const [userData, setuserdata] = useState([]);
    const [subscribed, setSubscribed] = useState(false);
    const [profilePic, setProfilePic] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [isImageSelected, setIsImageSelected] = useState(false);
    const[isProfilePicVisible, setisProfilePicVisible] = useState(false);
    const [deviceSelected, setDeviceSelected] = useState(false);
    const [publicId, setPublicId] = useState('');
    const [imageURL, setImageURL] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const[isRemoving, setIsRemoving] = useState(false);
    const navigate = useNavigate();

    const cloudName = 'dogrrh0ce';

    const handleImageSelect = async () => {

        setIsImageSelected(!isImageSelected);
        // setProfilePic(image);
        // setDeviceSelected(!deviceSelected);

        const formData = new FormData();
        formData.append('file', selectedImage);
        formData.append('upload_preset', 'profile_image_upload');
        formData.append('folder', 'User profile picture');

        try {
            setIsUploading(true);
            const imageRes = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData);
            // console.log(imageRes.data.secure_url);

            if (imageRes.data) {
                setIsModalOpen(!isModalOpen);
                setIsImageSelected(!isImageSelected);
                const pic = imageRes.data.secure_url;
                const cloudPublicId = imageRes.data.public_id;
                // setProfilePic(pic);
                // setSelectedImage(profilePic);
                setPublicId(cloudPublicId);
                // localStorage.setItem("publicId", cloudPublicId);
                setImageURL(pic);

                await saveToDb({imageURL: pic, publicId: cloudPublicId});

            }
        }
        catch (err) {
            console.error(err.message);
        }
        finally {
            setIsUploading(false);
        }

    }

    const saveToDb = async ({ imageURL, publicId }) => {

        const token = localStorage.getItem("token");
        try{
            const res = await axios.post(`https://learnfinity-mzah.onrender.com/profile/image/save`, {
                imageURL, publicId
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            if(res.data.success){
                setProfilePic(res.data.user.profilePic);
                // toast.success("Profile photo updated successfully");
            }
        }
        catch(err){
            console.error(err.message);
        }
    }

    const handleRemoveImage = async (publicId) => {

        if(publicId === null){
            toast.error("Public id is missing");
            return;
        }

        try {
            // const res = await axios.delete(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
            //     public_id: publicId,
            // });

            const token = localStorage.getItem("token");

                setIsRemoving(true);

                const res = await axios.delete('https://learnfinity-mzah.onrender.com/profile/delete/image',{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    data: {
                        publicId,
                    },
                });
                if (res.data.success) {
                    setProfilePic('');
                    navigate("/settings");
                    // toast.success("Profile photo removed");
                    setSelectedImage('');
                }
            
        }
        catch (err) {
            console.error(err.message);
        }
        finally{
            setIsRemoving(false);
        }
    }

    const handleCancel = () => {
        setIsModalOpen(!isModalOpen);
        setSelectedImage('');
    }

    const handleDeviceSelect = async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`https://learnfinity-mzah.onrender.com/user/details`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res.data.success) {
                    // console.log(res.data.exist);
                    const user = res.data.exist;
                    setuserdata(user);
                    setNewName(user.name);
                    setNewEmail(user.email);
                    setNewDisplayName(user.displayname);
                    setProfilePic(user.profilePic);
                    setPublicId(user.publicId);
                    setisProfilePicVisible(true);

                    if(profilePic !== ''){
                        setisProfilePicVisible(true);
                    }
                    else{
                        setisProfilePicVisible(false);
                    }
                    
                    if(user.publicId === ''){
                        setPublicId('');
                    }
                    else{
                        setPublicId(user.publicId);
                    }
                }

                if (res.data.exist.subscribed === true) {
                    setSubscribed(true);
                }
                else {
                    setSubscribed(false);
                }

            } catch (err) {
                console.log(err.response?.data?.message);
            }
        }

        fetchUserData();

    }, [profilePic]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            if (newName === '') {
                toast.error("New name cannot be empty");
                return;
            }
            else if (newEmail === '') {
                toast.error("New email cannot be empty");
                return;
            }

            else if (newDisplayName == '') {
                toast.error("New display name cannot be empty");
                return;
            }

            const res = await axios.put("https://learnfinity-mzah.onrender.com/user/details/update", { newName, newEmail, newDisplayName }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.data.success) {
                toast.success("Profile updated successfully");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 3000);
            }
        }
        catch (err) {
            toast.error(err.response?.data?.message);
            console.error(err.response?.data?.message);
        }
    }

    useEffect(() => {
        const subscribeToNewsletter = async () => {

            try {
                const res = await axios.put('https://learnfinity-mzah.onrender.com/subscribe', {
                    email: userData.email, subscribed: subscribed,
                });

            }
            catch (err) {
                console.log(err.response?.data.message);
            }
        }

        subscribeToNewsletter();
    }, [subscribed])

    return (
        <>
            <div className={`${className} h-auto py-5 w-full sm:py-6 lg:py-10 px-5 ${dark ? "text-black" : "text-white"} ease-in-out duration-200 rounded-xl overflow-y-auto sidebar flex flex-col justify-start ${isModalOpen ? "justify-center" : ""} items-center gap-10 relative`}>
                <Toaster />

                <div className={` h-auto py-5 px-5 rounded-lg z-30 w-full md:w-2/3 lg:w-1/2 ${dark ? "bg-white" : "bg-black"} ${isModalOpen ? "block" : "hidden"} overflow-hidden flex flex-col gap-5`}>
                    <div className={`${selectedImage !== '' ? "hidden" : "block"} h-auto py-5 px-5 w-full overflow-x-auto flex justify-start items-center gap-4 content`}>
                        {boysProfile.map((pic) => {
                            return <div key={pic.id} className='h-auto p-10 w-auto relative rounded-full overflow-hidden bg-emerald-400 cursor-pointer' onClick={() => setSelectedImage(pic.img)}>
                                <div className={`${selectedImage === pic.img ? "block" : "hidden"} text-white text-4xl text-center absolute z-20 bg-cyan-900 opacity-90 h-full w-full top-0 left-0 flex justify-center items-center`}>
                                    <span>✓</span>
                                </div>
                                <img src={pic.img} className='z-10 absolute top-0 left-0 h-full w-full object-cover' />
                            </div>
                        })}
                    </div>
                    <div className={`${selectedImage !== '' ? "hidden" : "block"} h-auto py-5 px-5 w-full overflow-x-auto flex justify-start items-center gap-4 content`}>
                        {girlsProfile.map((pic) => {
                            return <div key={pic.id} className='h-auto p-10 w-auto relative rounded-full overflow-hidden bg-emerald-400 cursor-pointer' onClick={() => setSelectedImage(pic.img)}>
                                <div className={`${selectedImage === pic.img ? "block" : "hidden"} text-white text-4xl text-center absolute z-20 bg-cyan-900 opacity-90 h-full w-full top-0 left-0 flex justify-center items-center`}>
                                    <span>✓</span>
                                </div>
                                <img src={pic.img} className='z-10 absolute top-0 left-0 h-full w-full object-cover' />
                            </div>
                        })}
                    </div>

                    <div className='w-full h-auto flex flex-col justify-center items-center gap-3'>
                        <div className={`${selectedImage !== '' ? "block" : "hidden"} relative p-20 h-auto w-1/3 overflow-hidden rounded-full`}>
                            <img src={selectedImage} className='absolute top-0 left-0 object-cover h-full w-full' />
                        </div>

                        <p className={`${selectedImage !== '' ? "block" : "hidden"} text-red-500 cursor-pointer`} onClick={() => setSelectedImage('')}>Remove Selected Image</p>
                    </div>

                    <button className={`relative bg-gray-300 text-black py-2 rounded-md hover:opacity-85 duration-300 ease-in-out cursor-pointer`}><input type="file" className={`w-full absolute top-1/2 left-1/2 opacity-0 transform translate-y-1/2 inset-3 -translate-x-1/2`} onChange={handleDeviceSelect} />Choose from device</button>

                    <button className='w-full bg-cyan-600 cursor-pointer hover:bg-cyan-700 duration-300 ease-in-out py-2 rounded-md text-white flex justify-center items-center gap-3' onClick={() => handleImageSelect(selectedImage)}>{isUploading === true ? (<>Uploading image ... <Loading /></>) : (<>Upload</>)}</button>
                    <button className='w-full bg-red-500 cursor-pointer hover:bg-red-700 duration-300 ease-in-out py-2 text-white rounded-md' onClick={handleCancel}>Cancel</button>
                </div>

                <form className={`h-auto py-5 px-5 md:py-8 rounded-lg lg:rounded-2xl w-full sm:w-[70%] md:w-[60%] lg:w-1/2 flex flex-col justify-center items-center gap-10 ${isModalOpen ? "hidden" : "block"}`} onClick={handleSubmit}>

                    <div className={`${dark ? "text-black" : "text-white"} w-full flex justify-center items-center font-Josefin font-semibold text-2xl md:text-3xl lg:text-2xl py-2`}>
                        <h1 className='text-center'>Manage your account</h1>
                    </div>

                    <div className={`${dark ? "bg-gray-300" : "bg-zinc-800"} w-auto p-20 rounded-full relative overflow-hidden`}>
                        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold opacity-35 text-5xl duration-300 ease-in-out cursor-pointer'>?</h1>
                        <img src={profilePic || ''} className={`absolute top-0 left-0 z-20 h-full w-full object-cover ${profilePic === null ? "hidden" : "block"}`} />
                    </div>

                    {/* <p className={`${profilePic === null ? "hidden" : "block"} text-red-600 cursor-pointer"}`} onClick={() => handleRemoveImage(publicId)}>Remove photo</p> */}

                    <button className={`bg-gradient-to-br from-cyan-500 to-teal-600 px-8 w-full lg:w-1/2 hover:opacity-80 text-white duration-300 ease-in-out py-2 rounded-lg ${isProfilePicVisible ? "hidden" : "block"}`} onClick={() => setIsModalOpen(!isModalOpen)}>Upload</button>
                    <button className={`bg-red-500 px-8 w-full lg:w-1/2 text-white hover:opacity-80 duration-300 ease-in-out py-2 rounded-lg flex justify-center items-center gap-3 ${isProfilePicVisible ? "block" : "hidden"}`} onClick={() => handleRemoveImage(publicId)}>{isRemoving ? (<>Removing image ... <Loading /></>) : (<>Remove</>)}</button>

                    <div className='w-full flex flex-col justify-center items-start gap-2'>
                        <label htmlFor="name" className='flex justify-center items-center gap-2'>Edit Name <FaPencilAlt /></label>
                        <input type="text" value={newName} className={` ${dark ? "bg-gray-300 text-black" : "bg-zinc-700 text-white"} rounded-md w-full py-2 px-2`} onChange={(e) => setNewName(e.target.value)} />
                    </div>

                    <div className='w-full flex flex-col justify-center items-start gap-2'>
                        <label htmlFor="email" className='flex justify-center items-center gap-2'>Edit Email <FaPencilAlt /></label>
                        <input type="email" value={newEmail} className={` ${dark ? "bg-gray-300 text-black" : "bg-zinc-700 text-white"} rounded-md w-full py-2 px-2`} onChange={(e) => setNewEmail(e.target.value)} />
                    </div>

                    <div className='w-full flex flex-col justify-center items-start gap-2'>
                        <label htmlFor="displayname" className='flex justify-center items-center gap-2'>Edit Display Name <FaPencilAlt /></label>
                        <input type="text" value={newDisplayName} className={` ${dark ? "bg-gray-300 text-black" : "bg-zinc-700 text-white"} rounded-md w-full py-2 px-2`} onChange={(e) => setNewDisplayName(e.target.value)} />
                    </div>

                    <button className={`${dark ? "bg-black text-white hover:bg-zinc-700" : "bg-white hover:bg-gray-300 text-black"} ease-in-out duration-200 w-full py-2 rounded-full `}>Submit</button>

                </form>

                <div className={`${isModalOpen ? "hidden" : "block"} h-full border-2 border-cyan-700 ${dark ? " text-black" : " text-white"} text-center flex flex-col justify-center items-center duration-300 ease-in-out rounded-xl w-full sm:w-[70%] md:w-[60%] lg:w-1/2 px-10 py-10 gap-10 lg:gap-6`}>
                    <span className='text-2xl font-semibold font-Titillium'>Don’t Miss a Beat!</span><p>Be the first to know about our latest content, special offers, and insider news. Subscribe to our newsletter and let the best of what we offer come right to you. No effort required!</p>
                    <button className={`w-full py-2 rounded-lg ${subscribed ? "bg-green-600 hover:bg-green-800 text-white" : "bg-red-600 hover:bg-red-800 text-white"} duration-200 ease-in-out cursor-pointer`} onClick={() => setSubscribed(!subscribed)}>{subscribed ? "Subscribed ✓" : "Subscribe"}</button>
                </div>
            </div>
        </>
    )
}

export default UpdateProfile
