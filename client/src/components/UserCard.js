import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import Avatar from "../img/avatar-placeholder.png";
import EditUserModal from "./EditUserModal";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/actions";

const UserCard = ({ user }) => {
    const dispatch=useDispatch()
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Avatar} />
      <Card.Body>
        <Card.Title>{`${user.firstname} ${user.lastname}`}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="cardFooter">
          <EditUserModal user={user}></EditUserModal>
          <Button variant="danger" onClick={()=>dispatch(deleteUser(user._id))}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
