import React, { useState, useEffect } from 'react'
import "./Clusters.css"

export default function Clusters() {
  // const [usersdata, setUser] = useState([])
  const [record, setRecord] = useState("")
  const [search, setSearch] = useState([])
  const [region, setRegion] = useState("")
  const [regionErr, setregionErr] = useState(false);
  const [countrynmErr, setcountrynmErr] = useState(false);

  function searchRecord() {
    if (region === "null" || region === "" || record === "null" || record === "") {
      setcountrynmErr(true);
      setregionErr(true);
    }
    else {
      setregionErr(false);
      setcountrynmErr(false);
    }
    if (region === "null" || region === "") {
      setregionErr(true)
    }
    else {
      setregionErr(false)
    }
    if (record === "null" || record === "") {
      setcountrynmErr(true)
    }
    else {
      setcountrynmErr(false)
    }
    if (region === "" || region === null || typeof (region) === 'undefined' ||
      record === "" || record === null || typeof (record) === 'undefined') {

    }

    else {

      fetch(`http://localhost:3000/ClusterDetails?Country=${record}`, {
        method: "GET"

      }).then((result) => {
        result.json().then((resp) => {
          setSearch(resp)
          console.log(resp)

        })
      })
    }
  }
  function resetform() {
    document.getElementById("clusterform").reset();
  }

  const selectShortlistedApplicant = (e, id) => {
    const checked = e.target.checked;
    var itemID = id;
    if (checked) {
      //alert("Check box in Checked of row "+id);
      document.getElementById("store_recruitment_value_" + itemID).style.display = 'none';
      document.getElementById("enter_store_recruitment_value_" + itemID).style.display = 'block';
    } else {
      //alert("Check box is Unchecked");
      document.getElementById("store_recruitment_value_" + itemID).style.display = 'block';
      document.getElementById("enter_store_recruitment_value_" + itemID).style.display = 'none';
    }
  };
  function selectcountry(e) {
    // const country = document.getElementById("country")
    const data = e.target.value;
    fetch(`http://localhost:3000/CountrydetailsDetails?Region=${data}`, {
      method: "GET"

    }).then((result) => {
      result.json().then((resp) => {

        console.log(resp)
        var json = JSON.stringify(resp);

        console.log(json);
        for (var i = 0; i < json.length; i++) {
          document.getElementById("country").append(" <option>" + json[i].Country + "</option> ");
        }


      })
    })

  }

  return (
    <div >
      <div className="clusterTitleContainer">
        <h2 >Clusters</h2>
        <h3 className="clusterTitle" />
      </div>
      <div>
        <div className=" clustercontent">
          <div>
            <form id="clusterform">
              <div className="divnew">
                <label className="label">Region* &nbsp;</label><br />
                <select name="region" className="form-control"
                  onChange={(e) => {
                    selectcountry(e); setRegion(e.target.value)
                  }} value={region} >
                  <option value="">Select Region</option>
                  <option value="EUROPE">EUROPE</option>
                  <option value="GREATER CHINA">GREATER CHINA</option>
                  <option value="GREATER INDIA">GREATER INDIA</option>
                  <option value="LATAM">LATAM</option>
                  <option value="MENAP">MENAP</option>
                  <option value="NORTH AMERICA">NORTH AMERICA</option>
                  <option value="SA & SSA">SA & SSA</option>
                  <option value="SEANAP">SEANAP</option>
                </select><br />
                {regionErr ? <span className="errormessage">Field is required</span> : ""}<br />
              </div>

              &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="div">
                <label className="label">Country* &nbsp;</label><br />
                <select class="form-control select"
                  onChange={(e) => setRecord(e.target.value)} id="country" value={record} >
                 <option value="">Select country</option>
                </select><br />
                {countrynmErr ? <span className="errormessage">Field is required</span> : ""}<br />
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="div"><br />
                <button type='button' className="btn_1 btnsearch" onClick={searchRecord}>Search</button>
                &nbsp; &nbsp;
                <button className="btn_2 resetbtn" onClick={resetform}>Reset</button>
                &nbsp; &nbsp;

                <button className="btn_3 downloadbtn">Download Template</button>
                &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
            </form>
          </div>
          <br />
          <div className="k-dropzone" style={{ marginTop: "43px" }}>
            <div role="button" className="k-button k-upload-button" aria-label="Select files..." tabIndex="0">
              <input autoComplete="off" name="file" type="file" tabIndex="-1" />
              <span>Select files...</span></div>
            <div className="k-dropzone-hint">Drop files here to upload</div></div>
        </div>
      </div>
      <div>
        <div className='container-fluid containerfluidcluster'>

          <div className="col-lg-12 tablediv">
            <div>
              <div style={{ paddingTop: "11px" }}>
                <span className="searchhead">Search Result</span>
              </div>
              <div style={{ marginTop: "-25px", textAlign: "right" }}>
                <span style={{ marginRight: "0.7rem", color: "#86898b" }}><button className="savebtn"><i className="fa fa-check" aria-hidden="true"></i> Save</button></span>
                <i className="fa fa-expand"></i>
              </div>
            </div>

            <div className="col-lg-12 div1" style={{ overflowX: "auto" }}>



              <table bordered="true"  >
                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>Country ID</th>
                    <th>Cluster ID</th>
                    <th>Cluster Name</th>
                    <th>Target Recruitment Stores</th>
                    <th>Updated By</th>
                    <th>Updated On</th>
                  </tr>
                </thead>
                <tbody>
                  {search.length > 0 ? search.map((item, i) => (



                    // {search.map((item)=>
                    <tr key={i}>
                      <td>
                        <input
                          id={item.clusterId}
                          type="checkbox"
                          className="checkbox disable-team team_values"
                          onClick={(e) => {
                            selectShortlistedApplicant(e, item.clusterId);
                          }}
                        />
                      </td>
                      {/* <td><input type="checkbox" id={i} onClick={() => checkedfunction(i)} /></td> */}
                      <td><p id={item.clusterId}>{item.Country}</p></td>
                      <td>{item.clusterId}</td>
                      <td>{item.ClusterName}</td>
                      <td><div id={"store_recruitment_value_" + item.clusterId}>{item.StoreRecruitmentTarget}</div>
                        <div style={{ display: "none" }} id={"enter_store_recruitment_value_" + item.clusterId}><input type="text" className="form-control" /></div></td>
                      <td>{item.RecruitmentTargetUpdatedBy}</td>
                      <td>{item.RecruitmentTargetUpdatedOn}</td>
                    </tr>
                  )) : <div>No Data avaliable</div>}

                </tbody>

              </table>





            </div>
            {/* <div className="tablefooter">
<span className="fa fa-step-backward linkicon" aria-hidden="true"></span>
<span className="fa fa-caret-left linkicon" aria-hidden="true"></span>
<span className="fa fa-caret-right linkicon" aria-hidden="true"></span>
<span className="fa fa-step-forward linkicon" aria-hidden="true"></span>
                <div style={{float: "right"}}>0 - 0 of 0 items</div>
                </div> */}

          </div>

        </div>
        <div><p className="nielsen-footer">Copyright © 2021 Nielsen Consumer LLC. All Rights Reserved.</p></div>

      </div>
    </div>
  )
}
