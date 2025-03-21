import React from 'react'
import { useTheme } from "../context/ThemeContext";

function NewsBox({ article }) {

    const { dark } = useTheme();

    if (!article || article.length === 0) {
        return <div className={`${dark ? "text-black" : "text-white"}`}> Loading news ...</div>;
    }

    const openNews = (link) => {
        window.open(link, '_blank');
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5">
                {article.map((news, index) => {
                    return (
                        <div key={index} className="h-44 relative rounded-lg overflow-hidden bg-gray-800 group transform transition-all duration-300 hover:shadow-2xl cursor-pointer" onClick={() => openNews(news.url)}>
                            <img src={news.urlToImage} className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out"/>
                            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <p className="text-white sm:text-lg lg:text-sm font-Josefin absolute bottom-4 left-4 right-4">{news.title}</p>
                            
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default NewsBox
