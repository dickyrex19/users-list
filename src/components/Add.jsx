import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Add() {
  return (
    <>
      <h1 className="text-center">Ini Halaman Buat User</h1>
    </>
  );
}
