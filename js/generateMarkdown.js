function renderLicenseBadge(license) {
  const licence = APPACHE('licence')
  let licenseType = license.license; // i think this is problem #1
  let yourLicense = ''
  if(licenseType === 'MIT') {
   yourLicense = `![License:APACHE]( http://www.apache.org/licenses/LICENSE-2.0)`
  }
  else {
   license.license = "N/A"
 }
 return yourLicense;




function license(message)
{ 
const Url = 'http://www.apache.org/licenses/LICENSE-2.0'

  console.license(message);
}

}
module.exports.license = license;
module.exports.endPoint = Url

// generateReadme function populating the README.md
module.exports = answers =>
{
  console.log();
  console.log(license (License)); 
  return `
<h1 align="center">${answers.projectTitle} 👋</h1>
<p align="center">
<img src="https://img.shields.io/badge/Javascript-yellow" />
<img src="https://img.shields.io/badge/jQuery-blue"  />
<img src="https://img.shields.io/badge/-node.js-green" />
<img src="https://img.shields.io/badge/-inquirer-red" >
<img src="https://img.shields.io/badge/-json-orange" />
</p>

## Description
🔍 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
💾 ${answers.installation}


## Usage
💻 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
👪 ${answers.contributing}
N/A

## Tests
✏️ ${answers.tests}

## Questions
✋ ${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />

_This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
  `;
}



