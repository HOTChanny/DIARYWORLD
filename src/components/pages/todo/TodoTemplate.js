import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 380px;
  height: 568px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
