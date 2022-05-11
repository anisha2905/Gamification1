import React,{useEffect,useState} from 'react'
import './Auditors.css'
import TablePagination from '@mui/material/TablePagination'

export default function Product() {
  const [region, setRegion]= useState([]);
  const [regionid, setRegionid]= useState();
  const [country, setCountry]= useState([]);
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState([]);
  const [frequency, setFrequency]= useState([]);
  const [collection, setCollection]= useState([]);

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

  function expand() {
    var auditorscontentid = document.getElementById('auditorcontent')
    var containerfluidauditorsid = document.getElementById(
      'containerfluidauditor',
    )
    var tableidnm = document.getElementById('tableid')

    if (auditorscontentid .style.display === 'none') {
      auditorscontentid .style.display = 'block'
      containerfluidauditorsid.style.marginTop = '156px'
      tableidnm.style.height = '219px'
    } else {
      auditorscontentid .style.display = 'none'
      containerfluidauditorsid.style.marginTop = '0px'
      tableidnm.style.height = '350px'
    }
  }
  
  

  useEffect( ()=>{
       const getRegion=async()=>{
           const res=await fetch("http://localhost:3000/Auditors");
           const getcon=await res.json();
           console.log(getcon);
           setRegion(await getcon);
       }
       getRegion();
    },[]);

    let regions = [...new Set(region.map(item=> item.Region))];
regions.sort();
console.log(region);

const handleregion=(e)=>{
    e.preventDefault();
    let countries=region.filter(country=>country.Region=== e.target.value);
    console.log(countries);
    countries=[...new Set(countries.map(item=>item.Country))];
    countries.sort();
    setCountry(countries);
   
    ///setUser(e.target.value);
    console.log(e.target.value);
    
  }

  useEffect( ()=>{
    const getFrequency=async()=>{
        const res=await fetch("http://localhost:3000/Auditors");
        const getfreq=await res.json();
        console.log(getfreq);
        setFrequency(await getfreq);
    }
    getFrequency();
 },[]);

 let frequencys = [...new Set(frequency.map(item=> item.Frequency))];
frequencys.sort();
console.log(frequency);

useEffect( ()=>{
  const getCollection=async()=>{
      const res=await fetch("http://localhost:3000/Auditors");
      const getcol=await res.json();
      console.log(getcol);
      setCollection(await getcol);
  }
  getCollection();
},[]);

let collections = [...new Set(collection.map(item=> item.Collection))];
collections.sort();
console.log(collection);

  function searchRecord() {
      fetch(`http://localhost:3000/Auditors?Country=${value}`, {
        method: "GET"

      }).then((result) => {
        result.json().then((resp) => {
          setSearch(resp)
          console.log(resp)

        })
      })
    
  }
  return (
    <div>
         <div className="auit-head">
      <div className="auditTitleContainer">
        <h2>Auditors</h2>
        <h3 className="auditTitle" />
      </div>
      </div>

      <form>
      <div className='auditorcontent' id="auditorcontent">
        <div className="content_1">
          <div className="div">
            <label className="label">Region* &nbsp;</label>
            <br />
            <select name="region" className="form-control" required onChange={(e)=>handleregion(e)}>
                   <option value=""disabled selected>--Select Region--</option>
                   {regions.map(items => (
        <option key={items} value={items}>{items}</option>
        ))}
            </select>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="div">
            <label className="label">Country* &nbsp;</label>
            <br />
            <select name="country" className="form-control" required onChange={(e) => setValue(e.target.value)} id="country" value={value} >
    <option value=""disabled selected>--Select Country--</option>
                   {country.map(items => (
        <option key={items} value={items}>{items}</option>
        ))}
            </select>
          </div>
          
          <div className="div">
            <label className="label">Year* &nbsp;</label>
            <br />
            <select name="year" className="form-control" required>
              <option value=""disabled selected>--Select Year</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </div>
          
          <div className="div">
            <label className="label">Frequency* &nbsp;</label>
            <br />
            <select name="frequency" className="form-control" id="frequency" required>
    <option value=""disabled selected>--Select Frequency--</option>
                   {frequencys.map(items => (
        <option key={items} value={items}>{items}</option>
        ))}
            </select>
          </div>
          
          <div className="div">
            <label className="label">Period* &nbsp;</label>
            <br/>
            <select name="period" className="form-control" required>
              <option value=""disabled selected>--Select Month--</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
              <option>January-March</option>
              <option>April-June</option>
              <option>July-September</option>
              <option>October-December</option>
            </select>
          </div>
          <div className="div">
            <label className="label">Collection Type *&nbsp;</label>
            <br />
            <select name="collection" className="form-control"  id="collection" required>
    <option value=""disabled selected>--Select Collection--</option>
                   {collections.map(items => (
        <option key={items} value={items}>{items}</option>
        ))}
            </select>
          </div>
        
          <div className="div">
            <label className="ab-c">Cluster Id&nbsp;</label>
            <br />
            <select name="cluster-id" className="form-control"></select>
          </div>
         
          <div className="div">
            <label className="ab-c">Cluster Name&nbsp;</label>
            <br />
            <textarea name="cluster-name" className="form-control"></textarea>
          </div>
          
          <div className="div">
            <label className="ab-c">QCTE ID&nbsp;</label>
            <br />
            <textarea name="qcte-id" className="form-control"></textarea>
          </div>
          
          <div className="div">
            <label className="ab-c">QCTE Name&nbsp;</label>
            <br />
            <textarea name="qcte-name" className="form-control"></textarea>
          </div>
          <div className="div">
            <label className="ab-c">Auditor Id&nbsp;</label>
            <br />
            <textarea name="auditor-id" className="form-control"></textarea>
          </div>
         
          <div className="div">
            <label className="ab-c">Auditor Name&nbsp;</label>
            <br />
            <textarea name="auditor-name" className="form-control"></textarea>
          </div>
         
          <div className="div">
            <br />
            <button className="btn_1 btnsearch" onClick={searchRecord}>SEARCH</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="btn_2 resetbtn" type='reset'>RESET</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="btn_3 downloadbtn">EXPORT</button>
           
          </div>
        </div>
        
        
        
        
      </div>
      </form>



      <div className="content_1" style={{width: "98%"}}>
        <div className="container-fluid containerfluidnew"  id="containerfluidauditor">
          <div className="col-lg-12 tablediv">
            <div>
              <div style={{ paddingTop: '11px' }}>
                <span className="searchhead">Search Result</span>
              </div>
              <div style={{ marginTop: '-25px', textAlign: 'right' }}>
                <span style={{ marginRight: '0.7rem', color: '#86898b' }}>
                  <i class="fa fa-undo" aria-hidden="true"></i> Reset Device
                </span>
                <span style={{ marginLeft: '0.7rem', color: '#86898b' }}>
                  <span>**</span>| Get Activation Code
                </span>

                <i className="fa fa-expand" onClick={expand}></i>
              </div>
            </div>

            <div className="col-lg-12 div1" style={{ overflowX: 'auto' }}>
              <table bordered="true" id="tableid">
                <thead>
                  <tr>
                    <th>Country(ID)</th>
                    <th>QCTE ID</th>
                    <th>QCTE Name</th>
                    <th>Cluster ID</th>
                    <th>Cluster Name</th>
                    <th>Auditor ID</th>
                    <th>Auditor Name</th>
                    <th>Profile Type</th>
                    <th>Status</th>
                    <th>Level</th>
                    <th>Total Points</th>
                    <th>Monthly Points</th>
                    <th>Country Level Ranking</th>
                    <th>Cluster Level Ranking</th>
                  </tr>
                </thead>
                <tbody>
                {search.length > 0 ? search.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      ).map((item) => (
                                <tr>
                                    <td>{item.CountryId}</td>
                                    <td>{item.qcte_id}</td>
                                    <td>{item.qcte}</td>
                                    <td>{item.clusterId}</td>
                                    <td>{item.ClusterName}</td>
                                    <td>{item.AuditorId}</td>
                                    <td>{item.AuditorName}</td>
                                    <td>{item.ProfileType}</td>
                                    <td>{item.ProfileStatus}</td>
                                    <td>{item.Level}</td>
                                    <td>{item.TotalPoints}</td>
                                    <td>{item.monthly_points}</td>
                                    <td>{item.CountryRanking}</td>
                                    <td>{item.ClusterRanking}</td>
              
                                </tr>
                                )) :  <div>
                                <p >No Data Found </p>
                              </div>}
                            
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
  
  )
}
