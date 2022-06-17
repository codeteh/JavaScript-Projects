A = 10
function Mult_numbers_1 () {
	var B = 0.5;
	document.write((10 * A) + "<br>");
	document.write(((10 * A)*(B)) + "<br>");
	console.log((10 * A) + "<br>");
	console.log(((10 * A)*(B)) + "<br>");
}
function Add_numbers_1() {
	document.write((A + 90) +"<br>");
	document.write(A + B) +"<br>"; 
	console.log((A + 90) +"<br>");
	console.log(A + B) +"<br>";
}


if (1 < 2) {
	document.write (" The left number is smaller than the number on the right. <br> ")
}

function get_Date() {
	if (new Date().getHours() <23) {
	document.getElementById("Greeting").innerHTML = "How are you today?";
	}
}






Mult_numbers_1();
Add_numbers_1();
