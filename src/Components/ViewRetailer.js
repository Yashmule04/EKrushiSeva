import "./ViewRetailer.css";

export function ViewRetailer()
{
    return(
        <>
            <div className="container-fluid">
                <div className="row align-text-center justify-content-center">
                    <div className="col-sm-12 col-md-11 p-3 bg-dark-subtle pb-5" style={{margin: "9vh"}}>
                        
                        <h2 id="texh2">Meeting Schedule</h2>

                        <div className="row">
                            <div className="col">
                                <table style={{width: "100%"}}>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Name</th>
                                    <th>EmailId</th>
                                    <th>Mobile Number</th>
                                    <th>Seed License Number</th>
                                    <th>Pesticide License Number</th>
                                    <th>Fertilizer License Number</th>
                                    <th>GST Number</th>
                                    <th>Date</th>
                                    <th>Delete</th>
                                </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Mohit Raut</td>
                                            <td>mr@gmail.com</td>
                                            <td>9675445667</td>
                                            <td>SEED202310</td>
                                            <td>PESTICIDE202310</td>
                                            <td>FERTILIZER202310</td>
                                            <td>GSTNO202310</td>
                                            <td>23/12/2023</td>
                                            <td>
                                               <input type="button" value="&#128465;"/>
                                            </td>
                                        </tr> 
                                </table>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}