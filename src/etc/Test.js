import React from 'react';

import '../App.css';

import './Test.css';
import { useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from './DiaryList';


const Task = () => { 
  // 전역적으로 상태관리
  // 일기데이터, 빈 배열로 시작 (일기가 없는 상태로 출발)
  const [data, setData] = useState([]);
  
  // 데이터가 하나씩 추가될 때마다 id가 1,2,3.. 이렇게 추가되도록
  // 변수처럼 사용할 고유 id가 생성되도록 useRef를 통해 추가
  // 0번 index부터 시작 
  const dataId = useRef(0); 

  // 새로운 일기를 추가하는 함수
  // 파라미터로 값들을 받아온다
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime(); // 현재시간 구하기. 시간 객체
    const newItem = { // 새로운 아이템
      author,
      content,
      emotion,
      created_date,
      id: dataId.current // 어떤 DOM도 선택하지 않고 현재 0이란 값을 갖고 있음
    };
    dataId.current += 1; // 새 아이템을 만들고 0번은 1번으로 증가

    // 원래 data를 spread연산자로 쓰고(원래 배열에 있던 data를 여기에)
    // 새로운 아이템을 추가하고 원래 데이터를 이어붙이는 형태
    setData([newItem, ...data]); 
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    //console.log(newDiaryList);
    setData(newDiaryList);
  };

 const onEdit = (targetId, newContent) => {
  
    // setData를 통해서 어떤 값을 전달한다
	setData(
    
    	// 변경 시키는 값 만들기
        // 원본데이터에 map 내장함수 사용 
        // 모든 요소(it)을 순회한 후 새로운 배열을 만들어서 setData에 저장
        // 새로운 배열은? 수정이 완료된 배열을 전달해야 한다
        
      data.map( (it) =>
      
      	// 수정대상이라면?
        it.id === targetId
        
        	// 컨텐츠가 뉴컨텐츠로 바뀜(수정된 배열)로 교체해줄 것인지
          ? { ...it, content: newContent }
          
          	// 수정대상이 아니면 원래있던 배열을 다시 반환할 것인지 (원본값)
          : it
      )
    );
  };
  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    //console.log(newDiaryList);
    setData(newDiaryList);
};
  return (
  <>
    {/** <video src="/videos/moving5.mp4" autoPlay loop muted />**/}
    

          <div className='test'>
          <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
          </div>
  
    
  </>
  );
}

export default Task;