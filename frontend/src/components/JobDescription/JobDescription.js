import React, { useEffect, useState } from 'react';
import './JobDescription.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useParams } from "react-router-dom";


function JobDescription() {
  let params = useParams();
  const [jobDetail, setJobDetail] = useState([]);
  console.log(params)
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/job/${params.jobid}`)
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setJobDetail(data[0]);
      })
      .catch(e => { console.log(e) });
  }, []);

  const handleApply = () => {

  }
  return (
    <div className="jobDescription">
      <Header />
      <div className="jobDescription__main">
        <div className="jobInfo">
          <div className="jobInfo__logo"><img src={jobDetail.company_img_url} alt="job__logo" /></div>
          <div className="jobInfo__details">
            <p className="jobInfo__role">{jobDetail.Role}</p>
            <p className="jobInfo__company">{jobDetail.company_name}</p>
            <p className="jobInfo__location">{jobDetail.company_location}</p>
          </div>
          <Link to={`/apply/${jobDetail.jobID}`} className="applyButton"><button onClick={handleApply}>Apply</button></Link>
        </div>
        <div className="description">
          <h3>Job Description</h3>
          <p>{jobDetail.Job_Description}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default JobDescription
