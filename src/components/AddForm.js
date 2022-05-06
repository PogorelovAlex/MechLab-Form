import { Form,Row,Col,Button } from "react-bootstrap"

import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addEmployee, employees} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        name:"",gental:"",email:"",birthday:""
    });
     const employeesKeys = employees.length>=1 ? Object.keys(employees[0]):['name','gental','email','birthday'];
    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(newEmployee);
    }

     return (

         <Form onSubmit={handleSubmit}>
            
             {employeesKeys.map((item, index) => {
               if (item !== 'id') { 
                     return (   
                <Form.Group as={Row} key={`${index}+${item}`} >
                         <Form.Label column='lg' lg={3}>{item}</Form.Label>
                         <Col>
                              <Form.Control
                                key={`${index}`}
                                type="text"
                                placeholder={item}
                                name={item}
                                value={newEmployee[item]}
                                onChange = { (e) => onInputChange(e)}
                                required
                                    />
                         </Col>
                           
                </Form.Group>
             )
                 }
                 })}
            
             
            
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
        </Form>

     )
}

export default AddForm;