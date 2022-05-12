import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthorization";
import styled from "@emotion/styled";
import Loading from "../../components/Loading";
import { getAllPosts, decideVote, deleteVote, createPost } from "../../requests";
import useForm from "../../hooks/useForm";

const Teste = styled.div`
    color: white;
`

const Button = styled.button`
    background-color: transparent;
    color: ${props => props.active ? props.activeColor : "white"};
    font-size: 24px;
    font-weight: bolder;
    border: none;
    cursor: pointer;
`

const FeedPage = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

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

    const getPost = posts.map((post) => {
        return(
            <Teste key={post.id}>
                <p>Envidado por: {post.username}</p>
                {post.body}
                <p>coment: {post.commentCount}</p>
                <p>voto: {post.voteSum}</p>
                <Button activeColor={"green"} active={post.userVote === 1} onClick={() => post.userVote === 1 ? onClickNoVote(post.id) : onClickVote(post.id, 1)}>⬆</Button>
                <Button activeColor={"red"} active={post.userVote === -1} onClick={() => post.userVote === -1 ? onClickNoVote(post.id) : onClickVote(post.id, -1) }>⬇</Button>
            </Teste>
        )
    })

    return (
        <div>
            {loading && <Loading />}
            <form onSubmit={onClickCreatePost}>
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
            <button>Postar</button>
            </form>
            {getPost}
            Feed Page
        </div>
    )
}

export default FeedPage;