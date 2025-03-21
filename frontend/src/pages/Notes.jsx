import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import { FaRegPlusSquare } from "react-icons/fa";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import NoteBox from "../components/NoteBox";
import NoteDropdown from "../components/NoteDropdown";
import { Link } from "react-router-dom";

function Notes() {


  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const { isSideBarVisible, toggleSidebar } = useSidebar(false);
  const [note, setNote] = useState('');
  const [curNote, setCurNote] = useState('');
  const [currentDesc, setCurrentDesc] = useState('');
  const [noteCategory, setNoteCategory] = useState('personal');
  const [desc, setDesc] = useState('');
  const [isOpen, setIsopen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [isNoteVisible, setIsNoteVisible] = useState(false);

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const handleNote = async (e) => {
    e.preventDefault();
    if (note === '' || desc === '') {
      toast.error("Both note title and description is required");
      return;
    }

    const currentDate = new Date();

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    const time = currentDate.toLocaleDateString('en-US', options);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post("https://learnfinity-mzah.onrender.com/note/add", {
        note, desc, category: noteCategory, time
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setIsopen(!isOpen);
        toast.success("Note added successfully !");
        setNotes((prevNotes) => [...prevNotes, res.data.note]);

        await showNotes();
        setLoaded(true);
      }
    }
    catch (err) {
      console.error(err.response?.data?.message);
      toast.error(err.response?.data?.message);
    }
    finally {
      setNote('');
      setDesc('');
      setNoteCategory('');
      setLoaded(false);
    }
  }

  const handleIsNoteVisible = (note) => {
    setCurrentNote(note);
    setCurNote(note.title);
    setCurrentDesc(note.desc);
    setIsNoteVisible(!isNoteVisible);
  }

  const handleEditNote = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(`https://learnfinity-mzah.onrender.com/note/update/${currentNote._id}`, {
        note, desc, category: noteCategory
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (res.data.success) {
        toast.success("Note updated successfully ");
        setNotes(prevNotes =>
          prevNotes.map((n) =>
            n._id === currentNote._id ? { ...n, title: note, desc: desc } : n
          )
        );
        setSelectedNoteId('');
      }
    }
    catch (err) {
      console.log(err.response?.data?.message);
    }
    finally {
      setisEdit(!isEdit);
    }
  }

  const handleDelete = async (noteId) => {

    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(`https://learnfinity-mzah.onrender.com/note/delete/${noteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setNotes(notes.filter(note => note._id !== noteId));
        toast.success("Note deleted successfully");
      }
    }
    catch (err) {
      toast.error(err.response?.data?.message);
    }
    finally{
      setIsNoteVisible(!isNoteVisible);
    }
  }

  const handleNoteCategory = (value) => {
    setNoteCategory(value);
    // console.log(noteCategory);
  }

  const showNotes = async () => {

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post("https://learnfinity-mzah.onrender.com/note/all-notes", {
        category: noteCategory
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        // console.log(res.data.notes);
        setNotes(res.data.notes || []);
      }
    }
    catch (err) {
      console.error(err.response?.data?.message);
    }
  }


  const onEditClick = () => {
    setSelectedNoteId(currentNote._id);
    setisEdit(!isEdit);
    setNote(currentNote?.title);
    setDesc(currentNote?.desc);
  }

  useEffect(() => {
    showNotes();
  }, [])

  return (
    <>
      <Toaster />
      <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

        {/* sidebar section */}

        <Sidebar />
        <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

        {/* main content section */}

        <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] ${notes.length > 5 ? "lg:h-auto" : "lg:min-h-100"} px-10 rounded-xl  md:py-5 lg:py-10 content overflow-y-auto flex flex-col justify-start items-center gap-2 lg:gap-5 relative`}>

          {/* Add note box */}
          <div className={`${isOpen ? "block" : "hidden"} z-30 ease-in-out h-full px-20 top-0 md:px-32 w-full flex justify-center items-center absolute ${dark ? "bg-white" : "bg-black"} px-5 py-3`}>
            <div className={`h-auto w-full lg:w-1/2 rounded-xl ${dark ? "border-2 border-black" : "border-2 border-white"} flex flex-col justify-center items-start py-5 px-5`}>
              <div className={` px-3 py-3 w-full flex flex-col justify-center items-start gap-2 ${dark ? "text-black" : "text-white"}`}>
                <label htmlFor="note">Note title</label>
                <input type="text" name="note" className={` ${dark ? "bg-gray-300 text-black" : "bg-zinc-800"} duration-300 ease-in-out w-full rounded-md px-5 py-2`} placeholder="Enter note title" onChange={(e) => setNote(e.target.value)} />
              </div>
              <div className={` px-3 py-3 w-full flex flex-col justify-center items-start gap-2 ${dark ? "text-black" : "text-white"}`}>
                <label htmlFor="desc">Note description</label>
                <textarea type="text" name="desc" className={`${dark ? "bg-gray-300 text-black" : "bg-zinc-800"} text-start duration-300 ease-in-out w-full rounded-md px-5 py-5 h-48`} placeholder="Enter note description" onChange={(e) => setDesc(e.target.value)} />
              </div>
              {/* <div className={` px-3 py-3 w-full flex flex-col justify-center items-start gap-2 ${dark ? "text-black" : "text-white"}`}>
                <label htmlFor="desc">Note description</label>
                <NoteDropdown onSelect={handleNoteCategory}/>
              </div> */}
              <div className={` w-full py-2 px-2 h-auto flex flex-col lg:flex-row gap-3`}>
                <button className={`bg-cyan-500 py-2 hover:opacity-80 text-white cursor-pointer duration-300 ease-in-out lg:w-1/2`} onClick={handleNote}>Add note +</button>
                <button className={`bg-red-500 text-white py-2 hover:opacity-80 duration-300 ease-in-out lg:w-1/2`} onClick={() => setIsopen(!isOpen)}>Cancel X</button>
              </div>
            </div>
          </div>

          <div className={`mb-5 w-full md:justify-center md:w-[60%] lg:w-[40%] rounded-md flex justify-start items-center gap-5 h-auto py-2 px-2 ${dark ? "bg-white shadow-lg" : "bg-transparent border-b-2 border-gray-500"}  content overflow-x-auto flex-shrink-0`}>
            <p className={`${dark ? "text-black" : "text-white"} w-auto px-5 py-2 flex-shrink-0 bg-cyan-500 rounded-md text-white`}><Link to="/notes/personal">Personal</Link></p>
            <p className={`${dark ? "text-black" : "text-white"} w-auto px-5 py-2 flex-shrink-0`}><Link to="/notes/work">Work</Link></p>
            <p className={`${dark ? "text-black" : "text-white"} w-auto px-5 py-2 flex-shrink-0`}><Link to="/notes/tech">Tech</Link></p>
            <p className={`${dark ? "text-black" : "text-white"} w-auto px-5 py-2 flex-shrink-0`}><Link to="/notes/everyday">Everyday</Link></p>
          </div>

          {/* edit note box */}
          <div className={` z-20 ${isEdit ? "block" : "hidden"} top-0 ease-in-out h-full px-20 md:px-32 w-full flex justify-center items-center absolute ${dark ? "bg-white" : "bg-black"} px-5 py-3`}>
            <div className={`h-auto w-full md:w-[70%] lg:w-1/2 rounded-xl ${dark ? "border-2 border-black" : "border-2 border-white"} flex flex-col justify-center items-start py-5 px-5`}>
              <div className={` px-3 py-3 w-full flex flex-col justify-center items-start gap-2 ${dark ? "text-black" : "text-white"}`}>
                <label htmlFor="note">Edit note title</label>
                <input type="text" value={note} name="note" className={` ${dark ? "bg-gray-300 text-black" : "bg-zinc-800"} duration-300 ease-in-out w-full rounded-md px-5 py-2`} onChange={(e) => setNote(e.target.value)} />
              </div>
              <div className={` px-3 py-3 w-full flex flex-col justify-center items-start gap-2 ${dark ? "text-black" : "text-white"}`}>
                <label htmlFor="desc">Edit note description</label>
                <textarea type="text" value={desc} name="desc" className={`${dark ? "bg-gray-300 text-black" : "bg-zinc-800"} text-start duration-300 ease-in-out w-full rounded-md px-5 py-5 h-48`} onChange={(e) => setDesc(e.target.value)} />
              </div>
              <div className={` px-3 py-3 w-full flex flex-col justify-center items-start gap-2 ${dark ? "text-black" : "text-white"}`}>
                <label htmlFor="desc">Note description</label>
                <NoteDropdown onSelect={handleNoteCategory} />
              </div>
              <div className={` w-full py-2 px-2 h-auto flex flex-col lg:flex-row gap-3`}>
                <button className={`bg-blue-500 py-2 hover:opacity-80 text-white cursor-pointer duration-300 ease-in-out lg:w-1/2`} onClick={handleEditNote}>Save ✓</button>
                <button className={`bg-red-500 text-white py-2 hover:opacity-80 duration-300 ease-in-out lg:w-1/2`} onClick={() => setisEdit(!isEdit)}>Cancel X</button>
              </div>
            </div>
          </div>

          {/*  Note expand */}

          <div className={`${isEdit ? "hidden" : "block"} z-20 ${isNoteVisible ? "block" : "hidden"} top-0 ease-in-out h-full px-20 md:px-32 w-full flex justify-center items-center absolute ${dark ? "bg-white" : "bg-black"} px-5 py-3`}>
            <div className={`h-auto w-full md:w-[70%] lg:w-1/2 rounded-xl ${dark ? "border-2 border-black" : "border-2 border-white"} flex flex-col justify-center items-start py-5 px-5`}>
              <div className={` px-3 py-3 w-full flex flex-col justify-center items-start gap-2 ${dark ? "text-black" : "text-white"}`}>
                <label htmlFor="note">Note Title : </label>
                <p className={`w-full px-3 py-3 break-words rounded-md ${dark ? "bg-gray-300 text-black" : "bg-zinc-700"}`}>{curNote}</p>
              </div>
              <div className={` px-3 py-3 w-full flex flex-col justify-center items-start gap-2 ${dark ? "text-black" : "text-white"}`}>
                <label htmlFor="desc">Note Description : </label>
                <p className={` w-full break-words px-5 max-h-60 overflow-y-auto py-3 rounded-md ${dark ? "bg-gray-300 text-black" : "bg-zinc-700"}`}>{currentDesc}</p></div>

              <div className={` w-full py-2 px-2 h-auto flex flex-col lg:flex-row gap-3`}>
                <button className={`bg-emerald-500 py-2 hover:opacity-80 text-white cursor-pointer duration-300 ease-in-out lg:w-1/2`} onClick={onEditClick}>Edit</button>
                <button className={`${dark ? "bg-black text-white" : "bg-white text-black"} py-2 hover:opacity-80 duration-300 ease-in-out lg:w-1/2 cursor-pointer`} onClick={() => setIsNoteVisible(!isNoteVisible)}>Cancel </button>
                <button className={`bg-red-500 text-white py-2 hover:opacity-80 duration-300 ease-in-out lg:w-1/2 cursor-pointer`} onClick={() => handleDelete(currentNote._id)}>Delete</button>
              </div>
            </div>
          </div>



          <div className={`h-[10%] md:h-[15%] w-full md:w-[60%] lg:w-[35%] overflow-hidden rounded-lg`}>
            <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} h-auto w-full cursor-pointer hover:opacity-80 hover:px-7 duration-300 ease-in-out flex justify-center items-center gap-4 px-3 py-2 rounded-lg`} onClick={() => setIsopen(!isOpen)}>
              <FaRegPlusSquare className={`text-4xl`} />
              <p className={`font-Titillium text-sm md:text-lg lg:text-sm `}>Create a new note</p>
            </div>
          </div>

          <div className={`${notes.length >= 1 ? "block" : "hidden"} w-full flex h-auto content py-3 overflow-hidden`}>

            {notes.length > 0 ? (<div className="w-full sm:grid sm:grid-cols-2 sm:place-items-center md:grid-cols-3 xl:grid-cols-4 gap-3 h-auto">
              {notes.map((note, index) => {
                return <NoteBox key={index} title={note?.title || ''} isNoteVisible={() => handleIsNoteVisible(note)} time={note?.noteTime}/>
              })}</div>) :
              (<div className="h-full w-full overflow-hidden flex flex-wrap justify-start items-start text-center gap-4">
                <h1 className={`${dark ? "text-zinc-600" : "text-gray-500"} text-4xl lg:text-3xl font-Titillium`}>No notes availabe</h1>
              </div>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Notes
