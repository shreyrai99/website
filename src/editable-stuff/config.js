// Navigation Bar SECTION
const navBar = {
  show: true
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kumar",
  middleName: "",
  lastName: "Shrey",
  message: "Trying to change the world by turning ideas into code",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/shreyrai99"
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/shrey.roy.9/"
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/shreyrai99/"
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shreyrai99/"
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/shreyrai99/"
    }
  ]
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/nabh.jpeg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/nabh.jpeg"),
  imageSize: 375,
  message:
    "My name is Kumar Shrey and I am a final year Computer Science undergraduate studying in Birla Institute of Technology, Mesra . I use Compitetive Coding as a tool to make a strong grip on Algorithms and Data structures. I am also enthusiastic about Web Development and Machine Learning.",
  resume: require("../editable-stuff/resume.pdf")
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "shreyrai99", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    "Diabetes-Predictor",
    "social-media-website",
    "Corona-Scrapper",
    "Heart-Disease-Predictor",
    "QUIZ-WEBSITE"
  ],
  specificlink: [
    "https://diabetes-prediction-by-shrey.herokuapp.com/",
    "https://shreybook.herokuapp.com/",
    "https://shrey-covid.herokuapp.com/",
    "https://heart-diseasepredictor.herokuapp.com/",
    ""
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/nabh.jpeg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/nabh.jpeg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    }
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C/C++" },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Algorithms", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "Machine Learning", value: 50 }
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 }
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "shreyrai99@gmail.com"
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer Intern", // Here Add Company Name
      companylogo: require("../assets/img/msicon.png"),
      date: "January 2022 – Present, May 2021 – July 2021"
    }
    /*{
      role: "Software Engineer Intern", // Here Add Company Name
      companylogo: require("../assets/img/msicon.png"),
      date: "May 2021 – July 2021"
    }*/
  ]
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences
};
