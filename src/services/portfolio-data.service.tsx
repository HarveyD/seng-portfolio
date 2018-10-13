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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna.",
    `Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus.
		Fusce eget efficitur libero. 
		Morbi dapibus porta quam laoreet placerat. 
		Donec eu vehicula neque. Donec viverra lorem nunc, tempus euismod eros sollicitudin ut. 
		Quisque et tincidunt libero. Donec id pharetra justo.`,
    `Proin euismod lacinia dolor, eu scelerisque justo tempus pharetra. 
		Vivamus nunc justo, finibus ut nisl sed, euismod rhoncus nulla. 
		Proin sed magna egestas, egestas ante et, congue eros. 
		In consequat, mauris dapibus tincidunt suscipit, ex libero aliquet diam, at maximus risus enim non leo.`
  ];

  public static readonly experienceList: IInfoCard[] = [
    {
      logo: "employer-logo.svg",
      headings: {
        primary: "Employer Name",
        secondary: "Job Title",
        tertiary: "September 2017 - Present"
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat."
    },
    {
      logo: "employer-logo.svg",
      headings: {
        primary: "Employer Name",
        secondary: "Job Title",
        tertiary: "February 2017 - September 2017"
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat."
    },
    {
      logo: "employer-logo.svg",
      headings: {
        primary: "Employer Name",
        secondary: "Job Title",
        tertiary: "January 2016 - February 2017"
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.",
      isLast: true
    }
  ];

  public static readonly educationList: IInfoCard[] = [
    {
      logo: "education-logo.svg",
      headings: {
        primary: "Education Institution",
        secondary: "Education Type",
        tertiary: "2013 - 2016"
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat."
    },
    {
      logo: "education-logo.svg",
      headings: {
        primary: "Education Institution",
        secondary: "Education Type",
        tertiary: "2007 - 2012"
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.",
      isLast: true
    }
  ];

  public static readonly projectList: IProject[] = [
    {
      id: 0,
      name: "Project Name",
      description: {
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.",
        detailed:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      img: "portfolio.jpg",
      tagList: [SkillEnum.ts, SkillEnum.react, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/HarveyD/seng-portfolio",
        website: "https://www.harveydelaney.com/seng-portfolio"
      },
      releaseDate: "13th Oct 2018"
    },
    {
      id: 1,
      name: "Project Name",
      description: {
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.",
        detailed:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      img: "portfolio.jpg",
      tagList: [SkillEnum.ts, SkillEnum.react, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/HarveyD/seng-portfolio",
        website: "https://www.harveydelaney.com/seng-portfolio"
      },
      releaseDate: "13th Oct 2018"
    },
    {
      id: 2,
      name: "Project Name",
      description: {
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.",
        detailed:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      img: "portfolio.jpg",
      tagList: [SkillEnum.ts, SkillEnum.react, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/HarveyD/seng-portfolio",
        website: "https://www.harveydelaney.com/seng-portfolio"
      },
      releaseDate: "13th Oct 2018"
    },
    {
      id: 3,
      name: "Project Name",
      description: {
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.",
        detailed:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      img: "portfolio.jpg",
      tagList: [SkillEnum.ts, SkillEnum.react, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/HarveyD/seng-portfolio",
        website: "https://www.harveydelaney.com/seng-portfolio"
      },
      releaseDate: "13th Oct 2018"
    }
  ];

  public static readonly skillList: SkillEnum[] = Array.from(skillMap.entries())
    .filter(([key, value]) => value.showAsDefault !== false)
    .map(([key, value]) => key);

  public static readonly socialIconList: ISocialIcon[] = [
    {
      id: "ln",
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: "fa-linkedin"
    },
    {
      id: "gh",
      name: "GitHub",
      url: "https://github.com/",
      icon: "fa-github"
    },
    {
      id: "so",
      name: "Stack Overflow",
      url: "https://stackoverflow.com/",
      icon: "fa-stack-overflow"
    },
    {
      id: "fb",
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: "fa-facebook"
    }
  ];
}
