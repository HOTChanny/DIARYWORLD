import React,{ useState } from "react";
import '../../../App.css'
import './LoginHome.css';
//import styled from 'styled-components';

/** 
const JustWrite = styled.div`
    margin-top: 0px;
    martgin-left:2000px;
    
    style={{color : '#0B3B0B'}
`

/**
const loginHome = () => {
    /**
    if (window.location.pathname === '/LoginHome')
    return null;
 


    return (
        
        <div>
            
        { <video src="/videos/realhome.mp4" autoPlay loop muted />}
        <p className='realhome' style={{color : '#0B3B0B'}}>Welcome Home!</p>
        <JustWrite></JustWrite>
        <h1 style={{color : '#fff'}}>그냥 글
        </h1>
        
        </div>
    );
};
export default loginHome;
**/
/**
function loginHome({ user }) {
    const { email, password, name } = user || {};
    return (
      <>
        { <video src="/videos/realhome.mp4" autoPlay loop muted />}
        <JustWrite/>
        <h1>Profile</h1>
        <dt>Email</dt>
        <dd>{email}</dd>
        <dt>Password</dt>
        <dd>{password}</dd>
        <dt>Name</dt>
        <dd>{name}</dd>
      </>
    );
  }
  
  export default loginHome;
**/

function Login() {

    let [nickname, setNickname] = useState("");
   
    let [savedNickname, setSavedNickname] = useState("");
  

    //let sessionStorage = window.sessionStorage;
    let localStorage = window.localStorage;

    function handleClick(e) {
        window.location.href = '/home'
    } // 버튼 누르면 새로고침과 동시에 페이지 이동 , 뒤로가기 가능

    function outclick(e) {
        window.location.href = '/'
    } // 버튼 누르면 새로고침과 동시에 페이지 이동 ,로그아웃, 뒤로가기 가능

    return (
        <>
        { <video src="/videos/realhome.mp4" autoPlay loop muted />}
        <h1 className='realhome' style={{color : '#0B3B0B', marginTop:'100px', fontSize:'60px'}}>Welcome Home!</h1>

        {/**<JustWrite/>**/}
        <div className="foam">
            <div>
            Write your name :
            <input
                type="text"
                placeholder="당신의 이름은?"
                size={20}
                onChange={ (e)=>{setNickname(e.target.value)} } />
            </div>

            
            <div className="allbutton">
                <div className='fresh' onClick={handleClick}>
                    <button className='login' onClick={ ()=>{ 
                    localStorage.setItem("nickname", nickname);
                    setSavedNickname(localStorage.getItem("nickname"));
                  
                } }>작성완료</button>
                </div>
                <div onClick={outclick}><button className='logout' onClick={ ()=>{
                    localStorage.clear();
                    
                    setSavedNickname(localStorage.getItem("nickname"));
                  
                } }>로그아웃</button></div>
                

            </div>

            <div>
                접속중인 사용자 : '{localStorage.getItem('nickname')}' 
            </div>
            
            </div>

        </>
    )
}


export default Login;