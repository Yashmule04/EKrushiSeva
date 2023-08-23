import "./ApproveRetailer.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export function ApproveRetailer()
{
    let [Unapprove, setApprove] = useState([]);

    
    useEffect(()=>{onEnter();}, []);
    let onEnter= ()=>{
        let url = `http://localhost:9292/getUnapproveRetailer?status=Unapprove`;
        axios.get(url).then((response)=>{
            setApprove(response.data);
            console.log(response.data);
            console.log(Unapprove == 0);
        })
    }

    const Approved = async(item)=>{
        let url = `http://localhost:9292/updateStatus?pending=Approve&id=${item.id}`;
        axios.get(url).then((response)=>{
            console.log(response);
            /*navigate("/PendingCon");*/
        })
        
    };

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 style={{textAlign:"center", fontFamily:"cursive"}}>Pending Retailer Connection</h1>
                    </div>
                </div>

                
                    <div className="row justify-content-center my-1" >
                        <div className="col-sm-8 p-1 my-1">
                            {Unapprove.map((item, index)=>(
                                    <>

                                        <div className="row connection my-2 p-1">
                                            <div className="col-1">
                                                <img src="/ProfilePic.png" alt="" className="profilepic"/>
                                            </div>
                                            <div className="col-10">
                                                <h6>Name :- Mohit Kukar</h6>
                                                <h6>Email Id :- mr@gmail.com</h6>
                                                <h6>Mobile :- 8976563890</h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h6>Seed License Number :- SEED2023</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h6>Pesticide License Number :- SEED2023</h6>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h6>Fertilizer License Number :- SEED2023</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h6>GST Number :- SEED2023</h6>
                                                    </div>
                                                </div>
                                                <h6>Status :- <span style={{color:"red"}}>Pending</span></h6>
                                                <Button variant="primary" >
                                                    Click Here
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                ))}     
                        </div>
                    </div>
            </div>
        </>
    )
}