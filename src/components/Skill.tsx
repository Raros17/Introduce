import styled from "styled-components";
function Skill() {
    return (
        <section>
            <Title>스킬 SKILLS.</Title>
            <Skills>TypeScript, React.js, JavaScript(ES6), HTML5/CSS, SCSS, Next.js(14), Git, Photoshop, Figma</Skills>
            <SubContainer>
                <SubTitle>Front-End :</SubTitle>
                <SubTextContainer>
                    <li>주로 React를 사용하여 프로젝트를 만듭니다. 함수형 컴포넌트로 다양한 기능을 분리하여 코드를 작성하는 데 익숙합니다. 여러 곳에 재사용되는 로직은 커스텀 훅으로 분리합니다.</li>
                    <li>TypeScript가 제공하는 강력한 타입 가드를 즐겨 사용합니다. JavaScript 문법에 익숙합니다.</li>
                    <li>CSS, SCSS를 사용하여 디자인을 반영할 수 있습니다. 최근에는 컴포넌트 단위로 분리하기 편한 Styled-Components를 주로 사용하고 있습니다. 반응형으로 사이트를 관리하기에 노력을 기울이고 있습니다.</li>
                    <li>JQuery로 코드를 작성한 경험이 있습니다. 독특하고 다양한 라이브러리를 적극적으로 사용하여 개발 경험을 즐기던 때가 있으며, 현재는 최대한 외부에 의존하지 않고 직접 만들어 프로젝트에 적용하려고 노력합니다.</li>
                </SubTextContainer>
            
            <SubTextContainer>
                <SubTitle>그 외 ETC :</SubTitle>
                <ul>
                    <li>어쩌궁</li>
                    <li>저쩌궁</li>
                </ul>
            </SubTextContainer>
            </SubContainer>
        </section>
    );
  }
  
  export default Skill;

  
  const Title = styled.h1`
    font-size: 35px;
    font-weight: 800;
    color: #45a6f6;
  `

  const Skills = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #888;
  `

  const SubTitle = styled.h4`
    font-size: 23px;
    font-weight: 600;
    margin-top: 30px;
  `

  const SubContainer = styled.div`
    margin: 30px 0;
  `

  const SubTextContainer = styled.ul`
    li {
        font-size: 20px;
        margin-top: 10px;
        line-height: 1.3;
    }
  `