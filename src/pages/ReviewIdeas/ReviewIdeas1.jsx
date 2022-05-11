import React, { useEffect, useState } from 'react'
import './ReviewIdeas.css'
import TablePagination from '@mui/material/TablePagination'

export default function ReviewIdeas1() {
  const [region, setRegion] = useState([])
  const [country, setCountry] = useState([])
  const [value, setValue] = useState([])
  const [search, setSearch] = useState([])
  const [regionid, setRegionid] = useState('')
  const [regionErr, setregionErr] = useState(false)
  const [countrynmErr, setcountrynmErr] = useState(false)

  // Table Pagination
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value,5))
    setPage(0)
  }

  //Table Pagination

  function expand() {
    var configurationcontentid = document.getElementById('configurationcontent')
    var containerfluidconfigurationid = document.getElementById(
      'containerfluidconfiguration',
    )
    var tableidnm = document.getElementById('tableid')

    if (configurationcontentid.style.display === 'none') {
      configurationcontentid.style.display = 'block'
      containerfluidconfigurationid.style.marginTop = '156px'
      tableidnm.style.height = '219px'
    } else {
      configurationcontentid.style.display = 'none'
      containerfluidconfigurationid.style.marginTop = '0px'
      tableidnm.style.height = '350px'
    }
  }

  useEffect(() => {
    const getRegion = async () => {
      const res = await fetch('http://localhost:3000/user')
      const getcon = await res.json()
      console.log(getcon)
      setRegion(await getcon)
    }
    getRegion()
  }, [])

  let regions = [...new Set(region.map((item) => item.Region))]
  regions.sort()
  console.log(region)

  const handleregion = (e) => {
    e.preventDefault()
    let countries = region.filter(
      (country) => country.Region === e.target.value,
    )
    console.log(countries)
    countries = [...new Set(countries.map((item) => item.Countryname))]
    countries.sort()
    setCountry(countries)

    ///setUser(e.target.value);
    console.log(e.target.value)
  }
  function searchRecord() {
    if (
      regionid === 'null' ||
      regionid === '' ||
      value === 'null' ||
      value === ''
    ) {
      setcountrynmErr(true)
      setregionErr(true)
    } else {
      setregionErr(false)
      setcountrynmErr(false)
    }
    if (regionid === 'null' || regionid === '') {
      setregionErr(true)
    } else {
      setregionErr(false)
    }
    if (value === 'null' || value === '') {
      setcountrynmErr(true)
    } else {
      setcountrynmErr(false)
    }
    if (
      regionid === '' ||
      regionid === null ||
      typeof regionid === 'undefined' ||
      value === '' ||
      value === null ||
      typeof value === 'undefined'
    ) {
    } else {
      fetch(`http://localhost:3000/user?Countryname=${value}`, {
        method: 'GET',
      }).then((result) => {
        result.json().then((resp) => {
          setSearch(resp)
          console.log(resp)
        })
      })
    }
  }
  return (
    <>
      <div>
        <div className="clusterTitleContainer">
          <h2 className="configTitle">Review Ideas</h2>
        </div>
        <div>
          <div className=" configurationcontent" id="configurationcontent">
            <div>
              <div
                className=""
                style={{
                  marginBottom: '0px',
                  marginTop: '10px',
                  float: 'left',
                  marginLeft: '10px',
                }}
              >
                <label className="label">Region* &nbsp;</label>
                <br />

                <select
                  name="region"
                  className="form-control"
                  onChange={(e) => {
                    handleregion(e)
                    setRegionid(e.target.value)
                  }}
                >
                  <option>--Select Region--</option>
                  {regions.map((items) => (
                    <option key={items} value={items}>
                      {items}
                    </option>
                  ))}
                </select>
                {regionErr ? (
                  <span className="errormessage">Field is required</span>
                ) : (
                  ''
                )}
              </div>
              
              <div className="div">
                <label className="label">Country* &nbsp;</label>
                <br />
                <select
                  name="country"
                  className="form-control"
                  onChange={(e) => setValue(e.target.value)}
                  id="country"
                  value={value}
                >
                  <option>--Select Country--</option>
                  {country.map((items) => (
                    <option key={items} value={items}>
                      {items}
                    </option>
                  ))}
                </select>
                <p>
                  {countrynmErr ? (
                    <span className="errormessage">Field is required</span>
                  ) : (
                    ''
                  )}
                  <br />
                </p>
              </div>
             
              <div className="div">
                <label className="label">Collection Type *&nbsp;</label>
                <br />
                <select name="period" className="form-control">
                  <option>RA</option>
                  <option>RES</option>
                </select>
              </div>
              <div className="div">
                <label>Category&nbsp;</label>
                <br />
                <select name="category" className="form-control"></select>
              </div>
              <div className="div" >
                <label>
                  Cluster Id&nbsp;
                  <br />
                </label>
                <select name="cluster-id" className="form-control"></select>
              </div>
              <div  >
                <label className="ab-c">Cluster Name&nbsp;</label>
                <br />
                <textarea
                  name="cluster-name"
                  className="form-control"
                ></textarea>
              </div>
              
              <div className="div">
                <label className="ab-c">QCTE ID&nbsp;</label>
                <br />
                <textarea name="qcte-id" className="form-control"></textarea>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="div">
                <label className="ab-c">QCTE Name&nbsp;</label>
                <br />
                <textarea name="qcte-name" className="form-control"></textarea>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="div">
                <label className="ab-c">Auditor Id&nbsp;</label>
                <br />
                <textarea name="auditor-id" className="form-control"></textarea>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="div">
                <br />
                <button className="btn_1 btnsearch" onClick={searchRecord}>
                  Search
                </button>
                &nbsp; &nbsp;
                <button className="btn_2 resetbtn">Reset</button>
                &nbsp; &nbsp;
                <button className="btn_3 downloadbtn">EXPORT</button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="container-fluid containerfluidconfiguration"
            id="configurationfluidcontent"
          >
            <div className="col-lg-12 tablediv">
              <div>
                <div style={{ paddingTop: '11px' }}>
                  <span className="searchhead">Search Result</span>
                </div>
                <div style={{ marginTop: '-25px', textAlign: 'right' }}>
                  <i
                    className="fa fa-expand"
                    id="expandid"
                    onClick={expand}
                  ></i>
                </div>
              </div>

              <div className="col-lg-12 div1" style={{ overflowX: 'auto' }}>
                <table bordered="true">
                  <thead>
                    <tr>
                      <th>Country(ID)</th>
                      <th>QCTE ID</th>
                      <th>QCTE Name</th>
                      <th>Cluster ID</th>
                      <th>Cluster Name</th>
                      <th>Auditor ID</th>
                      <th>Auditor Name</th>
                      <th>Idea ID</th>
                      <th>Idea Name</th>
                      <th>Category</th>
                    </tr>
                  </thead>

                  <tbody>
                    {search.length > 0 ? (
                      search.map((item) => (
                        <tr>
                          <td>{item.Country}</td>
                          <td>{item.QcteId}</td>
                          <td>{item.QcteName}</td>
                          <td>{item.ClusterId}</td>
                          <td>{item.ClusterName}</td>
                          <td>{item.AuditorId}</td>
                          <td>{item.AuditorName}</td>
                          <td>{item.IdeaId}</td>
                          <td>{item.IdeaName}</td>
                          <td>{item.Category}</td>
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
