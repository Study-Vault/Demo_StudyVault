
function openUnit(unitName) {
	var i;
	var x = document.getElementsByClassName("unit");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	document.getElementById(unitName).style.display = "block";  
}