const fs = require('fs');

// function for README file, checks if directory exists if not, creates then writes
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        const dir = "./dist"

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, err => {
                if (err) {
                    reject(err);
                    return;
                }
            });  
        }
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: "File created!"
            });
        });
    });
    
}

module.exports = writeToFile;