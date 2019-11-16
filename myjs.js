function changeBackground() {
	var r=Math.floor(Math.random()* 256).toString();
	var g=Math.floor(Math.random()* 256).toString();
	var b=Math.floor(Math.random()* 256).toString();
	var color= "rgb("+r+","+g+", "+b+")";
	document.body.style.backgroundColor=color;
}