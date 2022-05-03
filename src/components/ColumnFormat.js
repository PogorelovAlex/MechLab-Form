import { Form,Row,Col} from "react-bootstrap"
import { useState} from 'react';



const ColumnFormat = ({type,handleStep}) =>{
    const [value, setValue] = useState("0");
    const onInputChange = (e) => {
        setValue(e.target.value);
        handleStep(value)
    }
     return (
        <Form.Group>
             {type !== 'text' ?
                 <Form.Group as={Row}>
                     <Form.Label column lg={3}>FORMAT</Form.Label>
                     <Col>
                     <Form.Control
                            type={type}
                            placeholder="Column Format"
                            name="columnFormat"
                            value={value || ''}
                            onChange={(e) => onInputChange(e)}
                            required
                        /> 
                     </Col>
                </Form.Group> : null}
             
        </Form.Group>

     )
}

export default ColumnFormat;