import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './component/card.jsx';

function App() {
  // State 생성
  const [cardContext,setCardContext] = useState({
    title:'',
    context:'',
  });
  const [toDoList, setToDoList] = useState([
    { 
      id : 1,
      title : '리액트 공부하기',
      context : '리액트 기초를 공부해봅시다.',
      isDone : false,
    },
    { 
      id : 2,
      title : '리액트 공부하기',
      context : '리액트 기초를 공부해봅시다.',
      isDone : true,
    },
])

  const newCardSetHandler = (event)=>{
    setCardContext((cardContext)=>{
      return { ...cardContext, [event.target.id]:event.target.value}
    }); //함수형 업데이트 (매개변수로 현재state 값을 받아올 수 있음)
  }

  const makeNewCardHandler = () => {
    console.log(cardContext);
    if (cardContext.title === '') {
      alert('제목을 입력하세요!');
    }
    else if (cardContext.context === ''){
      alert('내용을 입력하세요!');
    }
    else {
      const newCard = {
        id : new Date().getTime() + Math.random(), // 중복값이 없는 id 생성
        title : cardContext.title, 
        context : cardContext.context,
        isDone : false  // 처음 입력되는 값은 무조건 false
      };
      setToDoList([...toDoList, newCard]);
      // Card생성 후 input을 다시 빈 값으로 설정
      setCardContext({title:'', context:''});
    }
  }

  const removeCardHandler = (id) => {
    const check = window.confirm('정말 삭제하시겠습니까?');

    if (check === true) {
      const newToDoList = toDoList.filter((list) => list.id !== id);  // 해당 Card제외시키 새로운 배열 생성
      setToDoList(newToDoList);
    }
  }

  const changeIsDoneHandler = (changelist) => {

    const newToDoList = toDoList.filter((list) => list.id !== changelist.id); //해당 Card 제외한 배열 생성
    let newCard = {}; // isDone 상태가 바뀐 새로운 객체 

    if(changelist.isDone === false){
      alert('수고하셨습니다!');
      newCard = {...changelist, isDone : true};
    }
    else {
      newCard = {...changelist, isDone : false};
    }

    setToDoList([...newToDoList,newCard]) // 새로운 객체를 추가

  }  

  return (
    <div className='AppBox'>
      <div className='title'>
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className='inputBox'>
        <div className='input'>
          <label>제목</label>
          <input id='title' type='text' value={cardContext.title} onChange={newCardSetHandler}/>
          <label>내용</label>
          <input id='context' type='text' value={cardContext.context}  onChange={newCardSetHandler}/>
        </div>
        <button className = 'saveBtn' onClick={makeNewCardHandler}>추가하기</button>
      </div>
      <div className='tables'>
        <h2>Working.. 🔥</h2>
        <div className='ListBox'>
          {toDoList.map(list => {
            if (list.isDone === false) {
              return <Card removefunc={removeCardHandler} changefunc={changeIsDoneHandler}>{list}</Card>;
            }
            return null;
          })
          }
        </div>
      </div>
      <div className='tables'>
        <h2>Done..! 🎉</h2>
        <div className='ListBox'>
        {toDoList.map(list => {
            if (list.isDone === true) {
              return <Card removefunc={removeCardHandler} changefunc={changeIsDoneHandler}>{list}</Card>;
            }
            return null;
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
