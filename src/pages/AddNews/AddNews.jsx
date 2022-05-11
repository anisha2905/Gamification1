import React,{useState} from "react";
// import React, {useContext} from 'react';
// import { TickerContext } from "../../contexts/tickerContext";
import "./AddNews.css"
// import { formatDate } from "@telerik/kendo-intl";
import laptop from '../../imgaes/laptop_icon.png';
import mobile from '../../imgaes/mobile_icon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Sidebar3 from '../../components/topbar/NavBar'

export default function AddNews() {
    const [details, setDetails] = useState({title:"", description:""});
    const [date, setDate] = useState({actDate:"", expDate:""});
    const [msg, setMsg] = useState(false);
    
    let newDate = new Date().toLocaleDateString();
    // let msg = "success";
    // let newDate1 ;
    // const [ctime,setCtime] = useState(newTime);
    const handleChange = (e) =>{
        setDetails({...details,[e.target.name]: e.target.value})
        setDate({...date,[e.target.name]: e.target.value})
    }

    const resetbtn =()=>{
        setDetails([...details, {title:"",description:""}])
        setDate([...date, {actDate:"", expDate:""}])
    }

    const savebtn=(e)=>{
        submitHandler(e);
        notify();

    }

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("Title", details.title);
                console.log("Description", details.description);
                console.log("Activation_Date", date.actDate);
                console.log("Expiration_Date", date.expDate);
                console.log(newDate);
                // newDate: formatDate(new Date(), 'yyyy-MM-dd')
                // console.log(newDate1);
            }
    const notify = () =>{
        if((date.actDate)>(date.expDate))
                {return (toast.error('Act-Date > Exp-Date!', 
                    {   position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    }))
                } 
                else if((date.actDate)=(date.expDate))
                return (toast.success('Ticker message updated', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    }))
                    setMsg(true);
                
    };
  return (
      <>
    <div>
    <div className="addTitleContainer">
        <h2 >Add News</h2>
        <h3 className="addTitle"/>
    </div>
        
    <div className="main">
    
    <form className="addnews"  autoComplete='off'>
        <div className="icons">
        <input type='checkbox' id="chkbx" tabIndex={0}></input>
            <label className='chkbx-img' id="web-icon">
                {<img src={laptop} alt="laptop" id='laptop_icon'/> }
            </label>
            <input type='checkbox' id="chkbx" tabIndex={0}></input>
            <label className='chkbx-img' id="mobile-icon">
                {<img src={mobile} alt="mobile" id='mobile_icon'/> }
            </label>
        </div>
       
            
            
            <div className='ad-in'>
                <span className='titles'>Title*</span>
                <input type='text' id='title' name="title" placeholder='Enter Title' required onChange={handleChange}/>
                <span className='titles'>Description*</span>
                <input type='text' id='description' name="description" placeholder='Enter Description' required onChange={handleChange}/>
                <span className='titles'>Activation Date*</span>
                <input type='date' id='act-date' name="actDate" required onChange={handleChange}/>
                <span className='titles'>Expiration Date*</span>
                <input type='date' id='exp-date' name="expDate" required onChange={handleChange}/>
                {/* {(date.actDate.length) > 0 && (date.expDate.length) >0 && ({error}) } */}
                <div className='save'>
                    <button id='savebtn' onClick={savebtn}>Save</button>
                    <button id='resetbtn' onClick={resetbtn}>Reset</button>
                    <ToastContainer />
                </div> 
                {/* <div id="marquee">
                    <div id="mar-content">
                      {details.title}
                      {details.description}
                      </div>
                </div> */}
            </div>
            {/* {msg.length > 0 && <div>{<tickerMsg title={details.title} description={details.description}/>}</div> } */}
        </form>
    </div>
    </div>
    <footer><p className="nielsen-footer">Copyright © 2021 Nielsen Consumer LLC. All Rights Reserved.</p></footer>
    </>

  )
}
