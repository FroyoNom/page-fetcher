let args = process.argv.slice(2);
const fs = require("fs");
const request = require("request");

let url = process.argv[2];
let filepath = process.argv[3];

if (args.length < 2) {
  console.error("Missing arguments");
} else {
  request(args[0], (error, response, body) => {
    fs.writeFile(args[1], body);
    let stat = fs.statSync(args[1]);
    console.log(
      `Saved ${url} to ${filepath}. File contains ${stat.size} bytes.`
    );
  });
}
