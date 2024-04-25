import './style/global-style.css';
import MyInfo from './components/MyInfo';
import Skill from './components/Skill';
import Project from './components/Project';
import Study from './components/Study';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <MainContainer>
        <MyInfo/>
        <Skill/>
        <Project/>
        <Study/>
      </MainContainer>
    </Container>
  );
}

export default App;

const Container = styled.section`
  display: flex;
  justify-content: center;
`

const MainContainer = styled.section`
  width: 80%;
`