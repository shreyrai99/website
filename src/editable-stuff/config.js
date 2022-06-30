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
      image: "fa-google",
      url: "mailto:kumarshrey.21099@gmail.com"
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
    "sanjeevani",
    "social-media-website",
    "Corona-Scrapper",
    "Heart-Disease-Predictor",
    "QUIZ-WEBSITE"
  ],
  specificlink: [
    "https://diabetes-prediction-by-shrey.herokuapp.com/",
    "http://sanjeevni.herokuapp.com/",
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
    { name: "Data Structures", value: 80 },
    { name: "Algorithms", value: 80 },
    { name: "Object Oriented Programming", value: 65 },
    { name: "Operating System", value: 65 },
    { name: "Web Development", value: 65 },
    { name: "Machine Learning", value: 55 },
    { name: "JavaScript", value: 70 },
    { name: "C/C++", value: 80 }
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
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "kumarshrey.21099@gmail.com"
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Software Engineer Intern", // Here Add Company Name
      companylogo: require("../assets/img/msicon.png"),
      date: "January 2022 – Present, May 2021 – July 2021",
      companyName: "Microsoft",
      rolesAndDate: [
        {
          role: "Software Engineer",
          date: "July 2022 - Present",

          location: "Bangalore, India",
          startYear: 2022,
          startMonth: 7, //between 1 to 12
          endYear: 0, // 0 if currently working
          endMonth: 0 // 0 if currently working
        },
        {
          role: "Software Engineer Intern",
          date: "January 2022 – June 2022",
          location: "Bangalore, India",
          startYear: 2022,
          startMonth: 1, //between 1 to 12
          endYear: 2022, // 0 if currently working
          endMonth: 6 // 0 if currently working
        },
        {
          role: "Software Engineer Intern",
          date: "May 2021 – July 2021",
          location: "Bangalore, India",
          startYear: 2021,
          startMonth: 5, //between 1 to 12
          endYear: 2021, // 0 if currently working
          endMonth: 7 // 0 if currently working
        }
      ]
    }
    /*{
      role: "Software Engineer Intern", // Here Add Company Name
      companylogo: require("../assets/img/msicon.png"),
      date: "May 2021 – July 2021"
    }*/
  ]
};

const codingProfiles = {
  show: true,
  heading: "Competitive Coding Profiles",
  message:
    "I use Competitive Programming as a tool to make a strong grip on Data strcutures and algorithms. I regularly take part in CP contests. Some of my Coding profiles are listed below 😃",
  data: [
    {
      website: "Codechef", // Here Add the name of coding platform
      companyLogo: require("../assets/imgcoding/cc.png"),
      description: "4 Star rated, rating: 1898",
      profileURL: "https://www.codechef.com/users/shreyrai"
    },
    {
      website: "Codeforces", // Here Add the name of coding platform
      companyLogo: require("../assets/imgcoding/codeforces.jpg"),
      description: "Specialist",
      profileURL: "https://codeforces.com/profile/sukhoi_mki"
    },
    {
      website: "HackerRank", // Here Add the name of coding platform
      companyLogo: require("../assets/imgcoding/hackerrank.png"),
      description: "6 star in problem solving",
      profileURL: "https://www.hackerrank.com/kumarshrey_21099"
    },
    {
      website: "Leetcode", // Here Add the name of coding platform
      companyLogo: require("../assets/imgcoding/leetcode.jpg"),
      description: "",
      profileURL: "https://leetcode.com/shreyrai99/"
    },
    {
      website: "Hackerearth", // Here Add the name of coding platform
      companyLogo: require("../assets/imgcoding/hackerearth.png"),
      description: "Contest rating: 1551",
      profileURL: "https://www.hackerearth.com/users/shrey162"
    },
    {
      website: "SPOJ", // Here Add the name of coding platform
      companyLogo: require("../assets/imgcoding/spoj.png"),
      description: "",
      profileURL: "https://www.spoj.com/users/shreyrai99/"
    }
  ]
};

const toolsAndLanguages = {
  show: true,
  heading: "Technical Skills",
  message:
    "I am a quick learner and I love to learn new technologies and polish my existing skills by working on interesting projects. Below are some of the languages, tools and frameworks I have worked with.",
  data: [
    {
      skill: "C++", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/cpp.png")
    },
    {
      skill: "C", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/c.png")
    },
    {
      skill: "Python", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/python.png")
    },
    {
      skill: "JavaScript", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/js.png")
    },
    {
      skill: "React", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/react.png")
    },
    {
      skill: "NodeJS", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/node.png")
    },
    {
      skill: "SQL", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/sql.png")
    },
    {
      skill: "Git", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/git.png")
    },
    {
      skill: "Azure", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/azure.png")
    },
    {
      skill: "C#", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/csharp.png")
    },
    {
      skill: "HTML", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/html.png")
    },
    {
      skill: "CSS", // Here Add the name of coding platform
      skillLogo: require("../assets/imgskills/css.png")
    }
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
  experiences,
  codingProfiles,
  toolsAndLanguages
};
