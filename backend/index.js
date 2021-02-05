const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jobTile = require("./job");
const applicantDetail = require('./applicantDetails');
const cors = require('cors');
const connection_url = 'mongodb+srv://admin:W6lSJWRpJ0IfNzrt@cluster0.xwkes.mongodb.net/jobDB?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((res) => {

}).catch((e) => {
  console.log(e)
})

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Chaliye shuru karte hai');
});


app.post("/job/details", (req, res) => {
  const jobInfo = req.body;

  jobTile.create(jobInfo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
});

app.get("/job/details", (req, res) => {
  jobTile.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.get("/job/:jobId", (req, res) => {
  let jobId = req.params.jobId;
  jobTile.find({ jobID: jobId }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.post("/applicant", (req, res) => {
  const applicantInfo = req.body;

  applicantDetail.create(applicantInfo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})



