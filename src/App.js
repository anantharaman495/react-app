import React from "react";
//import logo from './logo.svg';
import "./App.css";
import axios from "axios";
function App() {
  return (
    <div className="container">
      <form onSubmit={(e) => login(e)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

function login(e) {
  e.preventDefault();
  let request = {
    email: document.getElementById("exampleInputEmail1").value,
    password: document.getElementById("exampleInputPassword1").value,
  };
  axios
    .post("http://localhost:3000/login", request)
    .then((resp) => {
      alert(resp.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default App;
