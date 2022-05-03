import { Form, Button } from "react-bootstrap"
import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';

const EditForm = ({theEmployee,id}) =>{

    const { updateEmployee } = useContext(EmployeeContext); 
    const [newEmployee, setNewEmployee] = useState(theEmployee)  
    const newEmployeeKeys = Object.keys(newEmployee);
  
    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, newEmployee)
    }
     return (

         <Form onSubmit={handleSubmit}>
             {newEmployeeKeys.map((item, index) => {
                 if (newEmployee[item] !== id) {
                     return (
                         <Form.Group key={`${index}+${item}`}>
                             <Form.Control
                             key={`${index}`}
                             type="text"
                             placeholder={newEmployee[item]}
                             name={item}
                             value={newEmployee[item]}
                             onChange={(e) => onInputChange(e)}
                             required
                                 />
                             </Form.Group>
                         )
                 }
             })}
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>

     )
}

export default EditForm;