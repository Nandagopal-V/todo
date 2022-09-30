
import './App.css'
import {useState} from 'react'
function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')

  const handleDelete =(id)=>{
    const removeItem = toDos.filter((rrr)=>{
      return rrr.id !== id
    })
    setTodos(removeItem)
  }



  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 > <center> 🌝 ☕ </center></h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
        if(toDo!="")
        {setTodos([...toDos,{id:Date.now()
          ,text:toDo
          ,status:false}])
          setTodo("")
       
        }}} className="fas fa-plus"></i>
      </div>


      <div className="todos">
       {
       toDos.map((obj)=>{

    return( <div className="todo">
              <div className="left">
              <input onChange={(e)=>{
                console.log(e.target.checked);
                console.log(obj);
                setTodos(toDos.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2.status=e.target.checked
                  }
                  return obj2;
                }))
              }} value={obj.status} type="checkbox" name="" id="" /> 
              <p>{obj.text}</p>
              </div>
             <div className="right">
              <i onClick={()=>handleDelete(obj.id)} className="fas fa-times"></i>
             </div>
           </div>
            )
        
        
      })}
      <br /><br />

     
        <h1>List Done &#160;
      <i class='fa fa-check-circle green-color'></i></h1>
      
      <br />

      {toDos.map((obj)=>{
        if(obj.status){
          return(<h3 ><font color="white">{obj.text} </font></h3>)
        }
      })}

      </div>
      </div>
    
  );
}

export default App;
