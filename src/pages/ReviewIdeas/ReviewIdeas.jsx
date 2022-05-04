import React from 'react'
import "./ReviewIdeas.css"
import Footer from '../../components/Footer/Footer'
import './ReviewIdeas.css'

export default function ReviewIdeas() {
  return (
    <div>
      <div className="reviewTitleContainer">
        <h2>Review Ideas</h2>
        <h3 className="reviewTitle" />
      </div>
      <div >
      <div>
        <div className="content_1">
          <div className="div">
            <label className="label">Region* &nbsp;</label>
            <br />
            <select name="region" className="form-control">
              <option>EUROPE</option>
              <option>GREATER CHINA</option>
              <option>GREATER INDIA</option>
              <option>LATAM</option>
              <option>MENAP</option>
              <option>NORTH AMERICA</option>
              <option>SA & SSA</option>
              <option>SEANAP</option>
            </select>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="div">
            <label className="label">Country* &nbsp;</label>
            <br />
            <select name="country" className="form-control">
              <option>INDIA</option>
            </select>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="div">
            <label className="label">Collection Type *&nbsp;</label>
            <br />
            <select name="period" className="form-control">
              <option>RA</option>
              <option>RES</option>
            </select>
          </div>
          
          <div className="div">
            <label className="ab-c">Category&nbsp;</label>
            <br />
            <select name="category" className="form-control"></select>
          </div>
          
          <div className="div">
         
            <label className="ab-c">Cluster Id&nbsp;<br/></label>
            <select name="cluster-id" className="form-control"></select>
          </div>
          <div className="content_1">
          <div className="div">
            <label className="ab-c">Cluster Name&nbsp;</label>
            <br />
            <textarea name="cluster-name" className="form-control"></textarea>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <div className="div">
            <label className="ab-c">QCTE ID&nbsp;</label>
            <br />
            <textarea name="qcte-id" className="form-control"></textarea>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="div">
            <label className="ab-c">QCTE Name&nbsp;</label>
            <br />
            <textarea name="qcte-name" className="form-control"></textarea>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="div">
            <label className="ab-c">Auditor Id&nbsp;</label>
            <br />
            <textarea name="auditor-id" className="form-control"></textarea>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="div">
            
            <button className="btn_1 btnsearch">SEARCH</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="btn_2 resetbtn">RESET</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="btn_3 downloadbtn">EXPORT</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            
          </div>
        </div>
        </div>
        
         <br/>
        <br/>
        <br/>
      </div>
      <br/>
      <br/>

<br/>
      <br/>
      </div>
      
      

      <div>
        <div>
          <div className="container-fluid containerfluid">
            <div className="col-lg-12 tablediv">
              <div>
                <div style={{ paddingTop: '11px' }}>
                  <span className="searchhead">Search Result</span>
                </div>
                <div style={{ marginTop: '-28px', textAlign: 'right' }}>
                  <span style={{ marginRight: '0.7rem' }}>Filters</span>
                  <span>
                    <select className="selectoption">
                      <option>Approved</option>
                      <option>Rejected</option>
                      <option>Pending</option>
                      <option>Feedback</option>
                      <option>All</option>
                    </select>
                  </span>
                  <span style={{ marginRight: '0.7rem', marginLeft: '0.7rem' }}>
                    Sort
                  </span>
                  <span>
                    <select className="selectoption">
                      <option>Category</option>
                      <option>Date</option>
                    </select>
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
                      <th>Idea ID</th>
                      <th>Idea Name</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th>Status</th>{' '}
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
                      <td>Table cell</td>
                      <td>Table cell</td>
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
        </div>
      </div>

      <Footer />
    </div>
  )
}
