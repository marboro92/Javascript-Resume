var bio =  {
	"name" : "Marianne Borowiak",
	"role" : "Front-End Developer",
	"bioPic" : "images/logowhite.png",
	// "welcomeMsg" : "An imaginative and vivacious web developer",
	"skills" : ["awesomeness", "CSS", "HTML"],
	"aboutPic" : "me copy.png",
	"aboutInfo" : "Lorem Ipsum thanks for coming",
	"contacts" : {
		"location": "Toronto, ON"
	     },

	"display": function(){

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedRole);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").prepend(formattedBioPic);
		var formattedAboutPic = HTMLaboutPic.replace("%data%", bio.aboutPic);
		$("#about").append(formattedAboutPic);
		var formattedAboutInfo = HTMLaboutInfo.replace("%data%", bio.aboutInfo);
		$("#about").append(formattedAboutInfo);

		// var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
		// $("#about").append(formattedWelcome);
	}
};

var projects = {
 "projects":
 		[
            {"client" : "Rocky Acres Organics",
			 "product" : "Business Website",
			 "dates": "May 2014",
			 "description": "",
			 "image": "images/rockyacres.png"
			 // 200X200 if not otherwise spec
			},
			{"client" : "Aphelion Imprint Records",
			 "product" : "Business Website",
			 "dates": "September 2014",
			 "description": "",
			 "image": "images/ai.png"
			},
			{"client" : "Meghan Hunter-Gauthier",
			 "product" : "Personal Website and Blog",
			 "dates": "August 2014",
			 "description": "",
			 "image": "images/mhg.png"
			},
		    {"client" : "RoiCiel",
			 "product" : "Business Website",
			 "dates": "June 2014",
			 "description": "",
			 "image": "images/roiciel.png"
			},
			{"client" : "Marianne Borowiak",
			 "product" : "Portfolio Website and Blog",
			 "dates": "2014",
			 "description": "",
			 "image": "images/mysite.png" 
			 // 410X200 size image
			},
			{
			 "client" : "Contestry",
			 "product" : "Business Website",
			 "dates": "October 2014",
			 "description": "",
			 "image": "images/contestry.png"
			},
			{"client" : "Marianne Borowiak",
			 "product" : "HTML, CSS Mock-Up",
			 "dates": "October 2014",
			 "description": "",
			 "image": "images/udacity1.png"
			}
		],
	"display": function() {
		for (var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			// var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].client + "'s " + projects.projects[project].product);
			// $(".project-entry:last").append(formattedTitle);
			// var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			// $(".project-entry:last").append(formattedDates);
			// var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			// $(".project-entry:last").append(formattedDescription);
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
			$(".project-entry:last").append(formattedImage);

		if (projects.projects[project].image > 0) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[project].image);
			$(".project-entry:last").append(formattedImage);
		}
	    }	
	}
};

var education = {
	"schools":
		[
			{"degree": "Life Sciences Honours B.Sc",
			 "name": "University of Toronto",
			 "dates": "2010-2014",
			 "major": "Life Sciences",
			 "location": "Toronto, ON"
		    },
		    {"degree": "Front-End Development Track",
			 "name": "Treehouse Inc",
			 "dates": "2014",
			 "location": "Online"
		    },
		    {"degree": "PHP and MySQL Certificate",
			 "name": "University of Waterloo",
			 "dates": "2010-2014",
			 "location": "Waterloo, ON"
		    },
		     {"degree": "Front-End Development Nanodegree",
			 "name": "Udacity",
			 "dates": "2014 - Present",
			 "location": "Online"
		    }
		],
	"display": function() {
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedName);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
		}
	}
};

var work = {
	"jobs":
		[	{"title": "Jr. Front-End Developer",
		     "location": "Toronto, ON",
		     "employer": "Titan Technologies",
			 "dates": "November 2014 - Present",
			 "description": "Lorem Ipsum"
			},
	        {"title": "Freelance Web Developer",
		     "location": "Toronto, ON",
		     "employer": "Self-Employed",
			 "dates": "2014",
			 "description": "Lorem Ipsum"
			},
			{"title": "General Assistant",
		     "location": "Verner, ON",
		     "employer": "Rocky Acres Organics",
			 "dates": "May-Sept 2010",
			 "description": "Lorem Ipsum"
			}
		],
    "display": function() {
    	for (var job in work.jobs) {
    // create new div for work experience  
	    $("#workExperience").append(HTMLworkStart);

	    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	    var formattedEmployerTitle = formattedEmployer + formattedTitle;
	    $(".work-entry:last").append(formattedEmployerTitle);

	    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	    $(".work-entry:last").append(formattedDates);

	    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	    $(".work-entry:last").append(formattedDescription);
	  }
    }
};

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
projects.display();
work.display();
education.display();



// for (job in work.jobs) {

// }
// for (project in projects) {
// var formatted
// }

