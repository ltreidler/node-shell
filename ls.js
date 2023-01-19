const fs = require('fs');

const ls = (done) => {
    fs.readdir('./', 'utf8', (err, files) => {
        if(err) throw err;
        else done('\n' + files.join('\n'));
    });
}


module.exports = {
    ls
}