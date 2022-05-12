import React, { useState, useEffect } from 'react'
import './Clusters.css'
import { CSVLink } from 'react-csv'
import { Checkbox } from '@material-ui/core'
import TablePagination from '@mui/material/TablePagination'

export default function Clusters() {


  // const [region, setRegion] = useState([])
  // const [regionid, setRegionid] = useState()
  // const [country, setCountry] = useState([])
  // const [value, setValue] = useState([])
  // const [search, setSearch] = useState([])
  

  const [record, setRecord] = useState('')
  const [search, setSearch] = useState([])
  const [region, setRegion] = useState('')
  const [regionErr, setregionErr] = useState(false)
  const [countrynmErr, setcountrynmErr] = useState(false)

  // Table Pagination
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  //Table Pagination

  const datanew = [
    {
      clusterId: '265047',
      Country: 'BRAZIL',
      ClusterName: '12-B',
      StoreRecruitmentTarget: '0',
    },
    {
      clusterId: '271047',
      Country: 'BRAZIL',
      ClusterName: '01-C',
      StoreRecruitmentTarget: '0',
    },
    {
      clusterId: '471047',
      Country: 'BRAZIL',
      ClusterName: '10-C',
      StoreRecruitmentTarget: '1',
    },
    {
      clusterId: '264052',
      Country: 'BRAZIL',
      ClusterName: '13-B',
      StoreRecruitmentTarget: '0',
    },
  ]

  const headers = [
    { label: 'cluster Id', key: 'clusterId' },
    { label: 'Country Name', key: 'Country' },
    { label: 'Cluster Name', key: 'ClusterName' },
    { label: 'StoreRecruitmentTarget', key: 'StoreRecruitmentTarget' },
  ]

  const csvReport = {
    data: datanew,
    headers: headers,
    filename: 'Cluster_Report.csv',
  }
  function expand() {
    var clustercontentid = document.getElementById('clustercontent')
    var containerfluidclusterid = document.getElementById(
      'containerfluidcluster',
    )
    var tableidnm = document.getElementById('tableid')

    if (clustercontentid.style.display == 'none') {
      clustercontentid.style.display = 'block'
      containerfluidclusterid.style.marginTop = '156px'
      tableidnm.style.height = '219px'
    } else {
      clustercontentid.style.display = 'none'
      containerfluidclusterid.style.marginTop = '0px'
      tableidnm.style.height = '350px'
    }
  }

  function selectcountry(e) {
    // const country = document.getElementById("country")
    const data = e.target.value
    fetch(`http://localhost:3000/CountrydetailsDetails?Region=${data}`, {
      method: 'GET',
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        // var json = JSON.stringify(resp);

        // console.log(json);
        var select = document.getElementById('country')
        // Logic to remove all options from the select dropdown
        var length = select.options.length
        for (i = length - 1; i > 0; i--) {
          select.options[i] = null
        }
        // Logic to remove all options from the select dropdown

        // Logic to add options to the select dropdown
        for (var i = 0; i < resp.length; i++) {
          var option = document.createElement('option')
          option.text = resp[i].Country
          option.value = resp[i].Country
          select.appendChild(option)
        }
        // Logic to add options to the select dropdown
      })
    })
  }

  function searchRecord() {
    if (
      region === 'null' ||
      region === '' ||
      record === 'null' ||
      record === ''
    ) {
      setcountrynmErr(true)
      setregionErr(true)
    } else {
      setregionErr(false)
      setcountrynmErr(false)
    }
    if (region === 'null' || region === '') {
      setregionErr(true)
    } else {
      setregionErr(false)
    }
    if (record === 'null' || record === '') {
      setcountrynmErr(true)
    } else {
      setcountrynmErr(false)
    }
    if (
      region === '' ||
      region === null ||
      typeof region === 'undefined' ||
      record === '' ||
      record === null ||
      typeof record === 'undefined'
    ) {
    } else {
      fetch(`http://localhost:3000/ClusterDetails?CountryId=${record}`, {
        method: 'GET',
      }).then((result) => {
        result.json().then((resp) => {
          setSearch(resp)
          console.log(resp)
        })
      })
    }
  }
  function resetform() {
    document.getElementById('clusterform').reset()
  }

  const selectShortlistedApplicant = (e, id) => {
    const checked = e.target.checked
    var itemID = id
    if (checked) {
      //alert("Check box in Checked of row "+id);
      document.getElementById(
        'store_recruitment_value_' + itemID,
      ).style.display = 'none'
      document.getElementById(
        'enter_store_recruitment_value_' + itemID,
      ).style.display = 'block'
    } else {
      //alert("Check box is Unchecked");
      document.getElementById(
        'store_recruitment_value_' + itemID,
      ).style.display = 'block'
      document.getElementById(
        'enter_store_recruitment_value_' + itemID,
      ).style.display = 'none'
    }
  }

  return (
    <>
      <div>
        <div className="clusterTitleContainer">
          <h2>Clusters</h2>
          <h3 className="clusterTitle" />
        </div>
        <div>
          <div className="clustercontent" id="clustercontent">
            <div>
              <form id="clusterform">
                <div className="divnew">
                  <label className="label">Region* &nbsp;</label>
                  
                
                  <br />
                  <select
                    name="region"
                    className="form-control"
                    onChange={(e) => {
                      selectcountry(e)
                      setRegion(e.target.value)
                    }}
                    value={region}
                  >
                    <option value="">Select Region</option>
                    <option value="EUROPE">EUROPE</option>
                    <option value="GREATER CHINA">GREATER CHINA</option>
                    <option value="GREATER INDIA">GREATER INDIA</option>
                    <option value="LATAM">LATAM</option>
                    <option value="MENAP">MENAP</option>
                    <option value="NORTH AMERICA">NORTH AMERICA</option>
                    <option value="SA & SSA">SA & SSA</option>
                    <option value="SEANAP">SEANAP</option>
                  </select>
                  <br />
                  {regionErr ? (
                    <span className="errormessage">Field is required</span>
                  ) : (
                    ''
                  )}
                  <br />
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <div className="div">
                  <label className="label">Country* &nbsp;</label>
                  <br />
                  <select
                    class="form-control select"
                    onChange={(e) => setRecord(e.target.value)}
                    id="country"
                    value={record}
                  >
                    <option value="">Select country</option>
                  </select>
                  <br />
                  {countrynmErr ? (
                    <span className="errormessage">Field is required</span>
                  ) : (
                    ''
                  )}
                  <br />
                 
                </div>
                </form>
               
                <div className="div">
                 
                  <button
                    type="button"
                    className="btn_1 btnsearch"
                    onClick={searchRecord}
                  >
                    Search
                  </button>
                  &nbsp; &nbsp;
                  <button className="btn_2 resetbtn" onClick={resetform}>
                    Reset
                  </button>
                  &nbsp; &nbsp;
                  <button className="btn_3 downloadbtn">
                    <CSVLink {...csvReport} style={{ color: '#fff' }}>
                      Download Template
                    </CSVLink>
                  </button>
                  {/* <CSVLink data={datanew}>Download me</CSVLink> */}
                  &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
            </div>
            <br />
            <div className="k-dropzone" style={{ marginTop: '43px' }}>
              <div
                role="button"
                className="k-button k-upload-button"
                aria-label="Select files..."
                tabIndex="0"
              >
                <input
                  autoComplete="off"
                  name="file"
                  type="file"
                  tabIndex="-1"
                />
                <span>Select files...</span>
              </div>
              <div className="k-dropzone-hint">Drop files here to upload</div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="container-fluid containerfluidcluster"
            id="containerfluidcluster"
          >
            <div className="col-lg-12 tablediv">
              <div>
                <div style={{ paddingTop: '11px' }}>
                  <span className="searchhead">Search Result</span>
                </div>
                <div style={{ marginTop: '-25px', textAlign: 'right' }}>
                  <span style={{ marginRight: '0.7rem', color: '#86898b' }}>
                    <button className="savebtn">
                      <i className="fa fa-check" aria-hidden="true"></i> Save
                    </button>
                  </span>
                  <i
                    className="fa fa-expand"
                    id="expandid"
                    onClick={expand}
                  ></i>
                </div>
              </div>

              <div className="col-lg-12 div1" style={{ overflowX: 'auto' }}>
                <table id="tableid" bordered="true">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" />
                      </th>
                      <th>Country ID</th>
                      <th>Cluster ID</th>
                      <th>Cluster Name</th>
                      <th>Target Recruitment Stores</th>
                      <th>Updated By</th>
                      <th>Updated On</th>
                    </tr>
                  </thead>

                  <tbody id="tabledata" bordered="true">
                    {search.length > 0 ? (
                      search
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage,
                        )
                        .map((item, i) => (
                          <tr key={i}>
                            <td>
                              <input
                                id={item.clusterId}
                                type="checkbox"
                                className="checkbox disable-team team_values"
                                onClick={(e) => {
                                  selectShortlistedApplicant(e, item.clusterId)
                                }}
                              />
                            </td>
                            {/* <td><input type="checkbox" id={i} onClick={() => checkedfunction(i)} /></td> */}
                            <td>
                              <p id={item.clusterId}>{item.Country}</p>
                            </td>
                            <td>{item.clusterId}</td>
                            <td>{item.ClusterName}</td>
                            <td>
                              <div
                                id={'store_recruitment_value_' + item.clusterId}
                              >
                                {item.StoreRecruitmentTarget}
                              </div>
                              <div
                                style={{ display: 'none' }}
                                id={
                                  'enter_store_recruitment_value_' +
                                  item.clusterId
                                }
                              >
                                <input type="text" className="form-control" />
                              </div>
                            </td>
                            <td>{item.RecruitmentTargetUpdatedBy}</td>
                            <td>{item.RecruitmentTargetUpdatedOn}</td>
                          </tr>
                        ))
                    ) : (
                      <div>
                        <p>No Data Found </p>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={search.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </div>
          <div>
            <p className="nielsen-footer">
              Copyright © 2021 Nielsen Consumer LLC. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
