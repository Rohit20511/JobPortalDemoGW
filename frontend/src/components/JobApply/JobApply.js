import './JobApply.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function JobApply() {
  let params = useParams();
  const [jobDetail, setJobDetail] = useState([]);
  const [isApplied, setApplied] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/job/${params.jobid}`)
      .then((response) => response.json())
      .then(data => {
        setJobDetail(data[0]);
      })
      .catch(e => { console.log(e) });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let requestBody = {
      name: e.target[0].value,
      email: e.target[1].value,
      mobile: e.target[2].value,
      current_company: e.target[3].value,
      current_ctc: e.target[4].value,
      expected_ctc: e.target[5].value
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    }
    fetch("http://127.0.0.1:3001/applicant", options)
      .then((response) => response.json())
      .then(data => {
        console.log(data);
      })
    setApplied(true);
  }
  return (
    <div className="jobApply">
      <Header />
      { isApplied ? <div className="applied"> <h2>Thanks for Applying . We will get back to you shortly . </h2></div> : <div className="jobApply__form">
        <div className="jobApply__details">
          <h3>{jobDetail.Role + " , " + jobDetail.company_name}</h3>
          <p>{jobDetail.company_location ? jobDetail.company_location : ""}</p>
          <p>{`JobId:${jobDetail.jobID}`}</p>
        </div>
        <form className="apply__form" onSubmit={handleSubmit}>
          <div className="form__input">
            <label>Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="form__input" >
            <label>Email</label>
            <input type="text" placeholder="Enter your active email id" />
          </div>
          <div className="form__input" >
            <label>Mobile</label>
            <input type="text" placeholder="Enter your active mobile no." />
          </div>
          <div className="form__input" >
            <label>Current Company</label>
            <input type="text" placeholder="Current Employer name" />
          </div>
          <div className="form__input" >
            <label>Current CTC</label>
            <input type="text" placeholder="Current CTC in lacs/annum" />
          </div>
          <div className="form__input">
            <label>Expected CTC</label>
            <input type="text" placeholder="Expected CTC in lacs/annum" />
          </div>
          <div className="form__submit"><button>Submit</button></div>
        </form>
      </div>
      }
      <Footer />
    </div>
  )
}

export default JobApply
