//shelds.io to have badges
function renderLicenseBadge(license) {
    const licence = apache('licence')
    let licenseType = license.license; // i think this is problem #1
    let yourLicense = ''
    if(licenseType === 'MIT') {
     yourLicense = `![License:APACHE]( http://www.apache.org/licenses/LICENSE-2.0)`
    }
    else {
     license.license = "N/A"
   }
   return yourLicense;
function generateMarkdown(data) {
    return `
    # ${data.title}
    https://github.com/${data.username}/${data.Title}
    # Description
    ${data.Description}
    # Table of Contents
     * [Installation](#Installation)
     * [Usage](#Usage)
     * [License](#License)
     * [Contributing](#Contributing)
     * [License](#License)
     * [Tests](#Tests)
     * [Questions](#Questions)
     * Installiation](#installiation)
  The following dependancies must be installed to run the appliacation.
    # Usage
    In order to use this app ${data.Usage}
    # Contributing 
    👪 Contributing ${data.Contributing}
    # Licence
    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
      <br />
  This application is covered by the ${answers.license} license. 
    # Tests
    ✏️ the following are needed to run this tests ${data.Tests}
    ## Questions
    ✋ ${answers.questions}<br />
    <br />
    :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
    <br />
    ✉️ Email me with any questions: ${answers.email}<br /><br />
    
    This README was generated with ❤️ by [README_Generator](https://mekonnenke.github.io/README_Generator/)
  `;
  }
  
  module.exports = generateMarkdown;