/**
 * Created by ziberman on 10.03.17.
 */

const fs = require('fs');
//const path = require('path');

const getFiles = function (dir, files_) {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};

const checkFiles = function (arr) {
    for (var i in arr) {
        //console.log(arr[i]);
        var regexp = /\w+[.]html/;
        //console.log(regexp.test(arr[i]));
        if (regexp.test(arr[i])) {
            var currentFile = readFiles(arr[i]);
            console.log('____________________');
            console.log(currentFile.toString());
            console.log('____________________');
        }

    }
};

const readFiles = function (str) {
    var contentFile = fs.readFileSync(str);
    return contentFile;
};

var x = getFiles('.');
checkFiles(x);