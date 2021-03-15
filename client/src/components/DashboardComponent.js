import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Card } from "react-bootstrap";

// Import files
import AdminNavbarComponent from "./AdminNavbarComponent";

const DashboardComponent = () => {
  let history = useHistory();
  const [countUsers, setCountUsers] = useState(0);
  const [countProds, setCountProds] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (!res.data.isAdmin) {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/api/users/count")
      .then((res) => {
        setCountUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/api/products/count")
      .then((res) => {
        setCountProds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AdminNavbarComponent />
      <div className="dbCards">
        <Card className="dbCard" style={{ width: "18rem" }}>
          <Card.Body className="dbCardSettings">
            <Card.Title>Number Of Users</Card.Title>
            <Card.Text>{countUsers}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="dbCard" style={{ width: "18rem" }}>
          <Card.Body className="dbCardSettings">
            <Card.Title>Number Of Products</Card.Title>
            <Card.Text>{countProds}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="dbCard" style={{ width: "18rem" }}>
          <Card.Body className="dbCardSettings">
            <Card.Title>Website Version</Card.Title>
            <Card.Text>v1.0.0</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default DashboardComponent;
