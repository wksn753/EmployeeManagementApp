import './index.css'
import Employee from "./EmployeeManagement/components/Employee.tsx";
import {useState} from "react";
import AddEmployee from "./EmployeeManagement/components/AddEmployee.tsx";
import { v4 as uuidv4 } from 'uuid';
import EditEmployee from "./EmployeeManagement/components/EditEmployee.tsx";

function App() {
  const showEmployees=true;
  const [employees,setEmployees]=useState([
    { id:1,
      name:'wassanyi',
     role:'developer',
     img:'/man1.jpg'
    },
    { id:2,
      name:'kevin',
      role:'developer',
      img:'/man2.jpg'
    },

    { id:3,
      name:'stephen',
      role:'developer',
      img:'/man3.jpg'
    },
    { id:4,
      name:'steven',
      role:'developer',
      img:'/man4.jpg'
    },
    { id:5,
      name:'kelvin',
      role:'developer',
      img:'/man5.jpg'
    },
  ])
  function updateEmployee(id:any,name:any,role:any){
    const newEmployee=employees.map((employee)=>{
      if(id===employee.id){
        return{...employee,name:name,role:role};
      }
      return employee
    })
    console.log(employees)
    setEmployees(newEmployee)
  }
  function NewEmployee(name:any,role:any,img:any){
   const newEmployee={
      id:uuidv4(),
      name,
      role,
      img,
    };
   setEmployees([...employees,newEmployee]);
   console.log(employees)
  }

  return (
    <>
      {showEmployees?<div className='App'>

        <div className='flex flex-wrap justify-center'>
          {employees.map((employee)=>{
           const editEmployee= <EditEmployee
               id={employee.id} role={employee.role} name={employee.name} updateEmployee={updateEmployee}/>
            return(
                <Employee
                    id={employee.id}
                    key={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    editEmployee={editEmployee}
                />)
          })}
        </div>
        <AddEmployee NewEmployee={NewEmployee}/>
      </div>:''}
    </>
  )
}

export default App
