import logo from './logo.svg';
import './App.css';
import Form from './Form'
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [users, steUsers] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    TOS: false
  })

  function onChangeHandler(evt){
    const { name, type, value, checked } = evt.target
    setFormData({
        ...formData, [name]: type === 'checkbox' ? checked : value
    })
  }

  function onSubmitHandler(evt){
    evt.preventDefault()
    axios.post('https://reqres.in/api/users', formData)
    .then(res=>{
        steUsers([...users, res.data])
    })
    .catch(err=>{
        console.log(err)
    })
    
}
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form onSubmitHandler={onSubmitHandler} formData={formData} onChangeHandler={onChangeHandler}/>
        {users.map(x=>{return<p>{x.name}</p>})}
      </div>
    </div>
  );
}

export default App;
