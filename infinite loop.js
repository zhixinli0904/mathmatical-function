var classroom={
	classnumber:"f103",
  students:18,
};
var userIput= prompt("classnumber or students?");
var lowercase=userIput.toLowerCase();
if ((lowercase === "classnumber") || (lowercase === "students")){
	window.alert(classroom[lowercase]);
}
else {
	tryagain();
}
function tryagain(){
	var classroom={
	classnumber:"f103",
  students:18,
};
var userIput= prompt("classnumber or students?");
var lowercase=userIput.toLowerCase();
if ((lowercase === "classnumber") || (lowercase === "students")){
	window.alert(classroom[lowercase]);
}
else {
	tryagain();
}
}