import React,{useEffect,useState} from 'react'
import './Auditors.css'

export default function Product() {
  const [region, setRegion]= useState([]);
  const [regionid, setRegionid]= useState();
  const [country, setCountry]= useState([]);
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState([]);
  const [frequency, setFrequency]= useState([]);

  
  
  

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

 let frequencies = [...new Set(frequency.map(item=> item.Frequency))];
frequencies.sort();
console.log(frequency);
  function searchRecord() {
      fetch(`http://localhost:3000/user?Countryname=${value}`, {
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
    
      <div className='auditorcontent'>
        <div className="content_1">
          <div className="div">
            <label className="label">Region* &nbsp;</label>
            <br />
            <select name="region" className="form-control" onChange={(e)=>handleregion(e)}>
                   <option>--Select Region--</option>
                   {regions.map(items => (
        <option key={items} value={items}>{items}</option>
        ))}
            </select>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="div">
            <label className="label">Country* &nbsp;</label>
            <br />
            <select name="country" className="form-control" onChange={(e) => setValue(e.target.value)} id="country" value={value} >
    <option>--Select Country--</option>
                   {country.map(items => (
        <option key={items} value={items}>{items}</option>
        ))}
            </select>
          </div>
          
          <div className="div">
            <label className="label">Year* &nbsp;</label>
            <br />
            <select name="year" className="form-control">
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </div>
          
          <div className="div">
            <label className="label">Frequency* &nbsp;</label>
            <br />
            <select name="country" className="form-control" id="country" value={value} >
    <option>--Select Frequency--</option>
                   {frequency.map(items => (
        <option key={items} value={items}>{items}</option>
        ))}
            </select>
          </div>
          
          <div className="div">
            <label className="label">Period* &nbsp;</label>
            <br/>
            <select name="period" className="form-control">
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
            <select name="country" className="form-control"  id="country" value={value} >
    <option>--Select Country--</option>
                   {country.map(items => (
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
            <button className="btn_1 btnsearch">SEARCH</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="btn_2 resetbtn">RESET</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="btn_3 downloadbtn">EXPORT</button>
           
          </div>
        </div>
        
        
        
        
      </div>



      <div className="content_1" style={{width: "98%"}}>
        <div className="container-fluid containerfluidnew">
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

                <i className="fa fa-expand"></i>
              </div>
            </div>

            <div className="col-lg-12 div1" style={{ overflowX: 'auto' }}>
              <table bordered>
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
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                  <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                  <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tablefooter">
              <span
                className="fa fa-step-backward linkicon"
                aria-hidden="true"
              ></span>
              <span
                className="fa fa-caret-left linkicon"
                aria-hidden="true"
              ></span>
              <span
                className="fa fa-caret-right linkicon"
                aria-hidden="true"
              ></span>
              <span
                className="fa fa-step-forward linkicon"
                aria-hidden="true"
              ></span>
              <div style={{ float: 'right' }}>0 - 0 of 0 items</div>
            </div>
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
