var Donor = /** @class */ (function () {
    function Donor(id, fname, lname, year, pos) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.year = year;
        this.pos = pos;
        this.fullname = fname + " " + lname;
    }
    return Donor;
}());
var readline = require('readline');
var fs = require('fs');
var splits;
var donors = [];
fs.readFile('FY19 Final Brick List.txt', function (err, data) {
    if (err) {
        return console.log(err);
    }
    splits = data.toString().split('\n');
    for (var i = 0; i < splits.length - 1; i++) {
        var info = splits[i].split('\t');
        var d = new Donor(info[0], info[1], info[2], info[3], info[4].trim());
        donors.push(d);
    }
});
var userin = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//let userin = prompt("Search for a donor ");
userin.question("Search for a donor ", function (userin) {
    if (userin != null) {
        donors.forEach(function (value) {
            if (value.lname.toLowerCase().search(userin) != -1) {
                displayInfo(value);
            }
            else if (value.fname.toLowerCase().search(userin) != -1) {
                displayInfo(value);
            }
            else if (value.id.toLowerCase().search(userin) != -1) {
                displayInfo(value);
            }
            else if (value.fullname.toLowerCase().search(userin) != -1) {
                displayInfo(value);
            }
        });
    }
    return;
});
function directions(pos) {
    var result = "From the steps of Skillman Library, walk ";
    var str = pos;
    var row = str.charAt(0);
    var num = parseInt(str.substr(2, str.length));
    var inOut;
    var onThe;
    var leftRight;
    if (row === 'A' || row === 'B' || row === 'C' || row === 'D') {
        if (row === 'A' || row === 'D')
            inOut = "outer row";
        else
            inOut = "inner row";
        if (num <= 700)
            leftRight = "left, down the straight path";
        else
            leftRight = "right, down the straight path";
        if (row === 'A' || row === 'B')
            onThe = "right, ";
        else
            onThe = 'left, ';
    }
    else if (row === 'E' || row === 'F' || row === 'G' || row === 'H') {
        if (row === 'E' || row === 'H')
            inOut = "outer row";
        else
            inOut = "inner row";
        leftRight = "left and up the path that goes towards Kirby House";
        if (row === 'E' || row === 'F')
            onThe = "left, ";
        else
            onThe = "right, ";
    }
    else {
        if (row === 'I')
            onThe = "left";
        else
            onThe = "right";
        leftRight = "right and up the curved path that goes towards Pardee Hall";
        inOut = "";
    }
    result = result + leftRight + ". Brick will be on the " + onThe + inOut;
    return result;
}
function displayInfo(d) {
    var dir = directions(d.pos);
    console.log(d);
    console.log(dir);
}
