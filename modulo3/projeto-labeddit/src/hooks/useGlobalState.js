import { useContext } from "react";
import { GlobalContext } from "../global/GlobalContext";

export const useGlobalState = () => {
    return useContext(GlobalContext)
}

export const useLoading = () => {
    const {states, setters} = useGlobalState()

    return [states.loading, setters.setLoading]
}

export const usePost = () => {
    const {states, setters} = useGlobalState()

    return [states.post, setters.setPost]
}