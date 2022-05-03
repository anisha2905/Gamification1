

import "./AddNews.css"
// import laptop from '../../imgaes/laptop_icon.png';
// import mobile from '../../images/mobile_icon.png';

export default function AddNews() {
  return (
    <div >
    <div className="addTitleContainer">
        <h2 >Add News</h2>
        <h3 className="addTitle"/>
        </div>
        <div>
    
        <form className="addnews">
            <input type='checkbox' id="chkbx" tabIndex={0}></input>
            <label className='chkbx-img' id="web-icon">
                {/* <img src={laptop} alt="laptop" id='laptop_icon'/> */}
            </label>
            <input type='checkbox' id="chkbx" tabIndex={0}></input>
            <label className='chkbx-img' id="mobile-icon">
                {/* <img src={mobile} alt="mobile" id='mobile_icon'/> */}
            </label>
            <div className='ad-in'>
                <span className='titles'>Title</span>
                <input type='text' id='title' placeholder='Enter Title' required/>
                <span className='titles'>Description</span>
                <input type='text' id='description' placeholder='Enter Description' required/>
                <span className='titles'>Activation Date</span>
                <input type='date' id='act-date'  required/>
                <span className='titles'>Expiration Date</span>
                <input type='date' id='exp-date'  required/>
                <div className='save'>
                    <button id='savebtn'>Save</button>
                </div> 
                <div className='reset'>
                    <button id='resetbtn'>Reset</button>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}
