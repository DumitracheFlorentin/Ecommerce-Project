import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import files & functions
import AdminNavbarComponent from "./AdminNavbarComponent";
import { usersAction } from "../actions/usersAction";

const UsersDashboardComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAction());
  }, [dispatch]);

  return (
    <>
      <AdminNavbarComponent />
    </>
  );
};

export default UsersDashboardComponent;
