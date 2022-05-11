import React, { useEffect, useState } from 'react'
import './Configuration.css'
import { Checkbox } from '@material-ui/core'
import TablePagination from '@mui/material/TablePagination'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default function Configuration1() {
  const [region, setRegion] = useState([])
  const [regionid, setRegionid] = useState('')
  const [country, setCountry] = useState([])
  const [value, setValue] = useState('')
  const [search, setSearch] = useState([])
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

  function resetRecord() {
    document.getElementById('configform').reset()
  }

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

  return (
    <>
      <div>
        <div className="clusterTitleContainer">
          <h2 className="configTitle">Configuration</h2>
        </div>
        <div>
          <div className=" configurationcontent" id="configurationcontent">
            <div>
              <form id="configform">
                <div className="divnew">
                  <label className="label">Region* &nbsp;</label>
                  <br />

                  <select
                  name="region"
                 value={regionid}
                    className="form-control"
                    onChange={(e) => {handleregion(e); setRegionid(e.target.value)}}
                  >
                    <option>--Select Region--</option>
                    {regions.map((items) => (
                      <option key={items} value={items}>
                        {items}
                      </option>
                    ))}
                  </select>
                  <p>
                    {regionErr ? (
                      <span className="errormessage">Field is required</span>
                    ) : (
                      ''
                    )}
                  </p>
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <div className="div">
                  <label className="label">Country* &nbsp;</label>
                  <br />
                  <select
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
                <br />
                <div className="div">
                  <button type="button"    className="btn_1 btnsearch" onClick={searchRecord}>
                    Search
                  </button>
                  &nbsp; &nbsp;
                  <button className="btn_2 resetbtn" onClick={resetRecord}>
                    Reset
                  </button>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="container-fluid containerfluidconfiguration"
          id="containerfluidconfiguration"
        >
          <div className="col-lg-12 tablediv">
            <div>
              <div style={{ paddingTop: '11px' }}>
                <span className="searchhead">Search Result</span>
              </div>
              <div style={{ marginTop: '-25px', textAlign: 'right' }}>
                <i className="fa fa-expand" id="expandid" onClick={expand}></i>
              </div>
            </div>

            <div className="col-lg-12 div1" style={{ overflowX: 'auto' }}>
              <table id="tableid" bordered="true">
                <thead>
                  <tr>
                    <th>Country(ID)</th>
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

                <tbody id="tabledata" bordered="true">
                  {search.length > 0 ? (
                    search
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
                      .map((item, i) => (
                        <tr key={i}>
                          <td>{item.Country}</td>
                          <td>{item.ProcessId}</td>
                          <td>{item.ProcessName}</td>
                          <td>
                            <FormControlLabel
                              disabled
                              control={<Checkbox checked name="checkedE" />}
                              id={item.Enable}
                            />
                          </td>
                          <td>
                            <FormControlLabel
                              disabled
                              control={<Checkbox checked name="checkedE" />}
                              id={item.FTE}
                            />
                          </td>
                          <td>
                            <FormControlLabel
                              disabled
                              control={<Checkbox checked name="checkedE" />}
                              id={item.Freelancer}
                            />
                          </td>
                          <td>
                            <Checkbox
                              id={item.RA}
                              value={false}
                              disabled
                            ></Checkbox>
                          </td>
                          <td>
                            <FormControlLabel
                              disabled
                              control={<Checkbox checked name="checkedE" />}
                              id={item.RES}
                            />
                          </td>
                          <td>
                            <Checkbox id={item.SFA}></Checkbox>
                          </td>
                          <td>
                            <FormControlLabel
                              disabled
                              control={<Checkbox checked name="checkedE" />}
                              id={item.SFA}
                            />
                          </td>
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
    </>
  )
}
