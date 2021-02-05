const Mongoose = require("mongoose")

const jobSchema = Mongoose.Schema({
  jobID: { type: String, required: true },
  Role: { type: String, required: true },
  Job_Description: { type: String, required: true },
  company_img_url: { type: String, required: true },
  company_name: { type: String, required: true },
  company_location: { type: String, required: true }
});


module.exports = Mongoose.model("job", jobSchema);