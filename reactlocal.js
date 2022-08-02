import React,{useEffect, useState} from 'react';

function App() {
  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[date,setdate]=useState("")
  const [totalData,setTotalData]=useState([])


  function submit(){

    var courses=JSON.parse(localStorage.getItem('courses')|| "[]")

    var course={
      name:name,
      email:email,
      date:date
    }
    courses.push(course)
    localStorage.setItem('courses',JSON.stringify(courses))
    let a=JSON.parse(localStorage.getItem('courses'))
    setTotalData(a)
  }

  useEffect(()=>{

  },[])


  return (
    <div className="App ">
     <center>
     <input type ="text"placeholder="username"value={name}onChange={(e)=>{setname(e.target.value)}}/><br/>
      <input type ="email"placeholder="email"value={email} onChange={(e)=>(setemail(e.target.value))}/><br/>
      <input type="date"placeholder="dd/mm/yyyy"value={date}onChange={(e)=>(setdate(e.target.value))}/><br/>
      <button onClick={submit}>submit</button>
     </center>
      <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>date</th>
          </tr>
          {totalData?
          totalData.map((a)=>{
            return(
              <tr>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.date}</td>
              </tr>
            )
          }):undefined  
        }
        </tbody>
      </table>
      </>
    </div>
  )
  
}

export default App
