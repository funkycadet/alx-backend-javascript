const http = require('http');
const { readFile } = require('fs');

const host = 'localhost';
const port = 1245;

function countStudents(file) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(file, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200);
  switch (req.url) {
    case '/':
      res.write('Hello Holberton School!');
      res.end();
      break;

    case '/students':
      res.write('This is the list of our students\n');
      countStudents(process.argv[2].toString()).then((output) => {
        const outString = output.slice(0, -1);
        res.end(outString);
      }).catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
      break;

    default:
      res.writeHead(404);
      res.end('Cannot find the requested URL');
  }
});

app.listen(port, host, () => {
  console.log(`App is running on http://${host}:${port}`);
});

module.exports = app;
