import styled from "styled-components";

function MyInfo() {
  return (
    <>
    <section>
      <Name>양효정 | <span className="englishName">Frontend Developer</span></Name>
      <ContactContainer>
        <MyImage src="/image/me.jpg" alt="myself"/>  
        <ContactListContainer>
          <ContactList>📧 Email. <span>sookmeoyhj@gmail.com</span></ContactList>
          <ContactList>📞 Phone. 010-2439-1007</ContactList>
          <ContactList>🏡 Address. 서울시 영등포구</ContactList>
          <ContactList>🗒️ Blog. <span>https://hj97codeart.tistory.com</span> </ContactList>
          <ContactList>💻 Github. <span>https://github.com/Raros17</span></ContactList>
        </ContactListContainer>              
      </ContactContainer>
      <InfoContainer>
          <p>유의미한 결과물을 빠르게 세상에 내놓는 과정이 좋아서 개발을 시작했습니다. 현재는 React, TypeScript 기반으로 웹 개발을 하고 있으며 사용자에게 최적화된 경험을 제공하고자 합니다.</p>
          <p>하나의 기술에만 정체되지 않습니다. 타 개발자와의 활발한 소통을 통해 지식의 경계를 새로 갱신하고 확장시키기 위해 노력하며, 궁극적으로는 개발 공동체의 상호 성장을 실현시키고자 합니다. 다양한 사람이 하나의 팀을 이루어 협업하는 경험에 큰 매력을 느낍니다. 최신 트렌드에 관심을 두지만 이미 학습한 기술에도 근본적인 부분을 파고드는 것에 즐거움을 느낍니다. 쌓인 지식은 블로그에 기록하고 공유합니다. </p>
          <p>잘 짜인 코드는 완벽한 예술과 같다는 문장을 인상깊게 기억합니다. 언제나 예술가에 가까운 개발을 지향하여, 세상을 바꾸는 다양한 분야에 함께 기여하고 싶습니다. </p>
          <span>Latest Updated. 2024. 04. 24.</span>
      </InfoContainer>
    </section>
    </>
  );
}

export default MyInfo;

const ContactContainer = styled.div`
  display:flex;
  justify-content: space-between;
`

const MyImage = styled.img`
  margin-top: 3rem;
  margin-left: 10rem;;
  width: 30%;
  border-radius: 80px;
  min-width: 250px;
`

const ContactListContainer = styled.ul`
  margin: 50px 30px 0px 0px;
`
const ContactList = styled.li`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 700;
  span {
    color: #553aff;
    transition: all 0.2 ease;
    text-decoration: underline;
  }
  span:hover{
    color: #2c0df8;
  }
`

const InfoContainer = styled.div`
  margin: 50px 0;
  padding: 40px 0 60px 0;
  font-size: 20px;
  font-weight: 500;
  color: #1b1b1b;
  line-height: 1.5;
  position: relative;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  span {
    color:#888;
    font-size: 16px;
    position:absolute;
    right: 0;
    
  }
`

const Name = styled.h1`
  font-size: 50px;
  color: #553bff;
  font-weight: 800;
  span {
    color: #9f9ffb;
  }
`