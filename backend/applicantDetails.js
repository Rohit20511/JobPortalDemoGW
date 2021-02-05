const Mongoose = require("mongoose")

const applicantDetail = Mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  current_company: { type: String, required: true },
  current_ctc: { type: String, required: true },
  expected_ctc: { type: String, required: true }
});


module.exports = Mongoose.model("applicantDetail", applicantDetail);