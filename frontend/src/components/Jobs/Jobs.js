import React, { useEffect ,useState} from 'react';
import Job from '../Job/Job';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Jobs.css';
import {Link} from 'react-router-dom';
function Jobs() {
  const [jobDetails, setJobDetails] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3001/job/details")
    .then((response)=>response.json())
    .then(data=>{
      setJobDetails(data);
    })
    .catch(e=>{console.log(e)});
  }, []);
  return (
    <div className="jobs">
      <Header />
      <div className="jobList">
       {
         jobDetails.length > 0 && jobDetails.map((job)=>(
         <Link to={`/jobs/${job.jobID}`} ><Job job={job}/></Link>
         ))
       }
      </div>
      <Footer />
    </div>
  )
}

export default Jobs
