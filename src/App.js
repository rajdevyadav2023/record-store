

import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  function addData() {
    setData([...data, { name, email }])

    setName("");
    setEmail("");
  }
  function removeUser(i){
const arr = data;
arr.splice(i, 1);
setData([...arr]);
  }
  return (
    <div className="App">
      <Header />
{/* INPUT FORM */}
      <div className="input-container">
        <Stack direction="row" spacing={2}>
          <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={addData} variant="contained" size="large" color='success' ><AddIcon /></Button>
        </Stack>

      </div>

{/* DATA RECORD */}
<div className="data">
<div className="data-item">
    <h4>Name</h4>
    <h4>Email</h4>
    <h4>Remove</h4>
  </div>
  {
    data.map((user, index)=>{
    return <div className="data-item" key={index}>
    <h4>{user.name}</h4>
    <h4>{user.email}</h4>
    <h4 onClick={()=>{removeUser(index)}}>Remove</h4>
</div>})
  }
</div>
    </div>
  );
}

export default App;
