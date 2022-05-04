import React from 'react'
import Footer from '../../components/Footer/Footer'
import "./Clusters.css"

export default function Clusters() {
  return (
    <div >
    <div className="clusterTitleContainer">
        <h2 >Clusters</h2>
        <h3 className="clusterTitle"/>
        </div>
        <div>
        <div className=" clustercontent">
          <div>
    <div className="divnew">
      <label className="label">Region* &nbsp;</label><br/>
      <select name="region" className="form-control">
        <option>EUROPE</option> 
        <option>GREATER CHINA</option>
        <option>GREATER INDIA</option>
        <option>LATAM</option>
        <option>MENAP</option>
        <option>NORTH AMERICA</option>
        <option>SA & SSA</option>
        <option>SEANAP</option> 
    </select>
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div className="div">
    <label className="label">Country* &nbsp;</label><br/>
    <select name="country" className="form-control">
      <option>INDIA</option>
    </select>
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div className="div"><br/>
    <button className="btn_1 btnsearch">Search</button>
    &nbsp; &nbsp; 
    <button className="btn_2 resetbtn" >Reset</button>
    &nbsp; &nbsp; 

    <button className="btn_3 downloadbtn">Download Template</button>
    &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
    </div>
    <br />
    <div className="k-dropzone">
      <div role="button" className="k-button k-upload-button" aria-label="Select files..." tabindex="0">
        <input autocomplete="off" name="file" type="file" tabindex="-1" />
          <span>Select files...</span></div>
    <div className="k-dropzone-hint">Drop files here to upload</div></div>
    </div>
        </div>
        <div>
        <div  className='container-fluid containerfluidcluster'>
                
                <div className="col-lg-12 tablediv">
                    <div>
                <div style={{paddingTop: "11px"}}>
                    <span className="searchhead">Search Result</span>
                    </div>
                    <div  style={{marginTop: "-25px",textAlign: "right"}}>
                    <span style={{marginRight: "0.7rem", color: "#86898b"}}><button className="savebtn"><i class="fa fa-check" aria-hidden="true"></i> Save</button></span>
                    



<i className="fa fa-expand"></i>
                </div>
                </div>

                <div className="col-lg-12 div1" style={{overflowX:"auto"}}>

                    
                   
                <table  bordered  >
                        <thead>
                            <tr>
                            <th><input type="checkbox"/></th>
                            <th>Country ID</th>
                            <th>Cluster ID</th>
                            <th>Cluster Name</th>
                            <th>Target Recruitment Stores</th>
                            <th>Updated By</th>
                            <th>Updated On</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
        <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        </tr>
 <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        </tr>
                            
                        </tbody>
                    </table>

               

                    
                
                </div>
               

                </div>
                
            </div>
            
        </div>
        <Footer/>
</div>
  )
}
