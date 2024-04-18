const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    return {
      code: 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';',
    };
  },
};


// const path = require('path');

// module.exports = {
//   process(src, filename, config, options) {
//     // Here we're simulating transforming the content of JSON files into a module
//     // that exports the JSON object. This is a simplified example.
//     const json = JSON.parse(src);
//     const transformedCode = `module.exports = ${JSON.stringify(json)};`;

//     return {
//       code: transformedCode,
//     };
//   },
// };
