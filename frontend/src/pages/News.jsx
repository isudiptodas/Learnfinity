import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import NewsBox from '../components/NewsBox';
import WavePieChart from "../components/WavePieChart";
import { programmingLanguages, frameworks, techSkills } from "../data";

function News() {

    const { dark } = useTheme();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    const [techNews, setTechNews] = useState([]);
    const [programmingNews, setProgrammingNews] = useState([]);


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const programmingRes = await axios.get('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json');
                //    const programmingRes = await axios.get('https://learnfinity-mzah.onrender.com/api/tech-news');
                setProgrammingNews(programmingRes.data.articles);

                const techRes = await axios.get('https://saurav.tech/NewsAPI/top-headlines/category/science/in.json');
                // const techRes = await axios.get('https://learnfinity-mzah.onrender.com/api/programming-news');
                setTechNews(techRes.data.articles);

                //    console.log(programmingRes.data.articles);
                //    console.log(techRes.data.articles);

            }
            catch (err) {
                console.error(err.message);
            }
        }

        fetchNews();

    }, []);

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-auto flex flex-col gap-10 lg:gap-2`}>
                    <div className={` h-auto w-full rounded-xl flex flex-col justify-center items-center gap-5 md:flex-wrap py-10`}>

                        <div className={` h-auto py-10 px-5 lg:px-10 lg:py-10 gap-5 lg:gap-20 w-full flex flex-col lg:flex-row justify-center items-center lg:justify-start ${dark ? "bg-white" : "bg-black"} rounded-xl overflow-y-auto`}>
                            <WavePieChart data={programmingLanguages}
                                className={` w-full h-72 ${dark ? "text-black" : "text-white"}`}
                                title="Top 10 programming languages "
                                dataKey="value"
                                chartClass="#059669"
                            />
                        </div>

                        <div className={` h-auto py-10 px-5 lg:px-10 lg:py-10 gap-5 lg:gap-20 w-full flex flex-col lg:flex-row justify-center items-center lg:justify-start ${dark ? "bg-white" : "bg-black"} rounded-xl overflow-y-auto`}>
                            <WavePieChart data={techSkills}
                                className={` w-full h-72 ${dark ? "text-black" : "text-white"}`}
                                title="Top 10 in-demand tech skills "
                                dataKey="value"
                                chartClass="#2563eb"
                            />
                        </div>

                        <div className={` h-auto py-10 px-5 lg:px-10 lg:py-10 gap-5 lg:gap-20 w-full flex flex-col lg:flex-row justify-center items-center lg:justify-start ${dark ? "bg-white" : "bg-black"} rounded-xl overflow-y-auto`}>
                            <WavePieChart data={frameworks}
                                className={` w-full h-72 ${dark ? "text-black" : "text-white"}`}
                                title="Top 10 trending frameworks "
                                dataKey="value"
                                chartClass="#f59e0b"
                            />
                        </div>
                    </div>

                    <NewsBox article={techNews} />
                    <NewsBox article={programmingNews} />

                </div>
            </div>
        </>
    )
}

export default News
