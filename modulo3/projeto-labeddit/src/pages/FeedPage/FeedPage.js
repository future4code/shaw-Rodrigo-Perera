import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthorization";
import styled from "@emotion/styled";
import Loading from "../../components/Loading";
import { getAllPosts, decideVote, deleteVote, createPost } from "../../requests";
import useForm from "../../hooks/useForm";
import { goToPostPage, goToLoginPage } from "../../routes/coordinator";
import { useLoading, usePost } from "../../hooks/useGlobalState";
import Button from "../../components/Button";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
`

const VoteButton = styled.button`
    background-color: transparent;
    color: ${props => props.active ? props.activeColor : "white"};
    font-size: 24px;
    font-weight: bolder;
    border: none;
    cursor: pointer;
`

const CommentButton = styled.button`
    background-color: #341860;
    color: white;
    border: none;
    cursor: pointer;
`

const Card = styled.div`
    border: 1px solid black;
    border-radius: 16px;
    background-color: #341860;
    color: black;
    width: 80%;
    margin: 5px 0;
    padding: 12px;
    overflow-wrap: break-word;
`

const VoteSection = styled.div`
    display: flex;
    margin: 8px;
`

const VoteContainer = styled.div`
    border: 1px solid white;
    border-radius: 8px;
    padding: 4px;
    margin: 8px;
    color: white;
`

const CommentContainer = styled.div`
    display: flex;
    background-color: #341860;
    border: 1px solid white;
    border-radius: 8px;
    padding: 4px;
    margin: 8px;
    place-items: center;
`

const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5px;
`

const FeedPage = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useLoading()
    const [post, setPost] = usePost()

    const {form, onChange, cleanFields} = useForm({
        title: "",
        body: ""
    })

    useEffect(() => {
        fetchAllPost()
    }, [])

    const navigate = useNavigate()
    
    useAuthorization()

     const fetchAllPost = () => {
        setLoading(true)
        const promise = getAllPosts()
        promise
            .then((response) => {
                setPosts(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const onClickCreatePost = (event) => {
        event.preventDefault()
        const promise = createPost(form)
        promise
            .then(() => {
                fetchAllPost()
                cleanFields()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onClickVote = (id, direction) => {
        const promise = decideVote(id, direction)
        promise
            .then(() => {
                fetchAllPost()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onClickNoVote = (id) => {
        const promise = deleteVote(id)
        promise
            .then(() => {
                fetchAllPost()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onClickCommentDetailPage = (post) => {
        goToPostPage(navigate, post.id)
        setPost(post)
    }

    const onClickLogout = () => {
        localStorage.removeItem("token");
        goToLoginPage(navigate);
          
    }

    const getPost = posts.map((post) => {
        return(
            <Card key={post.id}>
                <h6>Envidado por: {post.username}</h6>
                <h4>{post.body}</h4>
                <VoteSection>
                    <VoteContainer>
                        <VoteButton activeColor={"green"} active={post.userVote === 1} onClick={() => post.userVote === 1 ? onClickNoVote(post.id) : onClickVote(post.id, 1)}>⬆</VoteButton>
                        {post.voteSum}
                        <VoteButton activeColor={"red"} active={post.userVote === -1} onClick={() => post.userVote === -1 ? onClickNoVote(post.id) : onClickVote(post.id, -1) }>⬇</VoteButton>
                    </VoteContainer>
                    <CommentContainer>
                        <CommentButton value={post.id} onClick={() => onClickCommentDetailPage(post)}>🗨 {post.commentCount}</CommentButton>
                    </CommentContainer>
                </VoteSection>
            </Card>
        )
    })

    return (
        <MainContainer>
            {loading && <Loading />}
            <Button onClick={() => onClickLogout()}>Logout</Button>
            <h2>FeedPage</h2>
            <div>
                <InputContainer onSubmit={onClickCreatePost}>
                <input
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    placeholder={"Título do seu post"}
                />
                <textarea
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    placeholder={"Adicione um post"}
                />
                <Button>Postar</Button>
                </InputContainer>
            </div>
            {getPost}
        </MainContainer>
    )
}

export default FeedPage;