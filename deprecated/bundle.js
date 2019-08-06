(function(){
    function r(e,n,t){
        function o(i,f){
            if(!n[i]){
                if(!e[i]){
                    var c="function"==typeof require&&require;
                    if(!f&&c)return c(i,!0);
                    if(u)return u(i,!0);
                    var a=new Error("Cannot find module '"+i+"'");
                    throw a.code="MODULE_NOT_FOUND",a
                }
                var p=n[i]={exports:{}};
                e[i][0].call(p.exports,function(r){
                    var n=e[i][1][r];
                    return o(n||r)
                },p,p.exports,r,e,n,t)
            }
            return n[i].exports
        }
        for(var u="function"==typeof require&&require,i=0;i<t.length;i++)
            o(t[i]);
        return o
    }
    return r
})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
function donorLook() {
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
    //const readline = require('readline');
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
    // let userin = readline.createInterface({
    // 	input: process.stdin,
    // 	output: process.stdout
    // });
    var userin = prompt("Search for a donor ");
    //userin.question("Search for a donor ", function(userin) {
    if (userin != null) {
        donors.forEach(function (value) {
            if (value.lname.toLowerCase().search(userin) != -1) {
                console.log(value);
            }
            else if (value.fname.toLowerCase().search(userin) != -1) {
                console.log(value);
            }
            else if (value.id.toLowerCase().search(userin) != -1) {
                console.log(value);
            }
            else if (value.fullname.toLowerCase().search(userin) != -1) {
                console.log(value);
            }
        });
    }
    //});
} //end myFunction()

},{"fs":1}]},{},[2]);
