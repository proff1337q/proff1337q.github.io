function calc() {
    a = document.forms['f'].a.value;
	b = document.forms['f'].b.value;
	c = document.forms['f'].c.value;
	
	d = b * b - 4 * a * c;

	if (d < 0) {
		document.forms['f'].d.value = d;
		document.forms['f'].x1.value = '';
		document.forms['f'].x2.value = '';
	} else {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		document.forms['f'].d.value = d;
		document.forms['f'].x1.value = x1;
		document.forms['f'].x2.value = x2;
	} 
	
}