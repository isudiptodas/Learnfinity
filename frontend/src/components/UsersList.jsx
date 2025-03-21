import React from 'react'
import { useTheme } from "../context/ThemeContext";

function UsersList() {

    const {dark} = useTheme();

    return (
        <>
            <h3 className={`${dark ? "text-black" : "text-white"} duration-300 ease-in-out`}>Users in the room : </h3>
            
        </>
    )
}

export default UsersList
