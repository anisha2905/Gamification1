import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./ReviewUsers.css"

export default function ReviewUsers() {
  return (
    <div >
    <div className="reviewTitleContainer">
        <h2 >Review Users</h2>
        </div>
        <div >
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
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div className="div">
        <label className="label">Collection Type *&nbsp;</label><br/>
            <select name="period" className="form-control">
                <option>RA</option>
                <option>RES</option>
            </select>
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div className="div">
        <label className="ab-c">Category&nbsp;</label><br/>
            <select name="category" className="form-control">
            </select>
    </div> 
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div className="div">
        <label className="ab-c">Cluster Id&nbsp;</label><br/>
            <select name="cluster-id" className="form-control">
            </select>
    </div>
    </div>  
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div className="content_1">
        <div className="div">
            <label className="ab-c">Cluster Name&nbsp;</label><br/>
            <textarea name="cluster-name" className="form-control">
            </textarea>
       </div>
       &nbsp; &nbsp; &nbsp; &nbsp;
       <div className="div">
            <label className="ab-c">QCTE ID&nbsp;</label><br/>
            <textarea name="qcte-id" className="form-control">
            </textarea>
        </div> 
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div className="div">
            <label className="ab-c">QCTE Name&nbsp;</label><br/>
            <textarea name="qcte-name" className="form-control">
            </textarea> 
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div className="div">
            <label className="ab-c">Auditor Id&nbsp;</label><br/>
            <textarea name="auditor-id" className="form-control">
            </textarea>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div className="div"><br/>
            <button className="btn_1">SEARCH</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="btn_2">RESET</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="btn_3">EXPORT</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
   </div>
        <div >
          <div>
            <h2>secon div</h2>
          </div>
            
        </div>
    </div>
</div>
  )
}
