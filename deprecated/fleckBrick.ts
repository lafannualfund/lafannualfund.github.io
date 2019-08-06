	class Donor{
		id: string;
		fname: string;
		lname: string;
		year: number;
		pos: string;
		fullname: string;
		constructor(id:string, fname:string, lname:string, year: any, pos: string){
			this.id = id;
			this.fname = fname;
			this.lname = lname;
			this.year = year;
			this.pos = pos;
			this.fullname = fname + " " + lname;
		}
	}

	const readline = require('readline');
	const fs = require('fs');
	let splits: string[];
	let donors: Donor[] = [];

	fs.readFile('FY19 Final Brick List.txt', function(err,data){
		if(err){
			return console.log(err);
	 	}
	 	splits = data.toString().split('\n');
	 	for(let i = 0; i < splits.length-1; i++){
	 		let info = splits[i].split('\t'); 		
	 		let d: Donor = new Donor(info[0],info[1],info[2],info[3],info[4].trim());
	 		donors.push(d);
	 	}
	});

	let userin = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	//let userin = prompt("Search for a donor ");
	userin.question("Search for a donor ", function(userin) {
		if(userin != null){
			donors.forEach(function(value){
				if(value.lname.toLowerCase().search(userin)!= -1){
					displayInfo(value);
				}
				else if(value.fname.toLowerCase().search(userin)!= -1){
					displayInfo(value);
				}
				else if(value.id.toLowerCase().search(userin)!= -1){
					displayInfo(value);
				}
				else if(value.fullname.toLowerCase().search(userin)!= -1){
					displayInfo(value);
				}
			});
		}
		return;
	});
	function directions(pos: string){
		var result: string = "From the steps of Skillman Library, walk ";
		var str = pos;
		var row = str.charAt(0);
		var num = parseInt(str.substr(2,str.length));
		var inOut;
		var onThe;
		var leftRight;
		if(row === 'A' || row === 'B' || row === 'C' || row === 'D' ){
			if(row === 'A' || row === 'D') inOut = "outer row";
			else inOut = "inner row";
			if(num <= 700) leftRight = "left, down the straight path";
			else leftRight = "right, down the straight path";
			if(row ===  'A' || row === 'B') onThe = "right, ";
			else onThe = 'left, ';
		}
		else if (row === 'E' || row === 'F' || row === 'G' || row === 'H'){
			if(row === 'E' || row === 'H') inOut = "outer row";
			else inOut = "inner row";
			leftRight = "left and up the path that goes towards Kirby House";
			if(row === 'E' || row === 'F') onThe = "left, ";
			else onThe = "right, ";
		}
		else{
			if(row === 'I') onThe = "left";
			else onThe = "right";
			leftRight = "right and up the curved path that goes towards Pardee Hall";
			inOut = "";
		}
		result = result + leftRight + ". Brick will be on the " + onThe + inOut;
		return result;
	}
	function displayInfo(d: Donor){
		var dir: string = directions(d.pos);
		console.log(d);
		console.log(dir);
	}