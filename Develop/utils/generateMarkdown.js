// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const licenseLink = renderLicenseLink(license);
  console.log(licenseLink)
  console.log(license)

  if (!licenseLink) {
    return ''; // Return an empty string if the license is not recognized
  }

  return `## License

This project is licensed under the [${license} License](${licenseLink})`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
  ${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)

## Installation

1. Clone the repository \`git clone git@github.com:${data.github}/${data.githubUrl}.git\`
2. Navigate to the project directory \`cd ./${data.githubUrl}\`
3. Install dependencies \`npm i inquirer@v8.2.4\`


## Usage
1. Run the application using: 
\`\`\`node ${data.file}\`\`\`

${renderLicenseSection(`${data.license}`)}


## Contributing

To contribute:

1. Create a new branch
2. Make your changes
3. Submit a pull request

## Test

${data.test}


## Questions

Contact information for any questions:

Github Profile: [${data.github}](https://github.com/${data.github})

Link to Repo: [${data.githubUrl}](https://github.com/${data.github}/${data.githubUrl})

Email: [${data.email}](emailto:${data.email})
`;
}

module.exports = generateMarkdown;
