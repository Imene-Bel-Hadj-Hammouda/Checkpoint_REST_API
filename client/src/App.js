import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/actions";
import Spiner from "./components/Spinner";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserCard from "./components/UserCard";
import  './style/style.css'
import AddUserModal from "./components/AddUserModal";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const isLoading = useSelector((state) => state.usersReducer.isLoading);
  const errors = useSelector((state) => state.usersReducer.errors);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <AddUserModal></AddUserModal>
      <div className="main">
    {isLoading ? (
      <Spiner></Spiner>
    ) : (
      users.map((el) => <UserCard user={el}/>)
      
    )}
    {errors
      ? errors.map((el) => (
          <Alert variant="danger">
            ERROR: {el.msg}
          </Alert>
        ))
      : null}
  </div></div>
    
  );
}

export default App;
