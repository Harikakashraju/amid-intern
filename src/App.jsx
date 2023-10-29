import styled from "styled-components";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Input from "./components/Input";
import pic from "./pic.png"
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
 
  return (
    <Maindiv>
     <Img>
     <img src={pic} alt="pic" width="400px" />
     </Img>
    <MainContainer>
      <WelcomeText>Login</WelcomeText>
      <InputContainer>
      <label>Login Id</label>
      <Input type="text" placeholder="Enter Login Id" />
        <label>Password</label>
      <Input type="password" placeholder="Enter Password" />
      </InputContainer>
      <Check>
        <Input type="checkbox" />
        <span>Rememberme</span>
        <StyledLink1>ChangePassword</StyledLink1>
        </Check>
        <Terms>
        <Input type="checkbox" />
        <span>Agree to<StyledLink>Terms&Conditions</StyledLink></span>
        </Terms>
      <ButtonContainer>
        <Button content="Login" />
      </ButtonContainer>
      <ForgotPassword>Don't have an account?<StyledLink>Register Here?</StyledLink></ForgotPassword>
    </MainContainer>
    </Maindiv>
    );
}

const Maindiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 60px 250px;
//  margin-top: 60px;
height: 100%;
width: 100%;
gap: 80px;
@media only screen and (max-width: 320px) {
  width: 80vw;
  height: 90vh;
  // hr {
  //   margin-bottom: 0.3rem;
  // }
  h4 {
    font-size: small;
  }
  Maindiv {
    display: flex;
    flex-direction;
  }
}
@media only screen and (min-width: 360px) {
  width: 80vw;
  height: 90vh;
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 411px) {
  width: 80vw;
  height: 90vh;
}

@media only screen and (min-width: 768px) {
  width: 80vw;
  height: 80vh;
}
@media only screen and (min-width: 1024px) {
  width: 70vw;
  height: 50vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 80vh;
}
`;

const MainContainer = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  box-shadow: 5px 5px 15px 5px #F5F5F5;
  gap: 25px;
  padding: 50px 80px;
  border-radius: 10px;
`;
const Img = styled.div`
// width: 50px;
`;
const WelcomeText = styled.h2`
     font-size: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;
  height: 20%;
  width: 100%;
`;
 const StyledLink1 = styled.ul`
 margin: 0px;
 font-size: 12px;
 color: orange;
 margin-left: 200px`;

const ButtonContainer = styled.div`
  // margin: 1rem 0 2rem 0;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 2rem 0 3rem 0;
//   width: 80%;
// `;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

const Check = styled.div`
cursor:pointer;
display: flex;
flex-direction: row;
// margin-right: 300px;
align-items: center;
font-size: 12px;
gap: 5px;
`;

const Terms = styled.div`
display: flex;
flex-direction: row;
margin-right: 280px;
align-items: center;
font-size:12px;
cursor:pointer;
gap: 10px;
`;
const StyledLink = styled.ul`
cursor: pointer;
text-decoration: none;
color: orange;`
;

export default App;

