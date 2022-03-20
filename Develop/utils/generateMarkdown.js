// Returns a license badge if any option other than "None" is selected.
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return`
  ![License](https://img.shields.io/badge/License-${license}-blue.svg)
  `;
}

// License link is added to table of contents if any option other than "None" is selected.
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return`* [License](#license)`;
}

// License section only exists if a license is selected. If "None" is selected, the section won't appear.
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License`;
}

// Function to generate markdown for readme
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of contents
  ${renderLicenseLink(data.license)}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.tests}
  ## Questions
  GitHub: https://github.com/${data.githubUser}
  For any additional questions or information, please contact me.
  [${data.email}](mailto:${data.email})
  
  
`;
}

module.exports = generateMarkdown;

