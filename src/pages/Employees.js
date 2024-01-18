import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Employee  from '../components/Employee';
import '../index.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';

function Employees() {
  const [employees, setEmployees] = useState(
    [{
      id:1,
      name:"Tinkoo", 
      role:"Developer", 
      img:"https://www.realmenrealstyle.com/wp-content/uploads/2023/08/Attractive-Older-Men-Are-Confident.jpg"
    },
    {
      id:2,
      name:"Vicky", 
      role:"Sr. Developer", 
      img:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
    },
    {
      id:3,
      name:"Nilesh", 
      role:"Team Lead", 
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
    },
    {
      id:4,
      name:"Sonali", 
      role:"Associate Developer", 
      img:"https://www.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-600nw-2127014192.jpg"
    },
    {
      id:5,
      name:"Gouri", 
      role:"HR", 
      img:"https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?cs=srgb&dl=pexels-pixabay-247322.jpg&fm=jpg"
    },
    {
      id:6,
      name:"Shanky", 
      role:"Accountant", 
      img:"https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
    }

  ]);

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id){
        return {...employee, name:newName, role:newRole};
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;
  return (
    <div className="">
      
        { 
          showEmployees ? 
        <>
        
        <div className='flex flex-wrap justify-center'>
          {employees.map((employee)=>{
            const editEmployee = (<EditEmployee 
                    id={employee.id} 
                    name={employee.name} 
                    role={employee.role} 
                    updateEmployee={updateEmployee}
                />);
            return (
              <Employee 
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                editEmployee = {editEmployee}
              />
            );
          })}
        </div>
        <AddEmployee newEmployee={newEmployee}/>
        </>
        : <p>You can not see the employees.</p>
      }
    </div>
  );
}

export default Employees;
