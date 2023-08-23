import React, { useState } from "react";
import axios from "axios";

const User = () => {
  const [formData, setFormData] = useState({
    userName: "",
    Full_Name: "",
    email: "",
    password: "",
    dob: "",
    address: "",
    mobile_no: "",
  });

  const [formErrors, setFormErrors] = useState({
    userName: "",
    Full_Name: "",
    email: "",
    password: "",
    dob: "",
    address: "",
    mobile_no: "",
  });

  const validateForm = () => {
    const newErrors = { ...formErrors };
    let isValid = true;

    // Validate email format
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate password complexity (e.g., at least 8 characters with numbers and letters)
    if (!/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters and include both letters and numbers.";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    // Other required field validations...

    setFormErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      addData(formData);
    }
  };

  const addData = (data) => {
    axios.post("http://localhost:9292/addUser", data).then((response) => {
      if (response.status === 200) {
        alert("Data added");
      }
    });
  };
  return (
    <div className="d-flex align-items-center " style={{height:"90vh",background:""}}>
      
      <div
        
        style={{ width: "50%", margin: "auto ", background: "#7fffd4", }}
      >
        <form method="post"  onSubmit={handleSubmit}>
          <div className="mt-4">
		<	div className="my-3"><h1>User Form</h1></div>
            <div className="row col-md-12 ps-2 ">
              <div className="col-md-6 d-flex flex-column">
                <label for="inputEmail." className="text-start my-2 " style={{fontWeight:"bold",fontSize:"20px"}} >Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6 d-flex flex-column">
                <label className="text-start my-2" style={{fontWeight:"bold",fontSize:"20px"}} for="inputPassword4">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row col-md-12 my-4 ps-2">
              <div className="col-md-6 d-flex flex-column">
                <label  className="text-start my-2" style={{fontWeight:"bold",fontSize:"20px"}}  for="inputAddress">Full_Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="full_name"
                  placeholder="Enter your Full_Name"
                />
              </div>
              <div className="col-md-6 d-flex flex-column">
                <label  className="text-start my-2" style={{fontWeight:"bold",fontSize:"20px"}} for="inputAddress2">Mobile_No</label>
                <input
                  type="text"
                  class="form-control"
                  id="mobile_no"
                  placeholder="Enter your Mobile number "
                />
              </div>
            </div>
            <div className="row col-md-12  my-4 ps-2">
              <div className="col-md-6 d-flex flex-column">
                <label  className="text-start my-2" style={{fontWeight:"bold",fontSize:"20px"}} for="inputCity">Username</label>
                <input type="text" class="form-control" id="username"  placeholder="Enter your Username"/>
              </div>
              <div className="text-start  col-md-6 d-flex flex-column  "style={{fontWeight:"bold",fontSize:"20px"}} >
                <label className="text-start my-2" for="inputZip">DOB</label>
                <input type="date" class="form-control" id="dob" />
              </div>
            </div>
            <div className="row col-md-12 my-4 ps-2">
              <div className="col-md-6 d-flex flex-column">
                <label  className="text-start my-2" style={{fontWeight:"bold",fontSize:"20px"}} for="inputZip">Address</label>
                <input type="text" class="form-control" id="address"  placeholder="Enter your Address" />
              </div>
             
            </div>
            <div className="row col-md-12 my-4 ps-2 ">
              <button
                style={{ width: "50%", margin: "auto" }}
                type="submit"
                class="btn btn-primary my-4"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;