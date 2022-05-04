
import React from 'react'
import Footer from '../../components/Footer/Footer'
import "./Configuration.css"
export default function Configuration() {
  return (
    <>
    <div >
    <div className="configTitleContainer">
        <h2 >Configuration</h2>
        <h3 className="configTitle"/>
        </div>
        <div className='div_1'>
          <div className="content_1">
    <div className="div">
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
    &nbsp; &nbsp; &nbsp; &nbsp; 
    </div>
    <div className="div"><br/>
    <button className="btn_1">SEARCH</button>
    &nbsp; &nbsp; &nbsp; &nbsp;

    <button className="btn_2">RESET</button>
    &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
    </div>
        </div>
        <div className='div_1'>
        <div  className='container-fluid containerfluidnew'>
                
                <div className="col-lg-12 tablediv">
                    <div>
                <div style={{paddingTop: "11px"}}>
                    <span className="searchhead">Search Result</span>
                    </div>
                    <div  style={{marginTop: "-25px",textAlign: "right"}}>
                    <i className="fa fa-expand"></i>
                </div>
                </div>

                <div className="col-lg-12 div1" style={{overflowX:"auto"}}>
                <table bordered  >
                        <thead>
                            <tr>
                            <th><input type="checkbox"/></th>
                            <th>Country ID</th>
                            <th>Process ID</th>
                            <th>Process Name</th>
                            <th>Enable</th>
                            <th>FTE</th>
                            <th>Freelancer</th>
                            <th>RA</th>
                            <th>RES</th>
                            <th>SFA</th>
                            <th>NSO</th>
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
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        </tr>
                            
                        </tbody>
                    </table>

               

                    
                
                </div>
                <div className="tablefooter">
<span className="fa fa-step-backward linkicon" aria-hidden="true"></span>
<span className="fa fa-caret-left linkicon" aria-hidden="true"></span>
<span className="fa fa-caret-right linkicon" aria-hidden="true"></span>
<span className="fa fa-step-forward linkicon" aria-hidden="true"></span>
                <div style={{float: "right"}}>0 - 0 of 0 items</div>
                </div>

                </div>
                
            </div>
            
             <Footer/>  
        </div>
        
</div>

</>
  )
}
