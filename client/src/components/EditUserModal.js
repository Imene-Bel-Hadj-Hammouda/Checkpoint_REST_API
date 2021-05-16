import { Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editUser } from '../actions/actions';

const EditUserModal = ({user}) => {
   
    const dispatch = useDispatch()
  //state decalaration
  const [updatedUser, setUpdatedUser] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    password: user.password,
    email: user.email,
  });
  const [show, setShow] = useState(false);

  //functions declaration
  const handleClose = () => {
    setUpdatedUser({
      firstname: "",
      lastname: "",
      password: "",
      email: "",
    });
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleChange = (e) =>
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
const handleSave=()=>{
    dispatch(editUser(user._id,updatedUser))
  handleClose()
}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input placeholder="firstname" type="text" required  value={updatedUser.firstname} name="firstname" onChange={handleChange}></input>
            <input placeholder="lastname" type="text" required value={updatedUser.lastname} name="lastname" onChange={handleChange}></input>
            <input placeholder="email" type="email" required value={updatedUser.email} name="email" onChange={handleChange}></input>
            <input placeholder="password" value={updatedUser.password} required
              type="password"
              name="password"
              onChange={handleChange}
            ></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="primary" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUserModal
