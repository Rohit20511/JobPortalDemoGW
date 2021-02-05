import React from 'react';
import './Job.css';

function Job({job}) {
  return (
    <div className="job">
   <div className="job__logo"><img src={job.company_img_url} alt="job__logo"/></div>
   <div className="job__details">
     <p className="job__role">{job.Role}</p>
     <p className="job__company">{job.company_name}</p>
     <p className="job__location">{job.company_location}</p>
   </div>
    </div>
  )
}

export default Job
