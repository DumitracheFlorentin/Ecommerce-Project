import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import files & functions
import AdminNavbarComponent from "./AdminNavbarComponent";
import { productsAction } from "../actions/productsAction";

const UsersDashboardComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  return (
    <>
      <AdminNavbarComponent />
    </>
  );
};

export default UsersDashboardComponent;
