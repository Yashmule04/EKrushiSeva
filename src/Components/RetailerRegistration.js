import "./RetailerRegistration.css";
import React, { useState ,useEffect} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../../node_modules/bootstrap/dist/js/bootstrap";
import axios from "axios";




export default function RetailerRegistration() {
  const [formErrors,setFormErrors] = useState({});
  
  const [shopkeeper,setShopkeeper] = useState({
      username:"",
      emailId:"",
      mobileNo:"",
      name:"",
      password:"",
      seedLicenseNo:"",
      fertilizerLicenseNo:"",
      pesticideLicenseNo:"",
      gstNo:"",
      licenseExpiryDate:"",
      address:""

  })
  let name,value;
  const handleChange =(e) => {
    name=e.target.name;
    value=e.target.value;
    setShopkeeper({ ...shopkeeper, [name] : value });

  }
  /*
  useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(shopkeeper).length === 0 && isSubmit){
      console.log(shopkeeper);
      let url = "http://localhost:9292/add-shopkeeper";
      axios.post(url,shopkeeper).then(( response) => {
        console.log(response.data);
      })
    }
  })*/

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "http://localhost:9292/add-shopkeeper";

      axios.post(url,shopkeeper).then(( response) => {
        console.log(response.data);
      })
      
      let newuser = ({
        username:"",
        emailId:"",
        mobileNo:"",
        name:"",
        password:"",
        seedLicenseNo:"",
        fertilizerLicenseNo:"",
        pesticideLicenseNo:"",
        gstNo:"",
        licenseExpiryDate:"",
        address:""
      })

      setShopkeeper(newuser);
  }
 

  return (
    
      
        <div className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100  ">
            <div className="col-md-6">
              <div className="card card-registration my-4 bg-dark-subtle ">
                <div className="row g-0 d-flex justify-content-center align-items-center">
                  
                  
                  <div className="col-sm-12 col-md-12">
                    <div className="card-body p-md-5 text-black">
                      <form onSubmit={handleSubmit} >
                          <div className="row">
                            <div className="col-sm-12">
                                <p id="h2feat">Retailer Registration</p>
                            </div>
                          </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label htmlFor="username" className="form-label fw-bolder" >
                              Username
                            </label>
                            <input
                              type="text"
                              id="username"
                              name="username"
                              placeholder="jhonkimy"
                              className="form-control form-control-lg"
                              value={shopkeeper.username}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.username}</p>
                            
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label htmlFor="name" className="form-label fw-bolder" >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Jhon Kimy"
                              className="form-control form-control-lg"
                              value={shopkeeper.name}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.name}</p>
                            
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label htmlFor="emailId" className="form-label fw-bolder">
                              EmailId
                            </label>
                            <input
                              type="email"
                              id="emailId"
                              name="emailId"
                              placeholder="jhon@gmail.com"
                              className="form-control form-control-lg"
                              value={shopkeeper.emailId}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.seedLicenseNo}</p>
                            
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label htmlFor="mobileNo" className="form-label fw-bolder" >
                              Mobile Number
                            </label>
                            <input
                              type="text"
                              id="mobileNo"
                              name="mobileNo"
                              placeholder="8978675645"
                              className="form-control form-control-lg"
                              value={shopkeeper.mobileNo}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.pesticideLicenseNo}</p>
                            
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label htmlFor="seedLicenseNo" className="form-label fw-bolder">
                              Seed License
                            </label>
                            <input
                              type="text"
                              placeholder="SEED203019"
                              id="seedLicenseNo"
                              name="seedLicenseNo"
                              className="form-control form-control-lg"
                              value={shopkeeper.seedLicenseNo}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.seedLicenseNo}</p>
                            
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label htmlFor="pesticideLicenseNo" className="form-label fw-bolder" >
                              Pesticide License
                            </label>
                            <input
                              type="text"
                              placeholder="PESTISIDE203019"
                              id="pesticideLicenseNo"
                              name="pesticideLicenseNo"
                              className="form-control form-control-lg"
                              value={shopkeeper.pesticideLicenseNo}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.pesticideLicenseNo}</p>
                            
                          </div>
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label htmlFor="fertilizerLicenseNo" className="form-label fw-bolder">
                              Fertilizer License
                            </label>
                            <input
                              type="text"
                              id="fertilizerLicenseNo"
                              name="fertilizerLicenseNo"
                              placeholder="FERTILIZER203019"
                              className="form-control form-control-lg"
                              value={shopkeeper.fertilizerLicenseNo}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.fertilizerLicenseNo}</p>
                            
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <label className="form-label fw-bolder" >
                              GST No
                            </label>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="gstNo"
                              name="gstNo"
                              placeholder="GST203019"
                              className="form-control form-control-lg"
                              value={shopkeeper.gstNo}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.gstNo}</p>
                            
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label htmlFor="licenseExpiryDate" className="form-label fw-bolder">
                              License Expiry Date
                            </label>
                            <input
                              type="date"
                              id="licenseExpiryDate"
                              name="licenseExpiryDate"
                              className="form-control form-control-lg"
                              value={shopkeeper.licenseExpiryDate}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.fertilizerLicenseNo}</p>
                            
                          </div>
                        </div>
                        
                      </div>
                      <div className="form-outline mb-4">
                          <div className="form-outline">
                          <label className="form-label fw-bolder" >
                              Shop Address
                            </label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              className="form-control form-control-lg"
                              value={shopkeeper.address}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.shopAddress}</p>
                           
                          </div>
                        </div>


                      <div className="form-outline mb-4">
                      <label className="form-label fw-bolder" >
                         Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          value={shopkeeper.password}
                          onChange={handleChange}
                        />
                        <p style={{color:'red'}}>{formErrors.password}</p>
                        
                      </div>
                      <div className="d-flex justify-content-center pt-3">
                        <button type="button" class="btn btn-light btn-lg">
                          Reset all
                        </button>
                        
                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-primary btn-lg ms-2"  
                        >
                          Register
                        </button>
                      </div>
                      </form>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
   
  );
}


