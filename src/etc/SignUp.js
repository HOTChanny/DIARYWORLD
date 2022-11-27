/**
import '../../App.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "./auth";

/////////////
import { createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    CurrentUser,
    signInWithEmailAndPassword, } from "firebase/auth";
import { auth } from "../../firebase-config";
//////////////
function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleOnChange = (e) => {
      const type = e.target.name;
      if (type === "email") {
        setEmail(e.target.value);
      } else if (type === "password") {
        setPassword(e.target.value);
      }
    };
  
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      if (email !== "" && password !== "") {
        try {
          await signUp(email, password);
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    return (
      <div className="sign-container">
        <div className="sign-up-wrap">
          <br/>
          <h1 className="title">회원가입</h1>
          <form className="sign-up-form" onSubmit={handleOnSubmit}>
            <div>
              <input
                type="email"
                placeholder="이메일을 입력하세요."
                name="email"
                value={email}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요."
                name="password"
                value={password}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <button type="submit">회원가입</button>
            </div>
          </form>
          <hr></hr>
          <p>
            이미 회원이신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    );
  }
  
  export default SignUp;

//////////////////////
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function SignUp() {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value);
  }
  const onSubmitHandler = (event) => {
      // 버튼만 누르면 리로드 되는것을 막아줌
      event.preventDefault();

      console.log('Email', Email);
      console.log('Password', Password);
      
      let body = {
          email: Email,
          password: Password,
      }

      dispatch(loginUser(body));
  }

  return (
      <div style={{ 
          display: 'flex', justifyContent: 'center', alignItems: 'center', 
          width: '100%', height: '100vh'
          }}>
          <form style={{ display: 'flex', flexDirection: 'column'}}
              onSubmit={onSubmitHandler}
          >
              <label>Email</label>
              <input type='email' value={Email} onChange={onEmailHandler}/>
              <label>Password</label>
              <input type='password' value={Password} onChange={onPasswordHandler}/>
              <br />
              <button formAction=''>
                  Login
              </button>
          </form>
      </div>
  )
}

export default SignUp;
*/