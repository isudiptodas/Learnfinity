import { Routes, Route } from "react-router-dom"
import { useTheme } from "./context/ThemeContext";
import LandingPage from "./pages/LandingPage.jsx"
import Upcoming from "./pages/Upcoming.jsx"
import About from "./pages/About.jsx"
import Login from "./pages/LoginPage.jsx"
import Register from "./pages/RegisterPage.jsx"
import Contact from "./pages/Contact.jsx"
import Features from "./pages/Features.jsx"
import Footer from './components/Footer.jsx'
import ThemeSwitch from "./components/ThemeSwitch.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import News from "./pages/News.jsx";
import IDE from './pages/IDE.jsx'
import CodeCollab from "./pages/CodeCollab.jsx";
import Settings from "./pages/Settings.jsx";
import Notes from "./pages/Notes.jsx";
import WebPlayground from "./pages/WebPlayground.jsx";
import CodeCollabRoom from './pages/CodeCollabRoom.jsx';
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Terms from './pages/Terms.jsx';
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import License from './pages/License.jsx';
import TechNotes from "./pages/TechNotes.jsx";
import EverydayNotes from "./pages/EverydayNotes.jsx";
import WorkNotes from "./pages/WorkNotes.jsx";
import Preparation from './preparation/Preparation.jsx';
import DSA from './preparation/DSA.jsx';
import Interview from './preparation/Interview.jsx';

    import Summarize from './AIStudio/Summarize.jsx';
    import CodeGeneration from './AIStudio/CodeGeneration.jsx';
    import TextGeneration from './AIStudio/TextGeneration.jsx';
    import DocumentTranslation from "./AIStudio/DocumentTranslation.jsx";
    import DocumentSummarize from "./AIStudio/DocumentSummarize.jsx";
    import CodeTranslation from './AIStudio/CodeTranslation.jsx';
    import PdfQA from "./AIStudio/PdfQA.jsx";

import Community from './community/Explore.jsx';
    import Channels from './community/Channels.jsx';
    import AllPosts from './community/AllPosts.jsx';
    import BlogChannel from './community/BlogChannel.jsx';
    import InterviewChannel from './community/InterviewChannel.jsx';
    import CreateBlogPost from "./community/CreateBlogPost.jsx";
    import CreateInterviewPost from "./community/CreateInterviewPost.jsx";
    import ExplorePostPage from "./community/ExplorePostPage.jsx";

    import VideoPage from "./pages/VideoPage.jsx";
    import VideoWebDev from "./videoLectures/VideoLectures.WebDevelopment.jsx"
    import VideoAppDev from "./videoLectures/VideoLectures.AppDevelopment.jsx"
    import VideoDevops from "./videoLectures/VideoLectures.Devops.jsx"
    import VideoDesign from "./videoLectures/VideoLectures.Design.jsx"
    
    import DocumentationWebdev from "./documentation/Documentation.WebDev.jsx";
    import DocumentationAppdev from "./documentation/Documentation.AppDev.jsx";
    import DocumentationDevops from "./documentation/Documentation.Devops.jsx";

import Quiz from './quiz/Quiz.jsx';
    import Development from './quiz/Development.jsx';
    import CSTopic from './quiz/CSTopics.jsx';
    import Programming from './quiz/Programming.jsx';
    import Database from "./quiz/Database.jsx";

    import Reactjs from "./quiz/Reactjs.jsx";
    import Html from "./quiz/Html.jsx";
    import Css from "./quiz/Css.jsx";
    import Js from "./quiz/Js.jsx";
    import Ts from "./quiz/Ts.jsx";
    import Node from "./quiz/Node.jsx";

    import C from "./quiz/C.jsx";
    import Cpp from "./quiz/Cpp.jsx";
    import Java from "./quiz/Java.jsx";
    import Python from "./quiz/Python.jsx";
    import Rust from "./quiz/Rust.jsx";

    import MySQL from "./quiz/MySQL.jsx";
    import MongoDb from "./quiz/MongoDb.jsx";
    import PostgreSQL from "./quiz/PostgreSQL.jsx";

    import Networking from "./quiz/Networking.jsx";
    import Software from "./quiz/Software.jsx";
    import OS from "./quiz/OS.jsx";
    import Ubuntu from "./quiz/Ubuntu.jsx";
    import Cyber from "./quiz/Cyber.jsx";
    import DataStructure from "./quiz/DataStructure.jsx";
    import Algorithms from "./quiz/Algorithms.jsx";

import Roadmaps from "./roadmaps/Roadmaps.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import LiveResume from "./pages/LiveResume.jsx";
import DocStudio from './pages/DocStudio.jsx';
import Events from './pages/Events.jsx';
import Mindmap from './pages/Mindmap.jsx';

