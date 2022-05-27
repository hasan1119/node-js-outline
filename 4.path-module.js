const path = require('path');

console.log(__dirname); // return the full current directory path
console.log(__filename); // return the full current file path

const filePath = __filename;
path.basename(filePath) // take a file path or directory path and return the basename
path.dirname(filePath) // take a file path and return the directory path of the file
path.extname(filePath) // take a file path and return the file extension name.
path.isAbsolute(filePath) // take a path and return (true/false ) the path is absolute or not.
path.join('user', 'hasan', 'node', 'index.js') // take name and return the full path after joining
path.resolve('user', 'hasan', 'node//new', 'index.js') // take name and return the full path after joining
path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});
  
path.parse('/home/user/dir/file.txt'); // return a path object