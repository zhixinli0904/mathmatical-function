//created an object that has no data
var classroom={
	classnumber:"f103",
  students:18,
};
var userIput= prompt("classnumber or students?");
var lowercase=userIput.toLowerCase();
if ((lowercase === "classnumber") || (lowercase === "students")){
	window.alert(classroom[lowercase]);
}
//given 3 more trys to give answers
else {
	for (i=1;i<3;i++){
  var userIput= prompt("classnumber or students?. you have tried " +i + "times");
	var lowercase=userIput.toLowerCase();
	if ((lowercase === "classnumber") || (lowercase === "students")){
  i=3;
	window.alert(classroom[lowercase]);
  	}
	}
}