import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a'}
          fotoPost={'https://picsum.photos/200/150?d'}
        />

        <Post
          nomeUsuario={'Rodrigo'}
          fotoUsuario={'https://picsum.photos/50/50?b'}
          fotoPost={'https://picsum.photos/200/150?e'}
        />

        <Post
          nomeUsuario={'Arthur'}
          fotoUsuario={'https://picsum.photos/50/50?c'}
          fotoPost={'https://picsum.photos/200/150?f'}
        />
      </MainContainer>
    );
  }
}

export default App;
