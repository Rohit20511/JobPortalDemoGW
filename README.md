You can access the hosted solution using the below link :
https://jobportal-855e6.web.app/

Contents: 
===================================================================================
1.	Job Portal 
        1.1	A backend (Nodejs) 
        1.2	A UI (ReactJS)
        1.3	A database (MongoDB)
2.	API Documentation 
3.	Readme to setup local environment 
4.	Hosted solution
5.	Screennshots
6.	Code

-----------------------------------------------------------------------------------
1.	JobPortal : 
-----------------------------------------------------------------------------------

We have defined the following set of actions that we can achieve using this Web Application.
-------------------
a.	Webpage where user can scroll through a list of job openings in jobs DB. We can add jobs by making an API call.
-------------------
b.	Once user clicks on any job details tile , user gets Job Description from a backend API 
-------------------
c.	After click on apply button, we are storing candidate details in MongoDB keeping JobID as reference. 

-----------------------------------------------------------------------------------
2.	API Documentation : 
-----------------------------------------------------------------------------------
Job Portal provides the following endpoints and methods:
1.	/job/details (POST) : This endpoint allows you to create Jobs which admin wants to post on the portal.
2.	/job/details (GET)  : This endpoint allows user to fetch all the jobs available in the system
3.	/job/:jobId   (GET) : This endpoint allows you to fetch a particular Job details by it’s jobID.
4.	/applicant    (POST) : This endpoint allows you to store applicant details inside DB post click on apply button.

-----------------------------------------------------------------------------------
3.	Readme to setup local environment
-----------------------------------------------------------------------------------
Please follow below steps to setup local environment : 
-------------------
a.	Unzip backend and frontend 
-------------------
b.	Start Backend 
-------------------
    Go to backend folder and run npm i
    Post successful installation, Start the server : npm start 
-------------------
c.	Start Frontend
-------------------
    Go to frontend folder and run npm i
    Post successful installation , run  npm start 
    
-----------------------------------------------------------------------------------
4.	Hosted solution
-----------------------------------------------------------------------------------
We have used below solutions to host our web application:
1.	Backend : Heroku 
2.	Frontend : Firebase 
-------------------
You can find hosted Application using the below URL : 
https://jobportal-855e6.web.app/



