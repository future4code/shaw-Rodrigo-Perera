import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SingupPage/SignupPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostPage from "../pages/PostPage/PostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { GlobalState } from "../global/GlobalState";

const RouterComp = () => {
    return (
        <GlobalState>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<LoginPage/>} />
                    <Route path="/signup" element = {<SignupPage/>} />
                    <Route path="/feed" element = {<FeedPage/>} />
                    <Route path="/post/:id" element = {<PostPage/>} />
                    <Route path="*" element = {<ErrorPage/>} />
                </Routes>
            </BrowserRouter>
        </GlobalState>
    )
}

export default RouterComp;