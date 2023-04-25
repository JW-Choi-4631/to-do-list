const Card = ({children, removefunc, changefunc}) => {

    const complete = children.isDone === true? '취소':'완료';
  
    return (
      <div key={children.id} className='TodoBox'>
        <h2>{children.title}</h2>
        <div>{children.context}</div>
        <div className='buttonBox'>
          <button onClick={() => removefunc(children.id)} className='redBtn'>삭제하기</button>
          <button onClick={() => changefunc(children)} className='greenBtn'>{complete}</button>
        </div>
      </div>
    )
  }

  export default Card;