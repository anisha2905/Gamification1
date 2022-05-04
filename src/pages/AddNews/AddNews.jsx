
import "./AddNews.css"
import laptop from '../../imgaes/laptop_icon.png';
import mobile from '../../imgaes/mobile_icon.png';
//import laptop from 'C:/Users/AnishaGanesan/gamification/src/imgaes/laptop_icon.png';

export default function AddNews() {
  return (
      <>
    <div>
    <div className="addTitleContainer">
        <h2 >Add News</h2>
        <h3 className="addTitle"/>
        </div>
        
    <div className="main">
    <form className="addnews">
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
                    <button id='resetbtn'>Reset</button>
                </div> 
                
            </div>
        </form>
    </div>
        
    </div>
    <footer><p className="nielsen-footer">Copyright © 2021 Nielsen Consumer LLC. All Rights Reserved.</p></footer>
    </>

  )
}
