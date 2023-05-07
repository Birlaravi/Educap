const Career = require("../model/CareerModel");

const allCareers = async (req, res) => {
  try {
    const careerData = await Career.find();
    res.status(200).json(careerData);
  } catch (error) {
    res.status(500).send(error);
  }
};

const singleCareerId = async (req, res) => {
  const data = req.params.jid;
  try {
    const careerData = await Career.findById(data);
    res.status(200).json(careerData);
  } catch (error) {
    res.status(500).send(error);
  }
};

const singleCareerTitle = async (req, res) => {
  const data = req.params.jtitle;
  try {
    const careerData = await Course.find({ JobTitle: data });
    res.status(200).json(careerData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const createCareer = async (req, res) => {
  //const data= req.params.jid;
  try {
    const data = {
      JobTitle: req.body.JobTitle,
      JobType: req.body.JobType,
      Qualification: req.body.Qualification,
      JobDescription: req.body.JobDescription,
      JobStatus: "active",
    };

    //const result = newCareer({CareerName ,Duration,CareerStatus});
    const result = new Career(data);
    const result1 = result.save();
    res.status(201).json(result);
    console.log(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteCareer = async (req, res) => {
  //const data=(req.params.crid)
  try {
    const careerData = await Career.findByIdAndUpdate(req.body._id, {
      JobStatus: "inactive",
    });
    res.status(200).json(careerData);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCareer = async (req, res) => {
  try {
    const careerdata = await Career.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).json(careerdata);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  allCareers,
  singleCareerId,
  singleCareerTitle,
  createCareer,
  deleteCareer,
  updateCareer,
};
