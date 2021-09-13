import { useState } from 'react';
const appStyle = {
  height: '250px',
  display: 'flex'
};

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  width: '220px',
  display: 'block'
};

const labelStyle = {
  margin: '10px 0 5px 0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
};

const inputStyle = {
  margin: '5px 0 10px 0',
  padding: '5px', 
  border: '1px solid #bfbfbf',
  borderRadius: '3px',
  boxSizing: 'border-box',
  width: '100%'
};

const submitStyle = {
  margin: '10px 0 0 0',
  padding: '7px 10px',
  border: '1px solid #efffff',
  borderRadius: '3px',
  background: '#3085d6',
  width: '100%', 
  fontSize: '15px',
  color: 'white',
  display: 'block'
};
const App = () =>{
  const [data, setData]=useState({
    username: '',
    password: '',
  })
const {username,password} =data;

const changeHandler = (e) => {
  setData({...data, [e.target.name]:[e.target.value]})
}

const submitHandler=(e)=>{
  e.preventDefault();
  console.log(data);
}
  return(
    <div>
      <center>
        <form style={formStyle} onSubmit={submitHandler}>
          <input type="text" placeholder="UserName" name="username" value={username} style={inputStyle} onChange={changeHandler}></input><br/>
          <input type="password" placeholder="Password" name="password" value={password} style={inputStyle} onChange={changeHandler}></input><br/>
          <button>Submit</button>
        </form>
      </center>
    </div>
  )
}

export default App;
