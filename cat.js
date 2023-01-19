const {readFile} = require('fs');

const cat = (file, done) => {
    readFile(file, (err, data) => {
        if(err) throw err;
        else done(data);
    });
}

module.exports = {
    cat
}