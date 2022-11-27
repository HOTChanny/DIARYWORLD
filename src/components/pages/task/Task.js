import React, { useState } from 'react';

import './Task.css';

import { createGlobalStyle } from 'styled-components';
import '../../../App.css';
import Modal from '../modal/modal';
import TodoTemplate from '../todo/TodoTemplate';
import TodoHead from '../todo/TodoHead';
import TodoList from '../todo/TodoList';
import TodoCreate from '../todo/TodoCreate';
import { TodoProvider } from '../todo/TodoContext';

//원래 밑에 함수여기 데일리다이브 안인데 갑자기 전체배경되서 변경
const TodoStyle = createGlobalStyle` 
  body {
    background: #e9ecef
  }
`;

const Task = () => {  


  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  }; // 여기까지 팝업 관련 함수

const  [state, setState] = useState({
    author : "",
    content : "",
    emotion : 1,
});

const handleChangeState = (e)=>{
    setState({
    ...state,
    [e.target.name] : e.target.value,
});
};
const handleSubmit = ()=>{
    console.log(state);
    alert("저장성공");
};//여기까지 데일리 함수

  return ( //!!!!!!!!!!!!함수 끝, 다이브 시작!!!!!!!!!!!!!!!!!!
  <>
  { <video src="/videos/moving5.mp4" autoPlay loop muted />}
    <div className='alltask'>
      
      
      <div className='modaltext'>
        <TodoProvider>
            <TodoStyle />
            <TodoTemplate>
              <TodoHead />
              <TodoList /> 
              <TodoCreate />
            </TodoTemplate>
          </TodoProvider>
      </div>

      <React.Fragment>
        <div className='realtask'>
          밑에 팝업 버튼 누르면 팝업창 뜸, 테스크
        <br/><br/><br/><button className='dailyadd' onClick={openModal}>데일리 추가</button></div>
        
        <Modal open={modalOpen} close={closeModal} header="데일리 입력">
          {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달*/}
          <div className='DiaryEditor'>
            <h2>데일리</h2>
                <div>
                    <input 
                    name="author"
                    value={state.author}
                    placeholder="데일리의 제목을 입력!"
                    onChange={handleChangeState}
                    />
                </div>

                <div>
                    <textarea 
                    name="content"
                    value={state.content}
                    placeholder="데일리의 상세한 내용을 입력!"
                    onChange={handleChangeState}
                    />
                </div>

                <div>
                    <select 
                    name="emotion" 
                    value={state.emotion} 
                    onChange={handleChangeState}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>

        <div>
            <button onClick={handleSubmit}>저장하기</button>
        </div>
      </div>
        </Modal>
      </React.Fragment>



      <div className='reward'>
        여기는 리워드 적는 박스
      </div>
    </div>
  </>
  );
  
}

export default Task;

// 캘린더 너무 커지는거 고치고, 가운데1에 데일리(오늘 할일), 가운데2에 투두리스트(마감기한), 맨오른쪽에 리워드(내가 하고싶은거 해서도 보상 얻을수있게)