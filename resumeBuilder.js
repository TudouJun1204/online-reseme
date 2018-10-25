/*
This is empty on purpose! Your code to build the resume will go here.
 */



var bio = {
      "name": "Linjun Ma",
      "role": "Web Developer",
      "contacts":[
        {
          "mobile": "201-423-2849",
          "email": "catherinema0617@gmail.com",
          "twitter": "https://twitter.com/LinjunM",
          "github": "https://github.com/dashboard",
          "linkedin": "https://www.linkedin.com/in/linjun-ma/",
          "facebook": "https://www.facebook.com/profile.php?id=100009779898743",
          "location":"Shenzhen, Guangdong, China"
        }
      ],
      "pictureURL": "images/Ha.jpg",
      "skills": ["JavaScript", "HTML5", "CSS", "jQuery", "bootstrap", "Python", "Java"],
};

var education = {
  "schools":[
    {
      "school": "Stevens Institute of Technology",
      "degree": "Masters of science",
      "date": "8.2015 – 6.2017",
      "location": "Hoboken, NJ",
      "major": "Electrical Engineering",
      "years": "2 years"
    },
    {
      "school": "Shandong architecture university",
      "degree": "Bachelor of science",
      "date": "9.2011 – 6.2015",
      "location": "Jinan, Shandong, China",
      "major": "Electrical Engineering",
      "years": "4 years"
    }
  ],
  "onlineCourses" : [
    {
    "school": "Udacity",
    "dates": "4.2018 - 11.2018",
    "major": "Front-End Web Developer Nanodegree Program",
    "location": "Bloomfield, NJ",
    "years": "8 months"
    }
  ]
};

var work = {
  "jobs":[
    {
      "employer": "NewBeast LLC",
      "title": "Front-End Developer",
      "date": "May,2017-May,2018",
      "location": "New York, NY",
      "description":
      ["Code daily in stack: jQuery, CSS, HTML5, Bootstrap, Javascript Libraries & Tooling",
      "Build efficient and reusable front-end systems and abstractions","Ensure compliance with web standards and accessibility requirements",
      "Utilize responsive design and UI design principles"]
    }
  ]
};

var projects = {
  "projects":[
    {
      "title": "OnlineResumeBuilder",
      "dates": "May 2017",
      "description": "Buid an online resume including bio, education, project and work information",
      "images": ["images/197x148.gif", "images/197x148.gif"]
  },
    {
      "title":"Build Portfolio Site",
      "dates":"Apr 2017",
      "description":"Buid an online portfolio Site using HTML, CSS and JavaScript",
      "images": "images/197x148.gif"
    }
  ]
};


/*var name = "Linjun Ma";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var mobile = "13430983429";
var formattedMobile = HTMLmobile.replace("%data%",mobile);
var email = "catherinema0617@gmail.com";
var formattedEmail = HTMLemail.replace("%data%",email);
var twitter = "https://twitter.com/LinjunM";
var formattedTwitter = HTMLtwitter.replace("%data%",twitter);
var github = "https://github.com/dashboard";
var formattedGithub = HTMLgithub.replace("%data%",github);

var skills = ["JavaScript","jQuery","bootstrap","Python","Java"];
var formattedSkills = HTMLskills.replace("%data%",skills);
$("#header").append(formattedName,formattedRole,formattedMobile,formattedEmail,formattedTwitter,formattedGithub,HTMLskillsStart,
formattedSkills);*/

bio.display = function(){

      $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
      $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));


      for (contact in bio.contacts) {
            /*$("#main").append(HTMLcontactGeneric);*/
            /*$("#topContacts").append(HTMLcontactGeneric);*/


            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
            $("#topContacts").append(formattedMobile);


            var formattedEmail= HTMLemail.replace("%data%", bio.contacts[contact].email);
            $("#topContacts").append(formattedEmail);

            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
            $("#topContacts").append(formattedTwitter);

            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
            $("#topContacts").append(formattedGithub);

            var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts[contact].linkedin);
            $("#topContacts").append(formattedLinkedin);

            var formattedFacebook = HTMLfacebook.replace("%data%", bio.contacts[contact].facebook);
            $("#topContacts").append(formattedFacebook);

            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
            $("#topContacts").append(formattedLocation);
      };

      var formattedBioImage = HTMLbioPic.replace("%data%", bio.pictureURL);
      $("#header").append(formattedBioImage);

      $("#header").append(HTMLskillsStart);

      var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkills);

      var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkills);

      var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkills);

      var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkills);

      var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
      $("#skills").append(formattedSkills);

}
bio.display();


work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    $(".work-entry:last").append(formattedWorkEmployer);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedWorkTitle);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);
  }
}
work.display();



projects.display = function() {
  i = 0
  for (project in projects.projects) {

    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);
    if (i === 0){
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
        $(".project-entry:last").append(formattedProjectImage);

        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
        $(".project-entry:last").append(formattedProjectImage);
        i = i+1
    }
    else{
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedProjectImage);
    }
  }
}
projects.display();



education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].school);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);

    var formattedSchoolYears = HTMLschoolYears.replace("%data%", education.schools[school].years);
    $(".education-entry:last").append(formattedSchoolYears);
  };

  for (onlineCourse in education.onlineCourses){
    $("#education").append(HTMLschoolStart);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    $(".education-entry:last").append(formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineMajor = HTMLonlineMajor.replace("%data%", education.onlineCourses[onlineCourse].major);
    $(".education-entry:last").append(formattedOnlineMajor);

    var formattedOnlineLocation = HTMLonlineLocation.replace("%data%", education.onlineCourses[onlineCourse].location);
    $(".education-entry:last").append(formattedOnlineLocation);

    var formattedOnlineYears= HTMLonlineYears.replace("%data%", education.onlineCourses[onlineCourse].years);
    $(".education-entry:last").append(formattedOnlineYears);
  }
}
education.display();



$("#mapDiv").append(internationalizeButton,googleMap);

bio.display = function(){
  for (contact in bio.contacts) {
    /*$("#main").append(HTMLcontactGeneric);*/

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail= HTMLemail.replace("%data%", bio.contacts[contact].email);
    $("#footerContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
    $("#footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
    $("#footerContacts").append(formattedLocation);
  };

}
bio.display();
