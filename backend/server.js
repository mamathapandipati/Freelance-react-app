const express = require("express");
const mongoose = require("mongoose");
const StudentSchema = require("./model/StudentSchema");
const LoginSchema = require("./model/LoginSchema");
const MessageSchema = require("./model/MessageSchema");
const EmployerSchema = require("./model/EmployerSchema");
const PostJobSchema = require("./model/PostJobSchema");
const SavedJobSchema = require("./model/SavedJobSchema");
const ReviewSchema = require("./model/ReviewSchema");
const JobSchema = require("./model/JobSchema");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const config = require("config");
const download = require("download");
const multer = require("multer");
//const upload = multer();

const middleware = require("./middleware");
const { findByIdAndDelete } = require("./model/StudentSchema");

const app = express();

mongoose
  .connect(
    "mongodb+srv://sajana:sajana@cluster0.vv9gz.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected"));

app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    req.body.files = file.originalname;
    console.log("resyyyyyy", req.body.files);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).array("file");

app.post("/upload/:username/:email/:city/:mobileno", async (req, res) => {
  console.log("helooo");

  console.log("helooo", req.params.city);
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).send("uploaded succesfully");
  });
  const newUser = new JobSchema({
    username: req.params.username,
    email: req.params.email,
    city: req.params.city,
    mobile: req.params.mobileno,
  });

  await newUser.save();
  //  return res.status(400).send(" Successfully");
});

