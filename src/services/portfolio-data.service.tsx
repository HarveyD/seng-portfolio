import { IUserDetails } from "../sections/landing/landing";
import { IInfoCard } from "../components/info-card/info-card";
import { SkillEnum } from "../constants";
import { IProject } from "../components/project/project";
import { skillMap } from "../components/skill/skill";
import { ISocialIcon } from "../components/social/social";

export default class PortfolioDataService {
  public static readonly user: IUserDetails = {
    firstName: "Harvey",
    lastName: "Delaney",
    title: "Software Engineer"
	};
	
	public static readonly aboutTextList: string[] = [
		'Hey there! My name is Harvey Delaney.',
		`I'm a software engineer currently working at the RateSetter. I am a
		fullstack software engineer that prides myself on writing clean, readable,
		testable, extensible and scalable code.`,
		`Outside of work, I am always looking to learn new frameworks and languages
		by watching Pluralsight videos and putting this knowledge into practice by
		undertaking my personal projects. I have and currently read a number of
		well-known programming books including Clean Code and The Pragmatic
		Programmer to learn best practice programming.`
	];

  public static readonly experienceList: IInfoCard[] = [
    {
      logo: "rs.jpg",
      headings: {
        primary: "RateSetter",
        secondary: "Software Engineer",
        tertiary: "July 2018 - Present"
      },
      description: ""
    },
    {
      logo: "cba.png",
      headings: {
        primary: "Commonwealth Bank of Australia",
        secondary: "Software Engineer",
        tertiary: "February 2018 - July 2018"
      },
      description: "Did some stuff"
    },
    {
      logo: "cba.png",
      headings: {
        primary: "Commonwealth Bank of Australia",
        secondary: "Software Engineer",
        tertiary: "February 2017 - January 2018"
      },
      description:
        "Created a hybrid mobile application using Cordova, Angular 2+ and .NET that greatly improved the experience branch managers have in finding suitable casual or part-time staff replacements."
    },
    {
      headings: {
        primary: "Department of Defence",
        secondary: "Junior Developer",
        tertiary: "March 2016 - November 2016"
      },
      description:
        "Part-time Backend Developer. Involved with consulting internal clients and writing SQL stored procedures and API's in .NET that met client's data requirements.",
      logo: "dod.gif"
    },
    {
      logo: "anu.png",
      headings: {
        primary: "Australian National University",
        secondary: "Senior Resident",
        tertiary: "January 2016 - November 2017"
      },
      description:
        "Senior Resident (AKA Residential Advisor) at the residential college Bruce Hall. Responsible for providing pastoral care and support for over 300 students at the college. Helped organised and facilitate numerous small and large events at the college throughout the year.",
      isLast: true
    }
  ];

  public static readonly educationList: IInfoCard[] = [
    {
      logo: "anu.png",
      headings: {
        primary: "Australian National University",
        secondary: "Bachelor of Software Engineering (Honours)",
        tertiary: "2013 - 2016"
      },
      description:
        "Undertook a four year Software Engineering degree accredited by Engineers Australia."
    },
    {
      logo: "dara.png",
      headings: {
        primary: "Daramalan",
        secondary: "Secondary Education",
        tertiary: "2007 - 2012"
      },
      description: "Studied here for both highschool and college.",
      isLast: true
    }
	];
	
