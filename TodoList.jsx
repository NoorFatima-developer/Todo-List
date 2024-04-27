import React, { useState } from 'react'


 function TodoList() {

  const[activity, setactivity] = useState("");
  const[listdata, setlistdata] = useState("");

  function addActivity()

    //If i want my activity successfully added then i will use spread operator

  {
       // state in react works asynchronously 
    // setlistdata([...listdata, activity])
    // console.log(listdata)

    setlistdata((listdata)=>{
      const updatedlist = [...listdata,activity]
      console.log(updatedlist);
      setactivity('');

      return updatedlist;
    })
  }

  function Removeactivity(i){
      const updatelistdata = listdata.filter((ele, id)=>{
        return i!=id;
            })

          setlistdata(updatelistdata);
  }

function Removelall(){
  setlistdata('');
}

 
  return (
   <>
    <div className='container'>
    {/* I can also write it in label tag like <label>TODO LIST</label> */}
    <div className='header'>Noor Fatima</div>  
    <input type='text' placeholder='Add Activity' value ={activity} onChange={(e)=>setactivity(e.target.value)} />
    <button onClick={addActivity}>Activity</button>
    <p className='List-heading'>Here is your List :{")"}</p>
    {listdata!=[] && listdata.map((data, i)=>{
        return(
          <>
            <p key ={i}>
              <div className='data'>{data}</div>
              <div className='btn-position'>
              <button onClick={()=>Removeactivity(i)}>Remove(-)</button>
              </div>
            </p>
          </>
        );
    })}

    {listdata.length>=1 && <button onClick={Removelall}>Remove All</button>}
    </div>
   </>
   
  )
}

export default TodoList;