app.post("/register", async (req, res) => {
  try {
    const {
      username,
      email,
      mobile,
      price,
      description,
      skills,
      role,

      password,
      confirmpassword,
    } = req.body;

    let exits = await LoginSchema.findOne({ email: email });
    console.log(exits);
    if (exits) {
      console.log("haiadh");
      return res.status(400).send("User already exits");
    } else if (password !== confirmpassword) {
      return res.status(400).send("Passwords are not matching");
    } else {
      const newUser = new LoginSchema({
        username: username,
        email: email,
        mobile: mobile,
        skills: skills,
        price: price,
        role: role,
        description: description,
        password: password,
        confirmpassword: confirmpassword,
      });

      await newUser.save();
      return res.status(400).send(" Freelancer Register Successfully");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
});
//employer signUp
app.post("/signup", async (req, res) => {
  try {
    const { companyname, email, website, password, confirmpassword } = req.body;

    let exits = await EmployerSchema.findOne({ email: email });
    console.log(exits);
    if (exits) {
      console.log("haiadh");
      return res.status(400).send("Employeer already exits");
    } else if (password !== confirmpassword) {
      return res.status(400).send("Passwords are not matching");
    } else {
      const newUser = new EmployerSchema({
        companyname: companyname,
        email: email,
        website: website,
        password: password,
        confirmpassword: confirmpassword,
      });

      await newUser.save();
      return res.status(400).send(" Employer Register Successfully");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
});

//Add Jobs
app.post("/postjob", async (req, res) => {
  try {
    const {
      jobtitle,
      jobtype,
      qulifications,
      companyname,
      skills,
      city,
      workmodel,
      jobdescription,
    } = req.body;
    console.log("jobtype", req.body.jobtype);
    console.log("jobtitle", req.body.jobtitle);
    const newJob = new PostJobSchema({
      jobtitle: jobtitle,
      jobtype: jobtype,
      companyname: companyname,
      qulifications: qulifications,
      skills: skills,
      city: city,
      workmodel: workmodel,
      jobdescription: jobdescription,
    });
    //  console.log(newJob);
    newJob.save();
    return res.json(await PostJobSchema.find());
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
});
//browse jobs

app.get("/browsejobs", async (req, res) => {
  try {
    let alljobs = await PostJobSchema.find();
    return res.json(alljobs);
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error");
  }
});

//login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email", email);
    console.log("password", password);

    const exits = await LoginSchema.findOne({ email });
    console.log("freelance---user-----", exits);

    // let empexits = await EmployerSchema.findOne({ email });
    // console.log("company--------", empexits.email);
    if (exits) {
      console.log("user login success");
      let payload = {
        user: {
          id: exits.id,
          success: "user success",
        },
      };
      console.log("payloa", payload);
      jwt.sign(payload, "jwtsecure", { expiresIn: 3600000 }, (err, token) => {
        if (err) throw err;
        console.log("token-----", token);
        return res.json({
          token,
          user: {
            id: exits.id,
            success: "usersuccess",
          },
        });
      });
    }
    if (!exits) {
      let empexits = await EmployerSchema.findOne({ email });
      if (empexits) {
        console.log("employer success");
        let payload = {
          user: {
            id: empexits.id,
            success: "employersuccess",
          },
        };
        console.log("payloa", payload);
        jwt.sign(payload, "jwtsecure", { expiresIn: 3600000 }, (err, token) => {
          if (err) throw err;
          console.log("token-----", token);
          return res.json({
            token,
            user: {
              id: empexits.id,
              success: "employersuccess",
            },
          });
        });
      } else {
        return res.status(401).send(" User Not Found");
      }
    }
  } catch (err) {
    return res.status(500).send(" server error");
  }
});
//Freelancer MY  profile
app.get("/myprofile", middleware, async (req, res) => {
  try {
    let exits = await LoginSchema.findById(req.user.id);

    console.log("userid", req.user.id);
    if (!exits) {
      return res.status(400).send("user not found");
    }
    res.json(exits);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Token");
  }
});
// employer profile
app.get("/empprofile", middleware, async (req, res) => {
  try {
    let exits = await EmployerSchema.findById(req.user.id);

    console.log("employer", req.user.id);
    if (!exits) {
      return res.status(400).send("user not found");
    }
    res.json(exits);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Token");
  }
});

//APplicant Details

app.get("/applicantdetails", async (req, res) => {
  try {
    return res.json(await JobSchema.find());
  } catch (err) {
    console.log(err);
  }
});

app.post("/addtask", async (req, res) => {
  const { userName, email, mobile, adress, job } = req.body;
  try {
    const newData = new StudentSchema({
      userName: userName,
      email: email,
      mobile: mobile,
      adress: adress,
      job: job,
    });
    await newData.save();
    return res.json(await StudentSchema.find());
  } catch (err) {
    console.log(err);
  }
});

app.get("/gettask", async (req, res) => {
  try {
    return res.json(await StudentSchema.find());
  } catch (err) {
    console.log(err);
  }
});
app.get("/getprofilebyid/:id", async (req, res) => {
  try {
    console.log("hii", req.params);
    const { id } = req.params;

    console.log("i am in id", id);
    const userindividual = await LoginSchema.findById({ _id: id });
    console.log("hallll");
    console.log("hi I am there", userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});
app.get("/getuser/:id", async (req, res) => {
  try {
    console.log("i am in id", req.params.id);
    const { id } = req.params;

    const userindividual = await StudentSchema.findById(req.params.id);
    console.log("hallll");
    //console.log("hi I am there", res.json(userindividual));
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});
app.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await StudentSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});
app.patch("/editprofile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("profileid", id);
    const updateduser = await LoginSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    await StudentSchema.findByIdAndDelete(req.params.id);
    return res.json(await StudentSchema.find());
  } catch (err) {
    console.log(err);
  }
});
//Saved Job Post Delete

app.delete("/jobpostdelete/:id", async (req, res) => {
  try {
    console.log("dddddd", req.params.id);
    await JobSchema.findByIdAndDelete(req.params.id);
    return res.status(201).send("sucessfully deleted");
  } catch (err) {
    res.status(500).json(error);
  }
});
//Get All Profile
app.get("/allprofile", middleware, async (req, res) => {
  try {
    let allprofile = await LoginSchema.find();

    return res.json(allprofile);
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error");
  }
});

app.post("/addreview", middleware, async (req, res) => {
  try {
    const { taskworker, rating } = req.body;
    const exits = await EmployerSchema.findById(req.user.id);
    const newReview = new ReviewSchema({
      taskprovider: exits.companyname,
      taskworker,
      rating,
    });

    newReview.save();
    return res.status(200).send("added review successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error");
  }
});
app.get("/myreview", middleware, async (req, res) => {
  try {
    let allreivews = await ReviewSchema.find();
    let myreview = allreivews.filter(
      (review) => review.taskworker.toString() === req.user.id.toString()
    );
    console.log("myreviewwwwwwwww", myreview);
    return res.status(200).json(myreview);
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
});

//message end point
app.post("/sendmessge", middleware, async (req, res) => {
  console.log("helooooooooooooooooooo");
  try {
    const { freelancer, message } = req.body;

    console.log("freelancer aa", req.body.freelancer);
    console.log("mesggggg aa", req.body.message);
    const exits = await EmployerSchema.findById(req.user.id);
    const newMessage = new MessageSchema({
      employer: exits.email,
      freelancer,
      message,
    });
    console.log("newmes", newMessage);
    newMessage.save();
    return res.status(200).send("sent message successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error");
  }
});
app.get("/recivemessage", middleware, async (req, res) => {
  try {
    let allmessage = await MessageSchema.find();
    let mymessage = allmessage.filter(
      (message) => message.freelancer.toString() === req.user.id.toString()
    );
    console.log("ffffffffwwwwwwwww", mymessage);
    return res.status(200).json(mymessage);
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
});
//saved jobs endpoint

app.post("/savejob", async (req, res) => {
  console.log("jobtitle", req.body.jobtitle);
  console.log("desctopim", req.body.jobdescription);
  const {
    jobtitle,
    jobtype,
    qulifications,
    companyname,
    skills,
    city,
    workmodel,
    jobdescription,
  } = req.body;
  try {
    const newData = new SavedJobSchema({
      jobtitle: jobtitle,
      jobtype: jobtype,
      qulifications: qulifications,
      companyname: companyname,
      skills: skills,
      city: city,
      workmodel: workmodel,
      jobdescription: jobdescription,
    });
    await newData.save();
    return res.status(201).send("sucuessfully saved");
  } catch (err) {
    console.log(err);
  }
});

app.get("/savejobbyid", async (req, res) => {
  try {
    return res.json(await SavedJobSchema.find());
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => console.log("Server running..."));
