import { useState, useRef } from "react";

// DiaryEditor로 내린 onCreate 함수를 prop으로 전달
const DiaryEditor = ({onCreate}) => {

  const [state, setState] = useState({
    author: "", content: "", emotion: 1,
  });

  const authorInput = useRef();
  const contentInput = useRef();

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if(state.author.length < 1) {
      // alert("작성자는 최소 1글자 이상 입력해주세요.");
      // focus
      authorInput.current.focus();
      return;
    }

    if(state.content.length < 5){
      // alert("일기 본문은 최소 5글자 이상 입력해주세요.");
      // focus
      contentInput.current.focus();
      return;
    }

    // props로 받은 onCreate 함수를 호출하기
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");

    // 저장 후 작성폼이 초기화되도록 setState 설정
    // 일기를 한번 더 쓰면 원래 상태로 초기화
    setState({
      author: "", content: "", emotion: 1
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState} />
        <span className="notification">작성자명을 입력하세요 (최소 1글자 이상)</span>
      </div>
      <div>
        <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState} />
        <span className="notification">일기 본문을 입력하세요 (최소 5글자 이상)</span>
      </div>
      <div>
        <select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <span className="notification">감정 점수를 선택하세요 (택 1)</span>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;