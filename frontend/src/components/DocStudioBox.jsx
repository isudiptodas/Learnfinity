import React from 'react'

function DocStudioBox({className, title, textClassName, buttonClass, onClick}) {
    return (
        <>
            <div className={`${className} sm:h-40 sm:gap-5`}>
                <p className={`${textClassName} capitalize font-Titillium text-center sm:text-xl`}>{title}</p>
                <p className={`${buttonClass} hover:opacity-80 duration-200 ease-in-out hover:scale-95`} onClick={onClick}>Start</p>
            </div>
        </>
    )
}

export default DocStudioBox
