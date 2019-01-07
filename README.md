# Software Engineer Portfolio Template
### By Harvey Delaney
![](https://i.imgur.com/sUdc6c4.gif)
## Introduction
When I started working as a Software Engineer, I wanted to create my own (software engineering) portfolio website. I wanted it to display my experience, education, projects and skills. At the time, I wasn't so great at designing websites and looked around for a portfolio template which would help me get started. On Reddit, I found the [devportfolio](https://github.com/RyanFitzgerald/devportfolio) template by Ryan Fitzgerald.

I loved the design, simplicity and customisability of it - it had everything I wanted in a template. So I built my portfolio using the template, which is still live [here.](https://www.harveydelaney.com/old-portfolio)

However, as time went on I wanted to add to the portfolio, I was restricted by how it was implemented. I found myself shoehorning new features into the project. So, I decided to create my own portfolio using a more modern stack: React, Typescript and Sass. 

I've created this portfolio template primarily for my own benefit - to create my new portfolio website which you can view at: https://www.harveydelaney.com. I found that Ryan's portfolio template helped me so much to get started with creating my own portfolio - I hope that this template will provide the same benefit to you!

Although I created this template from scratch, the design of the website is heavily influenced by the template that Ryan has created.

[View seng-portfolio live here.](https://www.harveydelaney.com/seng-portfolio)

## Features
- Uses (unejected) [Create React App](https://github.com/facebook/create-react-app)
- Typescript
- Sass
- Lightweight
- No external CSS frameworks used (no bootstrap)
- Flexbox is used heavily throughout the website
- Easy customisability through Sass variables and a cetranlised data portfolio location
- SEO optimsed using [react-snap](https://github.com/stereobooster/react-snap)
- FontAwesome4 + DevIcon available

## Contents
- [Getting Started](#getting-started)
- [Landing](#landing)
- [About](#about)
- [Experience](#experience)
- [Education](#education)
- [Projects](#projects)
- [Skills](#skills)
- [Contact](#contact)
- [Troubleshooting](#troubleshooting-information)

## Getting Started
To start modifying and customising the project to yourself, you'll need to fork the project.

Once you've forked, clone the freshly forked repository.

Run `npm i` followed by `npm start`, then navigate to `localhost:3000` and you should see the portfolio running with no problems!

A majority of the things you will need to change are in `src/components/services/portfolio-data.service.tsx`

Refer to [Create React App](https://github.com/facebook/create-react-app) documentation if you encounter any issues running the app. Or refer to the [Troubleshooting](#Troubleshooting Information) section

## Colours and Font
Most colours used within the app are located within `variables.scss`, change all the colours to meet your needs. 

Global font family/font-sizes etc. are located within `App.scss`.

## Landing
Two things can be easily changed here:
- Landing page image:
    - Simply change the `src/assets/images/landing.jpg` image
- Name and title: 
    - These are configured in `PortfolioDataService` under `userDetails`.

## About
- Profile picture:
    - Change the `src/assets/images/profile-picture.jpg` image
- Title: 
    - For now, you'll have to go into the About component and change the title to your name (probably will update)
- Content
	- Change `aboutList` in `ProfileDataService`

## Experience
Add as many entries as you had jobs to `experienceList` which match the interface defintion `IInfoCard`

## Education
Similar to Experience, add entries for each education item to `educationList` which match the interface definition `IInfoCard`

## Project
For each project you have done, fill create an entry in `projectList`, matching the `IProject` interface. The taglist (each skill associated with the project) has to be an enum within `SkillEnum`. More information about skills is [here.](#Skills)

## Skills
I am using two font libraries to render the skill icons:
- [DevIcon](http://konpa.github.io/devicon/)
- [Font Awesome 4](https://fontawesome.com/v4.7.0/)

Skills are being used in two places, in Projects and the Skill Section.

Please refer to `SkillMap` located in `src/components/skill/skill.tsx` for all the available skills. If you wish to include another `DevIcon` skill, you must:
- Register a new enum value in `SkillEnum` (`src/constants`)
- Add another entry into `SkillMap`, i.e. `[SkillEnum.newSkill, { name: "Skill", icon: "skill" }]` where the `icon` string maps to the value in `DevIcon`'s documentation and the name is what you want the description of the skill to be.
- (optional) Set the `showAsDefault` field to false if you don't want to see this skill in the SkillSection (only to be used within portfolios)

To register a new Font Awesome icon skill:
- Register a new enum value in `SkillEnum` (`src/constants`)
- Add another entry into `SkillMap` of the form: `[SkillEnum.ionic, { name: "Ionic", icon: "", faIcon: "code" }]` where the value under `faIcon` is the icon you want from Font Awesome 4.
- (optional) Set the `showAsDefault` field to false if you don't want to see this skill in the SkillSection (only to be used within portfolios)

## Contact
For each social contact link you want, add an entry to `socialIconList`. The icons used here are all Font Awesome 4 icons.

## Future Features
These are a list of things I might introduce into the project:
- More animations when the user scrolls to certain sections
- Add a header with all the sections available in the website. On click of the section, it will auto scrol; to the section

## Troubleshooting Information
### Bugs
It seems that `react-snap` prevents the classes being applied on the landing page - this results in no animations being played after `react-snap` is run. I'll have to see how I can fix this.

### Windows
- If an issue is encountered around running `npm start` try: `npm i -g react-scripts`

### OSX
 - No reported problems

### Linux
- No reported problems

## License
MIT. See [LICENSE.md](LICENSE.md) for more.