	public static readonly projectList: IProject[] = [
		{
			id: 0,
			name: "Crypto Coaster",
			description:{
				overview: "A simple web app that provides real time updates to cryptocurrency prices using their respective mascots.",
				detailed: "A simple web app that provides real time updates to cryptocurrency prices using their respective mascots.A simple web app that provides real time updates to cryptocurrency prices using their respective mascots."
			},
			img: "crypto-coaster.jpg",
			tagList: [SkillEnum.js, SkillEnum.websockets, SkillEnum.jquery],
			url: {
				github: "https://github.com/HarveyD/crypto-coaster",
				website: "https://www.harveydelaney.com/crypto-coaster/"
			}
		},
		{
			id: 1,
			name: "Reddit Sentiment Analyser",
			description: {
				overview: "Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread.",
				detailed: "Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread.",
			},
			img: "reddit-sa.jpg",
			tagList: [SkillEnum.js, SkillEnum.sass, SkillEnum.jquery, SkillEnum.node],
			url: {
				github: "https://github.com/HarveyD/reddit-sa",
				website: "https://www.harveydelaney.com/reddit-sa/"
			}
		},
		{
			id: 2,
			name: "Compounding Savings",
			description: {
				overview: "A web application aimed at informing the potential compounding interest benefits from not buying non-essential items.",
				detailed: "A web application aimed at informing the potential compounding interest benefits from not buying non-essential items. A web application aimed at informing the potential compounding interest benefits from not buying non-essential items."
			},
			img: "compounding-savings.jpg",
			tagList: [SkillEnum.react, SkillEnum.redux, SkillEnum.sass, SkillEnum.webpack],
			url: {
				github: "https://github.com/HarveyD/compounding-savings/",
				website: "https://www.harveydelaney.com/compounding-savings"
			}
		},
		{
			id: 3,
			name: "PooPlot",
			description: {
				overview: "A hybrid mobile application to help people track, view and share poops.",
				detailed: "A hybrid mobile application to help people track, view and share poops. A hybrid mobile application to help people track, view and share poops."
			},
			img: "pooplot.jpg",
			tagList: [SkillEnum.angular2, SkillEnum.ionic, SkillEnum.android, SkillEnum.node, SkillEnum.mongodb],
			url: {
				github: "",
				website: "https://www.harveydelaney.com/pooplot"
			}
		},
		{
			id: 4,
			name: "Bruce Hall VR",
			description: {
				overview: "A simple tour of the old Bruce Hall before being knocked down. PROJECT NOT LIVE.",
				detailed: "A simple tour of the old Bruce Hall before being knocked down. PROJECT NOT LIVE. A simple tour of the old Bruce Hall before being knocked down. PROJECT NOT LIVE."
			}, 
			img: "bruce-hall-vr.jpg",
			tagList: [SkillEnum.js, SkillEnum.jquery, SkillEnum.panelleum],
			url: {
				github: "https://github.com/HarveyD/bruce-hall-vr",
				website: "https://www.harveydelaney.com/bruce-hall-vr"
			}
		},
		{
			id: 5,
			name: "Bruce Hall VR 2",
			description: {
				overview: "A rebuild of the Bruce Hall VR project written in React. NOT LIVE.",
				detailed: "A rebuild of the Bruce Hall VR project written in React. NOT LIVE. A rebuild of the Bruce Hall VR project written in React. NOT LIVE."
			},
			img: "bruce-hall-vr-2.jpg",
			tagList: [SkillEnum.react, SkillEnum.panelleum],
			url: {
				github: "https://github.com/HarveyD/bruce-hall-vr-2",
				website: ""
			}
		},
		{
			id: 6,
			name: "Repeat After Me",
			description: {
				overview: "A simple Simon Says clone made using HTML5 Canvas + Typescript.",
				detailed: "A simple Simon Says clone made using HTML5 Canvas + Typescript. A simple Simon Says clone made using HTML5 Canvas + Typescript.",
			},
			img: "repeat-after-me.jpg",
			tagList: [SkillEnum.js, SkillEnum.ts, SkillEnum.webpack, SkillEnum.html5],
			url: {
				github: "https://github.com/HarveyD/repeatafterme",
				website: "https://www.harveydelaney.com/repeatafterme/"
			}
		},
		{
			id: 7,
			name: "SpookEm",
			description: {
				overview: "A tile based horror/survival game made using Processing/Java. (Demo not available).",
				detailed: "A tile based horror/survival game made using Processing/Java. (Demo not available). A tile based horror/survival game made using Processing/Java. (Demo not available)."
			},
			img: "spookem.jpg",
			tagList: [SkillEnum.java, SkillEnum.processing],
			url: {
				github: "https://github.com/HarveyD/SpookEm",
				website: ""
			}
		}
	];

	public static readonly skillList: SkillEnum[] = Array
		.from(skillMap.entries())
		.filter(([key, value]) => value.showAsDefault !== false)
		.map(([key, value]) => key);

	public static readonly socialIconList: ISocialIcon[] = [
		{
			id: "ln",
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/harvey-delaney-578150108/",
			icon: "fa-linkedin"
		},
		{
			id: "gh",
			name: "GitHub",
			url: "https://github.com/harveyd/",
			icon: "fa-github"
		},
		{
			id: "so",
			name: "Stack Overflow",
			url: "https://stackoverflow.com/users/7952076/harveyd",
			icon: "fa-stack-overflow"
		},
		{
			id: "bl",
			name: "Harvey's Blog",
			url: "https://blog.harveydelaney.com/",
			icon: "fa-bars"
		}
	];
}
