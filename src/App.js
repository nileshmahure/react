import Employee  from './components/Employee';
import './App.css';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('Dev');
  const showEmployees = true;
  return (
    <div className="App">
      
      {console.log('inside the return')}
        { 
          showEmployees ? 
        <>
        <input 
        type='text' 
        onChange={(e)=>{ 
          console.log(e.target.value);
        setRole(e.target.value);
        }}/>
          <Employee name='caleb' role = 'Intern'/>
          <Employee name = 'nilesh' role={role}/>
          <Employee name = 'Sonali'/>
          <Employee name = 'Gouri' />
          <Employee name = 'Mahure'/>
        </>
        : <p>You can not shee the employees.</p>
      }
    </div>
  );
}

export default App;
