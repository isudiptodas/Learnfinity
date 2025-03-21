import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { easyLevel, mediumLevel, hardLevel } from '../quiz/questions/html.js';

function Html() {

    const { dark } = useTheme();
    const navigate = useNavigate();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [isStarted, setIsStarted] = useState(false);
    const [isLast, setIslast] = useState(false);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const[difficulty, setDifficulty] = useState('');
    const[selectedAnswer, setSelectedAnswer] = useState('');
    const[questions, setQuestions] = useState(easyLevel);
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[currentIndex, setCurrentIndex] = useState(0);
    const[totalScore, setTotalScore] = useState(questions.length * 5);
    const[currentScore, setCurrentScore] = useState(0);
    const[isEnd, setIsEnd] = useState(false);

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    const openPage = (link) => {
        navigate(link);
    }

    const startQuiz = () => {

        if(!difficulty){
            toast.error("Please choose difficulty level");
            return;
        }
        setIsStarted(true);
        if(difficulty === 'easy'){
            let currentQuestionArray = easyLevel;
            setQuestions(currentQuestionArray);
        }
        else if(difficulty === 'medium'){
            let currentQuestionArray = mediumLevel;
            setQuestions(currentQuestionArray);
        }
        else if(difficulty === 'hard'){
            let currentQuestionArray = hardLevel;
            setQuestions(currentQuestionArray);
        }
    }

    const nextQuestion = () => {

        if(selectedAnswer === ''){
            toast.error("Please select an option");
            return;
        }

        if(currentIndex+1 === questions.length){
            setIsEnd(true);
            return;
        }

        if(selectedAnswer === questions[currentIndex].ans){
            setCurrentScore(currentScore+5);
        }

        if(questions.length === 10 && currentIndex+1 === 10){
            setIslast(true);
        }
        if(questions.length === 20 && currentIndex+1 === 20){
            setIslast(true);
        }
        if(questions.length === 15 && currentIndex+1 === 15){
            setIslast(true);
        }
        
        setCurrentIndex(currentIndex+1);
        setSelectedAnswer('');
    }


    return (
        <>
            <Toaster />
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                {/* sidebar section */}

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-y-auto flex flex-col justify-start items-center gap-2 lg:gap-5 relative`}>

                    <h1 className={`${isStarted ? "hidden" : "block"} text-center ${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-Titillium text-2xl lg:text-4xl my-5 font-bold`}>Choose difficulty level : </h1>

                    <div className={`${isStarted ? "hidden" : "block"} w-full h-auto py-2 flex justify-center items-center rounded-lg gap-5`}>
                         <span onClick={() => setDifficulty('easy')} className={`${dark ? "text-black border-2 border-black" : "text-white border-2 border-white"} ${difficulty === 'easy' ? "bg-blue-200 border-4 border-blue-700" : ""} cursor-pointer duration-200 ease-in-out px-4 lg:px-7 text-[12px] sm:text-sm lg:text-lg py-2 rounded-xl`}>Easy</span>
                         <span onClick={() => setDifficulty('medium')} className={`${dark ? "text-black border-2 border-black" : "text-white border-2 border-white"} ${difficulty === 'medium' ? "bg-blue-200 border-4 border-blue-700" : ""} cursor-pointer duration-200 ease-in-out px-4 lg:px-7 text-[12px] sm:text-sm lg:text-lg py-2 rounded-xl`}>Medium</span>
                         <span onClick={() => setDifficulty('hard')} className={`${dark ? "text-black border-2 border-black" : "text-white border-2 border-white"} ${difficulty === 'hard' ? "bg-blue-200 border-4 border-blue-700" : ""} cursor-pointer duration-200 ease-in-out px-4 lg:px-7 text-[12px] sm:text-sm lg:text-lg py-2 rounded-xl`}>Hard</span>  
                    </div>

                    <div className={`${isStarted ? "hidden" : "block"} w-full h-auto py-2 flex flex-col justify-center items-center rounded-lg`}>
                         <p className={`${dark ? "text-black" : "text-white"}`}>Easy - {easyLevel?.length} Questions</p>
                         <p className={`${dark ? "text-black" : "text-white"}`}>Medium - {mediumLevel?.length} Questions</p>
                         <p className={`${dark ? "text-black" : "text-white"}`}>Hard - {hardLevel?.length} Questions</p>
                         <p className={`text-cyan-600 font-bold mt-2`}>Each Question - 5 marks</p>
                    </div>

                    <button onClick={startQuiz} className={`bg-cyan-500 ${dark ? "text-black" : "text-white"} ${isStarted ? "hidden" : "block"} w-[80%] sm:w-[60%] md:w-[40%] hover:bg-cyan-600 duration-200 ease-in-out cursor-pointer py-2 rounded-lg`}>Start Quiz</button> 
                    
                    <div className={`${isEnd ? "hidden" : "block"} h-auto ${isStarted ? "block" : "hidden"} mt-5 rounded-lg w-full md:w-[60%] lg:w-[50%] py-6 px-4 ${dark ? "bg-white" : "bg-black" } flex flex-col justify-start items-center`}>
                        <h1 className={`text-start w-full ${dark ? "text-black" : "text-white"} text-xl font-bold font-Titillium`}>{currentIndex+1}. {questions[currentIndex].question}</h1>

                        <p className={`w-full cursor-pointer h-auto py-3 px-3 ${selectedAnswer === questions[currentIndex].option1 ? "bg-blue-300 border-4 border-blue-800" : "border-[1px]"} ${dark ? "text-black border-black" : "text-white border-white"} rounded-md mt-5`} onClick={() => setSelectedAnswer(questions[currentIndex].option1)}>{questions[currentIndex].option1}</p>
                        <p className={`w-full cursor-pointer h-auto py-3 px-3 ${selectedAnswer === questions[currentIndex].option2 ? "bg-blue-300 border-4 border-blue-800" : "border-[1px]"} ${dark ? "text-black border-black" : "text-white border-white"} rounded-md mt-5`} onClick={() => setSelectedAnswer(questions[currentIndex].option2)}>{questions[currentIndex].option2}</p>
                        <p className={`w-full cursor-pointer h-auto py-3 px-3 ${selectedAnswer === questions[currentIndex].option3 ? "bg-blue-300 border-4 border-blue-800" : "border-[1px]"} ${dark ? "text-black border-black" : "text-white border-white"} rounded-md mt-5`} onClick={() => setSelectedAnswer(questions[currentIndex].option3)}>{questions[currentIndex].option3}</p>
                        <p className={`w-full cursor-pointer h-auto py-3 px-3 ${selectedAnswer === questions[currentIndex].option4 ? "bg-blue-300 border-4 border-blue-800" : "border-[1px]"} ${dark ? "text-black border-black" : "text-white border-white"} rounded-md mt-5`} onClick={() => setSelectedAnswer(questions[currentIndex].option4)}>{questions[currentIndex].option4}</p>
                        <p className={`w-full h-auto py-3 px-3 ${dark ? "text-black" : "text-white"} bg-cyan-500 rounded-md mt-5 text-center text-xl font-semibold cursor-pointer hover:bg-cyan-700 duration-200 ease-in-out`} onClick={nextQuestion}>{questions.length === currentIndex+1 ? "Finish" : "Next"}</p>

                        <p className={`w-full py-3 text-center ${dark ? "text-black" : "text-white"} opacity-50`}>Question {currentIndex+1} of {questions.length}</p>
                    </div>

                    <div className={`py-4 px-3 rounded-lg ${dark ? "bg-white" : "bg-black"} ${isEnd && (currentScore >= 20 && currentScore <= totalScore-5) ? "block" : "hidden"} w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mt-5 flex flex-col justify-start items-center`}>
                        <p className="text-emerald-600 font-semibold text-2xl">Wow ! Nice Score. 😊</p>
                        <p className="text-emerald-600 font-semibold text-2xl">Keep practicing and keep improving.</p>
                    </div>

                    <div className={`py-4 px-3 rounded-lg ${dark ? "bg-white" : "bg-black"} ${isEnd && currentScore === totalScore ? "block" : "hidden"} w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mt-5 flex flex-col justify-start items-center`}>
                        <p className="text-emerald-600 font-semibold text-2xl">Wow ! Full Score. 🎉</p>
                        <p className="text-emerald-600 font-semibold text-2xl text-center">Congratulations on your achievement</p>
                    </div>

                    <div className={`py-4 px-3 rounded-lg ${dark ? "bg-white" : "bg-black"} ${isEnd && currentScore <= 20 ? "block" : "hidden"} w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mt-5 flex flex-col justify-start items-center`}>
                        <p className="text-red-600 font-semibold text-2xl">Oops !</p>
                        <p className="text-red-600 font-semibold text-2xl text-center">Looks like your preparation is not well enough. 💔</p>
                        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out mt-3 text-lg`}>Try referring these : </p>
                        <Link to='/documentation/web-development' className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out mt-5 underline hover:text-cyan-500`}>View Documentation </Link>
                        <Link to='/video-lectures/web-development' className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out underline hover:text-cyan-500`}>View Video Lecture </Link>
                    </div>

                    <div className={`${isEnd ? "block" : "hidden"} w-full sm:w-[60%] md:w-[50%] lg:w-[40%] h-auto rounded-lg py-5 px-3 ${dark ? "bg-white" : "bg-black"} mt-5 flex flex-col justify-start items-center gap-3`}>
                        <p className={`${dark ? "text-black" : "text-white"} font-Titillium text-sm md:text-lg`}>Total Questions : {questions.length}</p>
                        <p className={`${dark ? "text-black" : "text-white"} font-Titillium text-sm md:text-lg`}>Total Score : {totalScore}</p>
                        <p className={`${dark ? "text-black" : "text-white"} font-Titillium text-sm md:text-lg`}>Your Score : {currentScore}</p>
                        
                        <div className="w-full flex justify-center items-center h-auto gap-2">
                            <Link to='/quiz/development' className={`w-full py-2 bg-red-600 text-center ${dark ? "text-white" : "text-white"} duration-200 ease-in-out rounded-lg`}>Go Back</Link>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Html
