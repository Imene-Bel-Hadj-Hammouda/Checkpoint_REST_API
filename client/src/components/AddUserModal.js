import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from '../actions/actions'

const AddUserModal = () => {

    const dispatch = useDispatch()
  //state decalaration
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  });
  const [show, setShow] = useState(false);

  //functions declaration
  const handleClose = () => {
    setNewUser({
      firstname: "",
      lastname: "",
      password: "",
      email: "",
    });
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser)
const handleSave=()=>{
    dispatch(addUser(newUser))
    handleClose()
}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD USER
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input placeholder="firstname" type="text" required  value={newUser.firstname} name="firstname" onChange={handleChange}></input>
            <input placeholder="lastname" type="text" required value={newUser.lastname} name="lastname" onChange={handleChange}></input>
            <input placeholder="email" type="email" required value={newUser.email} name="email" onChange={handleChange}></input>
            <input placeholder="password" value={newUser.password} required
              type="password"
              name="password"
              onChange={handleChange}
            ></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSave} disabled>
            Save
          </Button>
          <Button variant="primary" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddUserModal;
