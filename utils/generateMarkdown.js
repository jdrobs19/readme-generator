// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  [Description](### Description)
  [Installation](### Installation)
  ### [Usage](#Usage)
  ### [Contributing](#Contributing)
  ### [Tests](#Tests)
  ### [License](#License)
  ### [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution Guidelines
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Questions
  [GitHub](${data.github})
  ### ${data.email}
  ### ${data.questions}

`;
}

module.exports = generateMarkdown;
