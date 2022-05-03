import { Modal, Button, Alert,OverlayTrigger, Tooltip } from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {EmployeeContext} from '../contexts/EmployeeContext';
import Employee from './Employee';
import AddForm from './AddForm';
import AddColumnForm from './AddColumnForm';

const EmployeeList = () => {

    const {sortedEmployees} = useContext(EmployeeContext);

    const [showAlert, setShowAlert] = useState(false);

    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [showAddColumnForm, setShowAddColumnForm] = useState(false);
    
    const handleShowAddUsersModal = () => setShowAddUserForm(true)
    const handleShowAddColumnModal = () => setShowAddColumnForm(true)
       
    
        
    const handleCloseAddUsersModal = () => {
        setShowAddUserForm(false)
    };  
    const handleCloseAddColumnModal = () => {
        setShowAddColumnForm(false)
    }; 
    
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleCloseAddUsersModal();

        return () => {
            handleShowAlert();
        }
    }, [sortedEmployees])

    const sortedEmployeesKeys = sortedEmployees.length>=1 ? Object.keys(sortedEmployees[0]):[];
   
    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-12">
                        <Button onClick={handleShowAddColumnModal} className="btn" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Column</span></Button>
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Emlployee List Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover">
                <thead  className="table-dark">
            <tr>
                        {
                           sortedEmployeesKeys.map((item, index) => {
                                if (item !== 'id') {
                                    return <td key={`${index}+${sortedEmployeesKeys[index]}`}>{item}</td>
                                }
                           })}
                        <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button className="btn text-white btn-act" data-toggle="modal"><i className="material-icons">thumb_up</i></button>
                </OverlayTrigger>
            </td>
            </tr>
        </thead>
        <tbody>

                {
                        sortedEmployees.map(employee => {
                            return (<tr key={employee.id}>
                                <Employee employee={employee} id={employee.id} />
                            </tr>
                            )
                        })  
                }
                

        </tbody>
    </table>
    <div className="table-title">
        <div className="row justify-content-center">
                        <Button onClick={handleShowAddUsersModal} className="btn" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Row</span></Button>	 
        </div>
    </div>

    <Modal show={showAddUserForm} onHide={handleCloseAddUsersModal}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add New Row
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAddUsersModal}>
                    Close Button
                </Button>
        </Modal.Footer>
            </Modal>


    <Modal show={showAddColumnForm} onHide={handleCloseAddColumnModal}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add New Column
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddColumnForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAddColumnModal}>
                    Close Button
                </Button>
        </Modal.Footer>
            </Modal>
        
    </>
    )
}

export default EmployeeList;