import DSAVisualizer from './visualizer/DSAVisualizer.jsx';
  import Searching from "./visualizer/Searching.jsx";
  import Stack from './visualizer/Stack.jsx';
  import Sorting from './visualizer/Sorting.jsx';
  import LinkedList from './visualizer/LinkedList.jsx';
  import Queue from './visualizer/Queue.jsx';

import SpaceTechnology from "./pages/SpaceTechnology.jsx";
import SystemDesign from "./pages/SystemDesign.jsx";
import DigitalMarketing from "./pages/DigitalMarketing.jsx";
import SoftSkill from "./pages/SoftSkill.jsx";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<><LandingPage /><Footer/></>} />
      <Route path="/upcoming" element={<><Upcoming /><Footer/></>} />
      <Route path="/about" element={<><About /><Footer/></>} />
      <Route path="/contact" element={<><Contact /><Footer/></>} />
      <Route path="/features" element={<><Features /><Footer/></>} />
      <Route path="/login" element={<><Login /><Footer/></>} />
      <Route path="/register" element={<><Register /><Footer/></>} />
      <Route path="/terms" element={<><Terms /><Footer/></>} />
      <Route path="/privacy-policy" element={<><PrivacyPolicy /><Footer/></>} />
      <Route path="/license" element={<><License /><Footer/></>} />

      <Route path="/dashboard" element={<> <ProtectedRoute><ThemeSwitch /> <Dashboard/><Footer/></ProtectedRoute></>} />
      
      <Route path="/preparation" element={<> <ProtectedRoute><ThemeSwitch /> <Preparation/><Footer/></ProtectedRoute></>} />
      <Route path="/preparation/dsa" element={<> <ProtectedRoute><ThemeSwitch /> <DSA/><Footer/></ProtectedRoute></>} />
      <Route path="/preparation/interview" element={<> <ProtectedRoute><ThemeSwitch /> <Interview/><Footer/></ProtectedRoute></>} />
     
      <Route path="/quiz" element={<> <ProtectedRoute><ThemeSwitch /> <Quiz/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/development" element={<> <ProtectedRoute><ThemeSwitch /> <Development/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/programming" element={<> <ProtectedRoute><ThemeSwitch /> <Programming/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/cs-topic" element={<> <ProtectedRoute><ThemeSwitch /> <CSTopic/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/database" element={<> <ProtectedRoute><ThemeSwitch /> <Database/><Footer/></ProtectedRoute></>} />

      <Route path="/quiz/development/react" element={<> <ProtectedRoute><ThemeSwitch /> <Reactjs/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/development/html" element={<> <ProtectedRoute><ThemeSwitch /> <Html/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/development/css" element={<> <ProtectedRoute><ThemeSwitch /> <Css/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/development/js" element={<> <ProtectedRoute><ThemeSwitch /> <Js/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/development/ts" element={<> <ProtectedRoute><ThemeSwitch /> <Ts/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/development/node" element={<> <ProtectedRoute><ThemeSwitch /> <Node/><Footer/></ProtectedRoute></>} />
      
      <Route path="/quiz/programming/c" element={<> <ProtectedRoute><ThemeSwitch /> <C/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/programming/cpp" element={<> <ProtectedRoute><ThemeSwitch /> <Cpp/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/programming/java" element={<> <ProtectedRoute><ThemeSwitch /> <Java/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/programming/python" element={<> <ProtectedRoute><ThemeSwitch /> <Python/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/programming/rust" element={<> <ProtectedRoute><ThemeSwitch /> <Rust/><Footer/></ProtectedRoute></>} />
      
      <Route path="/quiz/database/mongodb" element={<> <ProtectedRoute><ThemeSwitch /> <MongoDb/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/database/mysql" element={<> <ProtectedRoute><ThemeSwitch /> <MySQL/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/database/postgresql" element={<> <ProtectedRoute><ThemeSwitch /> <PostgreSQL/><Footer/></ProtectedRoute></>} />
      
      <Route path="/quiz/cs/networking" element={<> <ProtectedRoute><ThemeSwitch /> <Networking/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/cs/operating-system" element={<> <ProtectedRoute><ThemeSwitch /> <OS/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/cs/ubuntu" element={<> <ProtectedRoute><ThemeSwitch /> <Ubuntu/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/cs/software-engineering" element={<> <ProtectedRoute><ThemeSwitch /> <Software/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/cs/cyber-security" element={<> <ProtectedRoute><ThemeSwitch /> <Cyber/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/cs/data-structures" element={<> <ProtectedRoute><ThemeSwitch /> <DataStructure/><Footer/></ProtectedRoute></>} />
      <Route path="/quiz/cs/algorithms" element={<> <ProtectedRoute><ThemeSwitch /> <Algorithms/><Footer/></ProtectedRoute></>} />
      
      <Route path="/news" element={<><ProtectedRoute> <ThemeSwitch /> <News/> <Footer/></ProtectedRoute></>} />
      <Route path="/ide" element={<><ProtectedRoute> <ThemeSwitch /> <IDE/> <Footer/></ProtectedRoute></>} />
      <Route path="/code-collab" element={<><ProtectedRoute> <ThemeSwitch /> <CodeCollab/> <Footer/></ProtectedRoute></>} />
      <Route path="/code-collab/room/:roomID" element={<><ProtectedRoute> <ThemeSwitch /> <CodeCollabRoom/> <Footer/></ProtectedRoute></>} />
      <Route path="/settings" element={<><ProtectedRoute> <ThemeSwitch /> <Settings/> <Footer/></ProtectedRoute></>} />
      <Route path="/notes/personal" element={<><ProtectedRoute> <ThemeSwitch /> <Notes/> <Footer/></ProtectedRoute></>} />
      <Route path="/notes/everyday" element={<><ProtectedRoute> <ThemeSwitch /> <EverydayNotes/> <Footer/></ProtectedRoute></>} />
      <Route path="/notes/tech" element={<><ProtectedRoute> <ThemeSwitch /> <TechNotes/> <Footer/></ProtectedRoute></>} />
      <Route path="/notes/work" element={<><ProtectedRoute> <ThemeSwitch /> <WorkNotes/> <Footer/></ProtectedRoute></>} />
      <Route path="/playground" element={<><ProtectedRoute> <ThemeSwitch /> <WebPlayground/> <Footer/></ProtectedRoute></>} />
      <Route path="/events" element={<><ProtectedRoute> <ThemeSwitch /> <Events/> <Footer/></ProtectedRoute></>} />
      
      <Route path="/resume" element={<><ProtectedRoute> <ThemeSwitch /> <ResumePage/> <Footer/></ProtectedRoute></>} />
      <Route path="/resume/:id" element={<><ProtectedRoute> <ThemeSwitch /> <LiveResume/> <Footer/></ProtectedRoute></>} />
      
      <Route path="/video-lectures/videopage" element={<><ProtectedRoute> <VideoPage/></ProtectedRoute></>} />
          <Route path="/video-lectures/web-development" element={<><ProtectedRoute> <ThemeSwitch /> <VideoWebDev/><Footer/></ProtectedRoute></>} />
          <Route path="/video-lectures/app-development" element={<><ProtectedRoute> <ThemeSwitch /> <VideoAppDev/><Footer/></ProtectedRoute></>} />
          <Route path="/video-lectures/devops" element={<><ProtectedRoute> <ThemeSwitch /> <VideoDevops/><Footer/></ProtectedRoute></>} />
          <Route path="/video-lectures/design" element={<><ProtectedRoute> <ThemeSwitch /> <VideoDesign/><Footer/></ProtectedRoute></>} />

          <Route path="/documentation/web-development" element={<><ProtectedRoute> <ThemeSwitch /> <DocumentationWebdev/> <Footer/></ProtectedRoute></>} />
          <Route path="/documentation/app-development" element={<><ProtectedRoute> <ThemeSwitch /> <DocumentationAppdev/> <Footer/></ProtectedRoute></>} />
          <Route path="/documentation/devops" element={<><ProtectedRoute> <ThemeSwitch /> <DocumentationDevops/> <Footer/></ProtectedRoute></>} />
          
      <Route path="/roadmaps" element={<><ProtectedRoute> <ThemeSwitch /> <Roadmaps/> <Footer/></ProtectedRoute></>} />
      <Route path="/system-design" element={<><ProtectedRoute> <ThemeSwitch /> <SystemDesign/> <Footer/></ProtectedRoute></>} />
      
      <Route path="/domain/digital-marketing" element={<><ProtectedRoute> <ThemeSwitch /> <DigitalMarketing/> <Footer/></ProtectedRoute></>} />
      <Route path="/domain/space-technology" element={<><ProtectedRoute> <ThemeSwitch /> <SpaceTechnology/> <Footer/></ProtectedRoute></>} />
      <Route path="/domain/soft-skill" element={<><ProtectedRoute> <ThemeSwitch /> <SoftSkill/> <Footer/></ProtectedRoute></>} />
        
          <Route path="/ai-studio/summarize" element={<><ProtectedRoute> <ThemeSwitch /> <Summarize/> <Footer/></ProtectedRoute></>} />
          <Route path="/ai-studio/code-generation" element={<><ProtectedRoute> <ThemeSwitch /> <CodeGeneration/> <Footer/></ProtectedRoute></>} />
          <Route path="/ai-studio/text-generation" element={<><ProtectedRoute> <ThemeSwitch /> <TextGeneration/> <Footer/></ProtectedRoute></>} />
          <Route path="/ai-studio/document-translate" element={<><ProtectedRoute> <ThemeSwitch /> <DocumentTranslation/> <Footer/></ProtectedRoute></>} />
          <Route path="/ai-studio/document-summarize" element={<><ProtectedRoute> <ThemeSwitch /> <DocumentSummarize/> <Footer/></ProtectedRoute></>} />
          <Route path="/ai-studio/code-translation" element={<><ProtectedRoute> <ThemeSwitch /> <CodeTranslation/> <Footer/></ProtectedRoute></>} />
          <Route path="/ai-studio/pdf-qa" element={<><ProtectedRoute> <ThemeSwitch /> <PdfQA/> <Footer/></ProtectedRoute></>} />
        
          <Route path="/doc-studio" element={<><ProtectedRoute> <ThemeSwitch /> <DocStudio/> <Footer/></ProtectedRoute></>} />
          
          <Route path="/mindmap" element={<><ProtectedRoute> <ThemeSwitch /> <Mindmap/> <Footer/></ProtectedRoute></>} />
         
          <Route path="/visualizer" element={<><ProtectedRoute> <ThemeSwitch /> <DSAVisualizer/> <Footer/></ProtectedRoute></>} />
          <Route path="/visualizer/searching" element={<><ProtectedRoute> <ThemeSwitch /> <Searching/> <Footer/></ProtectedRoute></>} />
          <Route path="/visualizer/stack" element={<><ProtectedRoute> <ThemeSwitch /> <Stack/> <Footer/></ProtectedRoute></>} />
          <Route path="/visualizer/sorting" element={<><ProtectedRoute> <ThemeSwitch /> <Sorting/> <Footer/></ProtectedRoute></>} />
          <Route path="/visualizer/linked-list" element={<><ProtectedRoute> <ThemeSwitch /> <LinkedList/> <Footer/></ProtectedRoute></>} />
          <Route path="/visualizer/queue" element={<><ProtectedRoute> <ThemeSwitch /> <Queue/> <Footer/></ProtectedRoute></>} />

        <Route path="/community/explore" element={<><ProtectedRoute> <ThemeSwitch /> <Community/> <Footer/></ProtectedRoute></>} />
          <Route path="/community/channels" element={<><ProtectedRoute> <ThemeSwitch /> <Channels/> <Footer/></ProtectedRoute></>} />
          <Route path="/community/all-posts" element={<><ProtectedRoute> <ThemeSwitch /> <AllPosts/> <Footer/></ProtectedRoute></>} />

          <Route path="/community/blog-channel" element={<><ProtectedRoute> <ThemeSwitch /> <BlogChannel/> <Footer/></ProtectedRoute></>} />
          <Route path="/community/interview-channel" element={<><ProtectedRoute> <ThemeSwitch /> <InterviewChannel/> <Footer/></ProtectedRoute></>} />

          <Route path="/community/interview/post/:id" element={<><ProtectedRoute> <ThemeSwitch /> <ExplorePostPage/> <Footer/></ProtectedRoute></>} />
          <Route path="/community/explore/post/:id" element={<><ProtectedRoute> <ThemeSwitch /> <ExplorePostPage/> <Footer/></ProtectedRoute></>} />
          <Route path="/community/blog/post/:id" element={<><ProtectedRoute> <ThemeSwitch /> <ExplorePostPage/> <Footer/></ProtectedRoute></>} />
          <Route path="/community/saved/post/:id" element={<><ProtectedRoute> <ThemeSwitch /> <ExplorePostPage/> <Footer/></ProtectedRoute></>} />
          <Route path="/community/interview/post/:id" element={<><ProtectedRoute> <ThemeSwitch /> <ExplorePostPage/> <Footer/></ProtectedRoute></>} />
          <Route path="/community/blog/post/:id" element={<><ProtectedRoute> <ThemeSwitch /> <ExplorePostPage/> <Footer/></ProtectedRoute></>} />
          
          <Route path="/community/blog/create/post" element={<><ProtectedRoute> <ThemeSwitch /> <CreateBlogPost/> <Footer/></ProtectedRoute></>} />
          <Route path="/community/interview/create/post" element={<><ProtectedRoute> <ThemeSwitch /> <CreateInterviewPost/> <Footer/></ProtectedRoute></>} />
          
        <Route path="/forgot-password" element={<><ForgotPassword/> <Footer/></>} />
        <Route path="/reset-password" element={<> <ResetPassword/> <Footer/></>} />
    </Routes>
    </> 
  )
}

export default App
