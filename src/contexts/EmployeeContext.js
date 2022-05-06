import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider  = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Thomas ', gental: 'male', email: 'thomas@mail.com', birthday: '24.02.1992'},
        {id:uuidv4(), name: 'Mike', gental: 'male', email: 'mike@mail.com', birthday: '12.08.2004'}
       
])


useEffect(()=> {
    setEmployees(JSON.parse(localStorage.getItem('employees')))
},[])

useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
})


const addColumnField = (field) => {
    setEmployees(employees.map((employee) => {
        return {...employee,[field]:""}
    }))
}
const addEmployee = (newUser) => {
    setEmployees([...employees , {id:uuidv4(),...newUser}])
}

const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
}

const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
}

    return (
        <EmployeeContext.Provider value={{employees, addEmployee, deleteEmployee, updateEmployee, addColumnField}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;