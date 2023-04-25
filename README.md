생성한 Component : Card.jsx => CardBox 1개 

      <div key={children.id} className='TodoBox'>
        <h2>{children.title}</h2>
        <div>{children.context}</div>
        <div className='buttonBox'>
          <button onClick={() => removefunc(children.id)} className='redBtn'>삭제하기</button>
          <button onClick={() => changefunc(children)} className='greenBtn'>{complete}</button>
        </div>
      </div>
