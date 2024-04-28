import styled from "styled-components";
function Study() {
    return (
        <section>
            <Title>스터디 STUDY.</Title>
            <ProjectContainer>
                <Date>2023. 02 - 2023. 08</Date>
                <div>
                    <SubTitle>불금</SubTitle>
                    <LinkContainer>
                        <h5>🔗 링크:<span> https://</span></h5>
                    </LinkContainer>
                    <ProjectText>학습 개념에 대한 심화과정을 추가로 공부한 뒤 기록으로 남기고, 팀원들 사이에서 발표하는 스터디입니다. 최소한으로 필요한 지식보다 깊이 공부해보고 싶어 참여했습니다. 스터디의 시작과 마지막까지 매주 결석이나 지각 없이 성실히 함께하였습니다.
                    다른 팀원의 시각을 경청하고, 기록한 부분을 공유하며 꾸준히 발표하는 경험을 하였습니다. 배운 지식을 말로 설명하고 새 지식을 배우면서 성장의 즐거움을 느꼈습니다.
                    </ProjectText>
                </div>
            </ProjectContainer>
            <ProjectContainer>
                <Date>2023. 08 - 2023. 08</Date>
                <div>
                    <SubTitle>야, 나두!</SubTitle>
                    <LinkContainer>
                        <h5>🔗 링크:<span></span></h5>
                    </LinkContainer>
                    <ProjectText>어쩌구</ProjectText>
                </div>
            </ProjectContainer>
        </section>
    );
  }
  
  export default Study;


  
  const LinkContainer = styled.div`
    margin-left: 1rem;
    h5{
        margin: 10px 0;
        font-size: 18px;
        font-weight: 800;
        color: #777;
    }
    span {
    color: #553aff;
    transition: all 0.2 ease;
    text-decoration: underline;
  }
  span:hover{
    color: #2c0df8;
  }
  `
  const Title = styled.h1`
  font-size: 35px;
  font-weight: 800;
  color: #45a6f6;
  margin-top: 50px;
`

const ProjectContainer = styled.div`
display: flex;
border-top: 1px solid #ccc;
padding: 20px 10px 10px 20px;
margin-top: 40px;
`

const Date = styled.span`
font-size: 27px;
font-weight: 600;
color: #acacac;
width: 150px;
min-width: 150px;
`
const SubTitle = styled.h2`
font-size: 28px;
font-weight: 800;
margin: 10px 0;
color: #065ca3;
`

const ProjectText = styled.p`
margin: 10px 0;
font-size: 18px;
line-height: 1.3;
span::after {
    content: "dd";
    width: 10px;
    height: 100px;;
    background-color: #ffba10;
}
`