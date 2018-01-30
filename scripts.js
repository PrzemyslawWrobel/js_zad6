var a = prompt ("Podaj zmienną a = "),
	b = prompt ("Podaj zmienną b = "),
	value = ((a*a) - (2*a*b) + (b*b));

console.log("wynik to: " + value);

if (value < 0) {
	alert("Wynik Ujemny" + value);
	console.log("wynik jest ujemny")
} else if (value > 0){
	alert("Wynik Dodatni" + value);
	console.log("Wynik jest dodatni")
}else if (value === 0) {
	alert("wynik równy " + value);
	console.log("wynik równy zero");
} else {
	alert("Podaj wartość zmiennej");
	console.log("Podaj wartość zmiennej")
}



//alert('value, value ');

//console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
// 