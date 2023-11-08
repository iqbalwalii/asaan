import React from "react";
import { getBookings } from "../services/bookings";
import { Table } from "react-bootstrap";

const DataPage = () => {
  const [bookings, setBookings] = React.useState([]);
  React.useEffect(() => {
    getBookings().then((res) => setBookings(res));
  }, []);
  return (
    <div>
      <h3> List of Bookings</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Pincode</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(({ name, phone, pincode, address_1, email }, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{name}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>{pincode}</td>
              <td>{address_1}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataPage;
