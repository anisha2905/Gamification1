
import { Link ,Routes,Route} from 'react-router-dom'
import { AttachMoney, BarChart, PermIdentity, Storefront, DehazeOutlined, AccountTreeOutlined} from '@material-ui/icons'

import React,{useState} from 'react'
import "./topbar1.css"
import ReviewUsers from '../../pages/ReviewUsers/ReviewUsers';
import Clusters from '../../pages/Clusters/Clusters';
import Configuration from '../../pages/Configuration/Configuration';
import Auditors from '../../pages/Auditors/Auditors';
import AddNews from '../../pages/AddNews/AddNews';
import { Settings } from '@material-ui/icons'



function Sidebar3() {

    const[show,setShow]=useState(false);
    
  return (
      <main className={show ? 'space-toggle' : null}>
          <header className='header'>
          <div className='header-toggle' onClick={() => setShow(!show)}>
                <DehazeOutlined className='topbarIcon'/>
                <AccountTreeOutlined className='topbarlogo'/>
              <span className="logo ">Gamification</span>
               
                </div>
            
          
            
           
            <div className="topRight">
                <div className="topbarIconContainer">
                    <Settings/>
                    
                </div>
                
            </div> 
          </header>
          <aside  className={`sidebar ${show ? 'show':null}`}>
              <nav className='nav'>
                  <div>
                  
<div className='nav-list '>
<Link to={"/reviewusers"} className="nav-link ">
                    
                    <PermIdentity className='nav-link-icon'/>
                    <span className='nav-link-name'>Review Ideas</span>
             
                </Link>
                <Link to={"/auditors"} className="nav-link ">
                    
                    <AttachMoney  className='nav-link-icon'/>
                    <span className='nav-link-name'>Auditors</span>
             
                </Link>
                <Link to={"/clusters"} className="nav-link">
                    
                    <Storefront className='nav-link-icon'/>
                    <span className='nav-link-name'>Clusters</span>
             
                </Link>
                <Link to={"/configuration"} className="nav-link">
                    
                    <BarChart className='nav-link-icon'/>
                    <span className='nav-link-name'>Configuration</span>
             
                </Link>
                <Link to={"/addnews"} className="nav-link">
                    
                    <BarChart className='nav-link-icon'/>
                    <span className='nav-link-name'>Add Users</span>
             
                </Link>

</div>
                  </div>
              </nav>
          </aside>
          <div>
          
    <Routes >
    <Route path='/' element={<ReviewUsers/>} />
            <Route path='/reviewusers' element={<ReviewUsers/>} />
            <Route path='/auditors' element={<Auditors/>} />
            <Route path='/clusters' element={<Clusters/>} />
            <Route path='/configuration' element={<Configuration/>} />
            <Route path='/addnews' element={<AddNews/>} />

        </Routes>
      </div>
          
         

      </main>
    
  )
}

export default Sidebar3