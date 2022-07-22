import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { goToLoginPage } from "../Routes/coordinator"

export const useProtectedPage = () => {
    const navigate = useNavigateavigate()
    const { token } = localStorage

    useEffect(() => {

        if(!token){
            goToLoginPage(navigate)
        }
    }, [])
}