
import React,{useEffect,useState} from 'react'
import "./Configuration.css"
import axios from 'axios';
export default function Configuration() {
  const [region, setRegion]= useState([]);
  const [regionid, setRegionid]= useState();
  const [country, setCountry]= useState([]);
  const [value, setValue] = useState([]);
  
  
  

  useEffect( ()=>{
       const getRegion=async()=>{
           const res=await fetch("http://localhost:3000/user");
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
    countries=[...new Set(countries.map(item=>item.Countryname))];
    countries.sort();
    setCountry(countries);
   
    ///setUser(e.target.value);
    console.log(e.target.value);
    
  }
  


   /* const handleregion=(event)=>{
        event.preventDefault();
        const getregionid= event.target.value;
        setRegionid(getregionid);
        
      }
      useEffect( ()=>{
        const getCountry= async ()=>{
          const rescountry= await fetch(`http://localhost:3000/user/${regionid}`);
          const getcoun= rescountry.json();
          setCountry(await getcoun);
          console.log("error3");
        }
        getCountry();
      },[regionid]); 
      
  

 /* const handlecountry=(e)=>{
    e.preventDefault();
    let country=data.filter(country=>country.region === e.target.value);
    
    country=[...new Set(country.map(item=>item.subcountry))];
    country.sort();
    console.log(e.target.value);
  } */

  return (
    <>
    <div >
    <div className="clusterTitleContainer">
        <h2 className="configTitle">Configuration</h2>
        </div>
        <div>
        <div className=" configurationcontent">
          <div>
    <div className="divnew">
  
          <label className="label">Region* &nbsp;</label><br/>
   
    <select name="region" className="form-control" onChange={(e)=>handleregion(e)}>
                   <option>--Select Region--</option>
                   {regions.map(items => (
        <option key={items} value={items}>{items}</option>
        ))}
                                
  </select>
   </div> 
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div className="div">
    <label className="label">Country* &nbsp;</label><br/>
    <select name="country" className="form-control" onChange={(e)=>setValue(e.target.value)}>
    <option>--Select Country--</option>
                   {country.map(items => (
        <option key={items} value={items}>{items}</option>
        ))}
    </select>
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div className="div"><br/>
    <button className="btn_1 btnsearch">Search</button>
    &nbsp; &nbsp; 
    <button className="btn_2 resetbtn" >Reset</button>
    &nbsp; &nbsp;

    &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
    </div>
   
    </div>
        </div>
        <div>
        <div  className='container-fluid containerfluidconfiguration'>
                
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

                    
                   
                <table  bordered  >
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
            <div><p className="nielsen-footer">Copyright © 2021 Nielsen Consumer LLC. All Rights Reserved.</p></div>
               
        </div>
</div>
</>
  )
}
