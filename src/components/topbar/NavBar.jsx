
import { Link ,Routes,Route} from 'react-router-dom'
import {Announcement,PermDataSetting,GroupAddOutlined,PermIdentity, DehazeOutlined, AccountTreeOutlined,LibraryAddCheckOutlined,MoreVert} from '@material-ui/icons'

import React,{useState} from 'react'
import "./NavBar.css"
import ReviewIdeas1 from '../../pages/ReviewIdeas/ReviewIdeas1';
import Clusters from '../../pages/Clusters/Clusters';
import Configuration1 from '../../pages/Configuration/Configuration1';
import Auditors from '../../pages/Auditors/Auditors';
import AddNews from '../../pages/AddNews/AddNews';
import { Settings } from '@material-ui/icons';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';





function Sidebar3(props) {

    const[show,setShow]=useState(false);
    //logout
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    //logout
    
    
  return (
      <main className={show ?'space-toggle' : null}>
          <header className='header'>
          <div className='header-toggle' onClick={() => setShow(!show)}>
                <DehazeOutlined className='topbarIcon'/>
                <AccountTreeOutlined className='topbarlogo'/>
              <span className="logo">Gamification</span>
              </div>
              <div id="marquee">
                    <div id="mar-content">
                      <p>Sample Text</p>
                    </div>  
                </div>    
            <div className="topRight">
                <div className="topbarIconContainer">
                <AccountTreeOutlined className='topbarlogo'/> 
                    <span className="logo1">System Admin</span> 
                    
                 <MoreVert id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}/>
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
                
                </div>
                
            </div> 
          </header>
          <aside  className={`sidebar ${show ? 'show':null}`}>
              <nav className='nav'>
                  <div>
                  
<div className='nav-list '>
<Link to={"/reviewideas"} className="nav-link ">
                    
                    <PermIdentity className='nav-link-icon'/>
                    <span className='nav-link-name'>Review Ideas</span>
             
                </Link>
                <Link to={"/auditors"} className="nav-link ">
                    
                    <LibraryAddCheckOutlined  className='nav-link-icon'/>
                    <span className='nav-link-name'>Auditors</span>
             
                </Link>
                <Link to={"/clusters"} className="nav-link">
                    
                    <GroupAddOutlined className='nav-link-icon'/>
                    <span className='nav-link-name'>Clusters</span>
             
                </Link>
                <Link to={"/configuration"} className="nav-link">
                    
                    <PermDataSetting className='nav-link-icon'/>
                    <span className='nav-link-name'>Configuration</span>
             
                </Link>
                <Link to={"/addnews"} className="nav-link">
                    
                    <Announcement className='nav-link-icon'/>
                    <span className='nav-link-name'>Add Users</span>
             
                </Link>

</div>
                  </div>
              </nav>
          </aside>
          <div>
          
    <Routes >
    <Route path='/' element={<ReviewIdeas1/>} />
            <Route path='/reviewideas' element={<ReviewIdeas1/>} />
            <Route path='/auditors' element={<Auditors/>} />
            <Route path='/clusters' element={<Clusters/>} />
            <Route path='/configuration' element={<Configuration1/>} />
            <Route path='/addnews' element={<AddNews/>} />

        </Routes>
      </div>         

      </main>
    
  )
}

export default Sidebar3