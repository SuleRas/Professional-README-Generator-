// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseLinks = {
    MIT:`[![Github License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]`,
    APACHE:`[![Github License: GitHub](https://img.shields.io/badge/Apache-License-green.svg)]`,
   
  };
  return licenseLinks[license]
  
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Project title :
   ${data.title}

   
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [GitHub](#questions)
  

  
  ## Description : 
  ${data.Description}
  ## Installation :
  ${data.Installation}
  ## Usage :
  ${data.Usage}
  ## License : 
  ${data.license}
  ## Contributing ;
   ${data.Contributing}

 ## Questions
 For any questions please contact me directly at ${data.Email} or visit my GitHub profile https://github.com/${data.Github}.
  `
  ;
}

module.exports = generateMarkdown;
