import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  let history = useNavigate();
  const handleDelete = (id) => {
    let i = Users.map(function (e) {
      return e.id;
    }).indexOf(id);

    Users.splice(i, 1);
    history("/");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Users List</h1>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Users && Users.length > 0
              ? Users.map((el) => {
                  return (
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button onClick={() => handleEdit(el.id)}>
                            Ubah
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(el.id)}>
                          Hapus
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "Tidak ada data user"}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">Buat User</Button>
        </Link>
      </div>
    </>
  );
}
