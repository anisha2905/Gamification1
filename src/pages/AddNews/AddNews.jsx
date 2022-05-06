import React,{useState} from "react";
import "./AddNews.css"
import laptop from '../../imgaes/laptop_icon.png';
import mobile from '../../imgaes/mobile_icon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar3 from '../../components/topbar/NavBar'

export default function AddNews() {
    const [details, setDetails] = useState({title:"", description:""});
    const [date, setDate] = useState({actDate:"", expDate:""});
    
    const handleChange = (e) =>{
        setDetails({...details,[e.target.name]: e.target.value})
        setDate({...date,[e.target.name]: e.target.value})
    }
     
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("Title", details.title);
                console.log("Description", details.description);
                console.log("Activation_Date", date.actDate);
                console.log("Expiration_Date", date.expDate);
        if((details.actDate)>(details.expDate))
            {return (toast.error('Act-Date > Exp-Date!', 
                {   position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                }))
            } else if((details.actDate)=(details.expDate))
            {return (toast.success('Tinker message updated', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
                (<Sidebar3 details={details}/>))
            }

    };
  return (
      <>
    <div>
    <div className="addTitleContainer">
        <h2 >Add News</h2>
        <h3 className="addTitle"/>
    </div>
        
    <div className="main">
    
    <form className="addnews" onSubmit={submitHandler} autoComplete='off'>
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
                <div className='save'>
                    <button id='savebtn'>Save</button>
                    <button id='resetbtn'>Reset</button>
                    <ToastContainer />
                </div> 
                <div id="marquee">
                    <div id="mar-content">
                      {details.title}
                      {details.description}
                      </div>
                </div>
            </div>
        </form>
    </div>
    </div>
    <footer><p className="nielsen-footer">Copyright © 2021 Nielsen Consumer LLC. All Rights Reserved.</p></footer>
    </>

  )
}
