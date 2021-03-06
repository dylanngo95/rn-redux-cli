var inquirer = require('inquirer');

module.exports = function getFolder(message, callback) {
    var options = [
        {
            name: "getFolder",
            message: message,
            type: "input",
            validate: function validateFirstName(value) {
                if (value) {
                  return true;
                } else {
                  console.log('please ' + message);
                  return false;
                }
              }
        }
    ];

    inquirer.prompt(options).then(res => {
        callback(res.getFolder);
    });
}
