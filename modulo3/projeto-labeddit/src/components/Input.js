import styled from "styled-components"

const MainContainer = styled.div`
    position: relative;
    max-width: 180px;
`

const StyledInput = styled.input`
    width: 6.5em;
    color: white;
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom-color: #3cefff;
  
    :focus {
    outline: none;
  }
  
    ::placeholder {
    color: hsla(0, 0%, 100%, 0.6);
  }
`

const Span = styled.span`
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 1px;
    opacity: 0;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: all 0.3s ease;
`

export const Input = (props) => {
    return(
        <MainContainer>
            <StyledInput
                {...props}
            />
            <Span/>
        </MainContainer>
    )
}