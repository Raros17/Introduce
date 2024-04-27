import styled from "styled-components";
function Project() {
    return (
        <section>
            <Title>프로젝트 PROJECT.</Title>
            <ProjectContainer>
                <Date>2023. 06 - 2023. 07 </Date>
                <ProjectTextContainer>
                    <SubTitle>커스텀 제과점과 유저를 연결하여, 주문부터 결제까지 담당하는 중개 웹 서비스 (BUYTE)</SubTitle>
                    <SkillBox>React</SkillBox> <SkillBox>TypeScript</SkillBox> <SkillBox>HTML</SkillBox> <SkillBox>CSS</SkillBox> <SkillBox>Styled-component</SkillBox> <SkillBox>Redux-toolkit</SkillBox> <SkillBox>Eslint</SkillBox> <SkillBox>Prittier</SkillBox> <SkillBox>Axios</SkillBox>
                      
                    <LinkContainer>
                        <h5>🔗 관련 링크: <span>https://www.buyte.site</span></h5>
                        <h5>🔗 GitHub: <span>https://github.com/Raros17/Buyte_service.git</span></h5>
                    </LinkContainer>
                                <ProjectText><span>커스텀 제품의 주문 및 결제까지 큰 흐름을 완성시키는 방향</span>으로 개발한 제과 중개업 서비스입니다. FE 3명과 BE 3명이서 팀 협업 경험을 쌓기 위해 진행하였습니다. 담당 기능마다 브랜치를 나누어 전반적인 Git 관리법을 적용하였으며, GitHub의 Milestone과 Issue를 통해 태스크 별로 체크 리스트를 작성하여 칸반식으로 업무 흐름을 관리하였습니다. </ProjectText>
                </ProjectTextContainer>
            </ProjectContainer>
            
            
        </section>
    );
  }
  
  export default Project;

  const ProjectTextContainer = styled.div`
    margin-top: 3px;
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
  const LinkContainer = styled.div`
    margin-left: 1rem;
    h5{
        margin: 10px 0;
        font-size: 18px;
        font-weight: 800;
        color: #777;
    }
  `

  const SkillBox = styled.span`
    background-color: #7a7a7a;
    color: #fff;
    padding: 0 5px;
    border-radius: 5px;
    margin: 10px 2px;
  `

  const ProjectContainer = styled.div`
    display: flex;
    border-top: 1px solid #ccc;
    padding: 20px 10px 10px 20px;
    margin-top: 40px;
  `
  
  const Title = styled.h1`
    font-size: 35px;
    font-weight: 800;
    color: #45a6f6;
  `
    const SubTitle = styled.h2`
    font-size: 28px;
    font-weight: 800;
    margin: 10px 0;
    color: #065ca3;
  `
  const Date = styled.span`
    font-size: 27px;
    font-weight: 600;
    color: #acacac;
    width: 600px;
    min-width: 150px;
  `

  