var Donor = /** @class */ (function () {
	function Donor(id, fname, lname, year, pos) {
	this.id = id;
	this.fname = fname;
	this.lname = lname;
	this.year = year;
	this.pos = pos;
	this.fullname = fname + " " + lname;
	this.dir = "";

		function toString(){
			return this.fname + " " + this.lname + " " + this.year + " " + this.pos;
		}
	}
	return Donor;
}());

function readSingleFile(evt) {
	//Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 
    if (f) {
        var r = new FileReader();
        r.onload = function(e) { 
            var contents = e.target.result; 
            document.getElementById('area').value = contents;
        }
        	
        r.readAsText(f);
    } else { 
        alert("Failed to load file");
    }
    console.log("File fully loaded")
}

var count = 0;
var options = [];
var listBackup = [];
function search(evt){
	var donors = document.getElementById('area').value;
	var splits = donors.split('\n');
	var donorList = [];
	for(var i = 0; i < splits.length-1; i++){
		var info = splits[i].split('\t'); 		
		var d = new Donor(info[0],info[1],info[2],info[3],info[4].trim());
		donorList.push(d);
	}
	listBackup = donorList;
	var userin = document.getElementById('searchbar').value.toLowerCase();
	if(userin.length >= 1){
		donorList.forEach(function(value){
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
	finish();
	count = 0;
	options = [];
	return;
}

function displayInfo(d){
	options[count++] = d;
}

function finish(){
	var select = document.getElementById('results');
	while(select.length>0){
		select.remove(select[0]);
	}
	if(options.length>0){
		for(var i = 0; i < options.length; i++){
			select.options[i] = new Option(options[i].fullname + " " + options[i].year + "\n", options[i].pos);
		}
	} else {
		select.options[0] = new Option("No brick found, press 'Go' for more information", "err");
	}
	document.getElementById('results').options[0].selected = true;
}

function processDisplay(evt){
	var proVal = document.getElementById('results').value;
	if(proVal === "err"){
		document.getElementById('directions').innerHTML = "Information goes here"
	}
	listBackup.forEach(function(value){
		if(value.pos === proVal){
			document.getElementById('brickFname').innerHTML = value.fname;
			document.getElementById('brickLname').innerHTML = value.lname;
			document.getElementById('brickYear').innerHTML = value.year;
			document.getElementById('brickRender').style.display = "initial";
			var dir = generateDirections(value.pos);
			document.getElementById('directions').innerHTML = dir;
			return;
		}
	});
}

function generateDirections(pos){
	var result = "From the steps of Skillman Library, walk ";
	var str = pos;
	var row = str.charAt(0);
	var num = parseInt(str.substr(2,str.length));
	var inOut;
	var onThe;
	var leftRight;
	var enhanced;
	var quadrant;
	if(row === 'A' || row === 'B' || row === 'C' || row === 'D' ){
		if(row === 'A' || row === 'D') inOut = "outer row";
		else inOut = "inner row";
		if(num <= 796){ 
			if(row ===  'A' || row === 'B') onThe = "right, ";
			else onThe = 'left, ';
			leftRight = "left, down the straight path towards Markle Hall. ";
			if(num<=8) {
				quadrant = 1;
				enhanced = "Continue all the way down, close to High Street. The brick is located between the road and the light pole";
			} else if(num<=150){
				quadrant = 2;
				enhanced = "Continue past four light poles. The brick is located between the fourth and fifth light pole";
			} else if(num<=169){
				quadrant = 3;
				enhanced = "Continue until you reach the intersecting path. The brick is located between the path and the next light pole";
			} else if(num<=227){
				quadrant = 4;
				enhanced = "Continue until you reach the intersecting path. The brick is located directly upon the intersection";
			} else if(num<=327) {
				quadrant = 5;
				enhanced = "Continue past three light poles. The brick is located between the third light pole and the intersecting path";
			} else if(num<=508) {
				quadrant = 6;
				enhanced = "Continue past two light poles. The brick is located between the second and third light pole";
			} else if(num<=690) {
				quadrant = 7;
				enhanced = "Continue to the first light pole. The brick is located between the first and second light pole";
			} else {
				quadrant = 8;
				enhanced = "The brick is located before the first light pole";
			}
		} else {
			if(row ===  'A' || row === 'B') onThe = "left, ";
			else onThe = 'right, ';
		 	leftRight = "right, down the straight path towards Colton Chapel. ";
		 	if(num<=914) {
		 		quadrant = 9;
		 		enhanced = "The brick is located before the first light pole";
		 	} else {
		 		quadrant = 10;
		 		enhanced = "The brick is located between the light pole and the end of the straight path";
		 	}
		}
		
	}
	else if (row === 'E' || row === 'F' || row === 'G' || row === 'H'){
		if(row === 'E' || row === 'H') inOut = "outer row";
		else inOut = "inner row";
		leftRight = "left and up the path that goes towards Kirby House. ";
		if(row === 'E' || row === 'F') onThe = "left, ";
		else onThe = "right, ";
		if(num<=115) {
			quadrant = 11;
			enhanced = "The brick is located between the first two light poles";
		} else if(num<=280) {
			quadrant = 12;
			enhanced = "Continue past the second light pole on your left. The brick is located between the second and third light pole";
		} else {
			quadrant = 13;
			enhanced = "Continue past the third light pole on your left. The brick is located between the third light pole and the path that goes past Kirby House";
		}
	}
	else{
		if(row === 'I') onThe = "left";
		else onThe = "right";
		leftRight = "right and up the curved path that goes towards Pardee Hall. ";
		inOut = "";
		if(num<=160) {
			quadrant = 14;
			enhanced = "The brick is located before the two trees that are situated on either side of the path";
		} else {
			quadrant = 15;
			enhanced = "The brick is located past the two trees that are situated on either side of the path";
		}
	}
	result = result + leftRight + enhanced + ". Brick will be on your " + onThe + inOut + ".";
	boxdraw(quadrant);
	return result;
}

function boxdraw(quadrant){
	var box = document.getElementById('locator').style;
	box.display = "initial";
	box.transform = "rotate(initial)";
	box.transform = "translate(0px,0px)"
	switch(quadrant){
	 	case 1: //1: ABCD #<8 - High Street to First Lamp
	 		box.transform = "translate(0px,-5px)";
	 		break;
	 	case 2: //2: ABCD #<150 - First Lamp to Second Lamp
	 		box.transform = "translate(90%,-5px)";
	 		break;
	 	case 3: //3: ABCD #<169 - Second Lamp to Path Start
	 		box.transform = "translate(200%,-6px)";
	 		break;
	 	case 4: //4: ABCD #<227 - Path Start to Path End
	 		box.transform = "translate(300%,-6px)";
	 		break;
	 	case 5: //5: ABCD #<327 - Path End to Third Lamp
	 		box.transform = "translate(220%,-7px)";
	 		box.width = "50%";
	 		break;
	 	case 6: //6: ABCD #<508 - Third Lamp to Fourth Lamp 
	 		box.transform = "translate(500%,-7px)";
	 		break;
	 	case 7: //7: ABCD #<690 - Fourth Lamp to Fifth Lamp
	 		box.transform = "translate(500%,-7px)";
	 		break;
	 	case 8: //8: ABCD #<796 - Fifth Lamp to end of Left Section
	 		box.transform = "translate(600%,-8px)";
	 		break;
	 	case 9: //9: ABCD #<914 - Start of Rigth Section to Lamp
	 		box.transform = "translate(780%,-8px)";
	 		break;
	 	case 10: //10: ABCD #>914 - Lamp to End
	 		box.transform = "translate(900%,-8px)";
	 		break;
	 	case 11: //11: EFGH #<115 - Start to First Lamp
	 		box.transform = "translate(0px,-8px)";
	 		break;
	 	case 12: //12: EFGH #<280 - First Lamp to Second Lamp
	 		box.transform = "translate(0px,-8px)";
	 		break;
	 	case 13: //13: EFGH #>280 - Second Lamp to End
	 		box.transform = "translate(0px,4px)";
	 		break;
	 	case 14: //14: IJ #<160 - Start to Two Trees
	 		box.transform = "translate(0px,4px)";
	 		break;
	 	case 15: //15: IJ #>160 - Two Trees to End
	 		box.transform = "translate(815%,-350%) rotate(-60deg)";
	 		break;
	 	default: 
	 }
}