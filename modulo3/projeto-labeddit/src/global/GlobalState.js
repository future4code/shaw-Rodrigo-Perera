import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)

    const states = { post, loading };
    const setters = { setPost, setLoading };

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}