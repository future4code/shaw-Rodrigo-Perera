import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthorization";
import { commentDetail, decideCommentVote, deleteCommentVote } from "../../requests";
import Loading from "../../components/Loading";
import { useLoading, usePost } from "../../hooks/useGlobalState";
import { comment } from "../../requests";
import useForm from "../../hooks/useForm";
import styled from "@emotion/styled";
import { goToLoginPage, goBack } from "../../routes/coordinator";
import Button from "../../components/Button";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
`

const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5px;
`

const VoteButton = styled.button`
    background-color: transparent;
    color: ${props => props.active ? props.activeColor : "white"};
    font-size: 24px;
    font-weight: bolder;
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

const PostPage = () => {

    useEffect (() => {
        fetchComments()
    }, [])

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useLoading()
    const [post] = usePost()

    const { id } = useParams()

    const {form, onChange, cleanFields} = useForm({
        body: ""
    })

    useAuthorization()

    const navigate = useNavigate()

    const onClickCreateComment = (event) => {
        event.preventDefault()
        setLoading(true)
        const promise = comment(id, form)
        promise
            .then(() => {
                fetchComments()
                cleanFields()
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const fetchComments = () => {
        setLoading(true)
        const promise = commentDetail(id)
        promise
            .then((response) => {
                setComments(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const onClickVote = (id, direction) => {
        const promise = decideCommentVote(id, direction)
        promise
            .then(() => {
                fetchComments()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onClickNoVote = (id) => {
        const promise = deleteCommentVote(id)
        promise
            .then(() => {
                fetchComments()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onClickLogout = () => {
        localStorage.removeItem("token");
        goToLoginPage(navigate);
          
    }

    const getComment = comments.map((comment) => {
        return(
            <Card key={comment.id}>
            <h6>Envidado por: {comment.username}</h6>
            <h4>{comment.body}</h4>
            <VoteSection>
                <VoteContainer>
                    <VoteButton activeColor={"green"} active={comment.userVote === 1} onClick={() => comment.userVote === 1 ? onClickNoVote(comment.id) : onClickVote(comment.id, 1)}>⬆</VoteButton>
                    {comment.voteSum}
                    <VoteButton activeColor={"red"} active={comment.userVote === -1} onClick={() => comment.userVote === -1 ? onClickNoVote(comment.id) : onClickVote(comment.id, -1) }>⬇</VoteButton>
                </VoteContainer>
            </VoteSection>
        </Card>
        )
    })
    return (
        <MainContainer>
            {loading && <Loading />}
            <Button onClick={() => onClickLogout()}>Logout</Button>
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
            <h2>Post Page</h2>
            <Card>
                <h6>Enviado por: {post.username}</h6>
                <h4>{post.body}</h4>
                <VoteSection>
                    <VoteContainer>
                        <VoteButton activeColor={"green"} active={post.userVote === 1} onClick={() => post.userVote === 1 ? onClickNoVote(post.id) : onClickVote(post.id, 1)}>⬆</VoteButton>
                        {comment.voteSum}
                        <VoteButton activeColor={"red"} active={post.userVote === -1} onClick={() => post.userVote === -1 ? onClickNoVote(post.id) : onClickVote(post.id, -1) }>⬇</VoteButton>
                    </VoteContainer>
            </VoteSection>
            </Card>
            <InputContainer onSubmit={onClickCreateComment}>
                <textarea
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    placeholder={"Adicionar comentário"}
                />
                <Button>Comentar</Button>
            </InputContainer>
            {getComment}
        </MainContainer>
    )
}

export default PostPage;