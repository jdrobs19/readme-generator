// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Table of Contents
  * [Description](###Description)
  * [Installation](###Installation)
  * [Usage](###Usage)
  * [Contributing](###Contributing)
  * [Tests](###Tests)
  * [License](###License)
  * [Questions](###Questions)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## License
  ${answers.license}

  ## Questions
  [GitHub](${answers.github})
  ### ${answers.email}
  ### ${answers.questions}

`;
}

module.exports = generateMarkdown;
