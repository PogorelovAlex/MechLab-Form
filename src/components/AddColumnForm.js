import { Button,Row,Col, } from "react-bootstrap"
import Form from 'react-bootstrap/Form'

import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';
import ColumnFormat from "./ColumnFormat";



const AddColumnForm = () =>{

    const {addColumnField} = useContext(EmployeeContext);
    const [value, setValue] = useState("");
    const [type, setType] = useState('text');
    const [step,setStep] = useState('0')

    const onInputChange = (e) => {
        setValue(e.target.value)
    }
    const onTypeChange = (e) => {
        setType(e.target.value)
    }
    const handleStep = (value) => {
        setStep(value.toString())
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addColumnField(value);
    }
   

     return (

        <Form onSubmit={handleSubmit}>
             <Form.Group as={Row}>
                 <Form.Label column lg={3}>NAME</Form.Label>
                 <Col>
                 <Form.Control
                    type='text'
                    placeholder="Column Name"
                    step={step}
                    name="columnName"
                    value={value || ''}
                    onChange = { (e) => onInputChange(e)}
                    required
                 />
                 </Col>
             </Form.Group>
             <Form.Group as={Row}>
             <Form.Label column lg={3}>TYPE</Form.Label>
                 <Col>
                  <Form.Control as="select" onChange={(e) => onTypeChange(e)}>
                    <option value ='text' >Текстовый</option>
                    <option value ='number'>Числовой</option>
                    <option value ='date'>Дата</option>
                 </Form.Control>
                 </Col>
             </Form.Group >
             <Form.Group as={Row}>
                 <Col>
                    <ColumnFormat type={type} handleStep={handleStep} />    
                 </Col>
             </Form.Group>
                 
                 
       
             
            
            <Button variant="success" type="submit" block>
                Add New Column
            </Button>
        </Form>

     )
}

export default AddColumnForm;