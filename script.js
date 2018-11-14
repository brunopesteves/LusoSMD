
/* CONTRASTE TAMANHO MAIOR */

function aumenta() {

	for (var i = 0; i < document.getElementsByClassName('fernando').length; i++) {

		document.getElementsByClassName('fernando')[i].style.fontSize = '5em';
	}

	for (var i = 0; i < document.getElementsByClassName('destaque').length; i++) {

		document.getElementsByClassName('destaque')[i].style.fontSize = '2em';
		document.getElementsByClassName('destaque')[i].style.lineHeight = '50px';
		}

	for (var i = 0; i < document.getElementsByTagName('p').length; i++) {

		document.getElementsByTagName('p')[i].style.fontSize = '3em' ;
		document.getElementsByTagName('p')[i].style.lineHeight = '60px' ;
		}

for (var i = 0; i < document.getElementsByTagName('h2').length; i++) {

		document.getElementsByTagName('h2')[i].style.fontSize = '3.5em' ;
		}

		for (var i = 0; i < document.getElementsByTagName('h3').length; i++) {

		document.getElementsByTagName('h3')[i].style.fontSize = '5em' ;
		}
	}


/* FONTE TAMANHO NORMAL */

function diminui() {
	
	for (var i = 0; i < document.getElementsByClassName('fernando').length; i++) {

		document.getElementsByClassName('fernando')[i].style.fontSize = '3.5em';
		}

	for (var i = 0; i < document.getElementsByClassName('destaque').length; i++) {

		document.getElementsByClassName('destaque')[i].style.fontSize = '1.25em';
		document.getElementsByClassName('destaque')[i].style.lineHeight = '30px';
		}

	for (var i = 0; i < document.getElementsByTagName('p').length; i++) {

		document.getElementsByTagName('p')[i].style.fontSize = '1.85em';
		document.getElementsByTagName('p')[i].style.lineHeight = '40px';
	}

	for (var i = 0; i < document.getElementsByTagName('h2').length; i++) {

		document.getElementsByTagName('h2')[i].style.fontSize = '2.5em' ;
		}

		for (var i = 0; i < document.getElementsByTagName('h3').length; i++) {

		document.getElementsByTagName('h3')[i].style.fontSize = '3em' ;
		}

	}

	


/* CONTRASTE INVERTIDO */

function mais() {

	for (var i = 0; i < document.getElementsByClassName('fernando').length; i++) {

		document.getElementsByClassName('fernando')[i].style.color = '#f9f9f9';
		
		}

	for (var i = 0; i < document.getElementsByClassName('destaque').length; i++) {

		document.getElementsByClassName('destaque')[i].style.color = '#f9f9f9';
		
		}

	for (var i = 0; i < document.getElementsByTagName('body').length; i++) {

		document.getElementsByTagName('body')[i].style.backgroundColor = '#0a0b07' ;
		}	


	for (var i = 0; i < document.getElementsByTagName('p').length; i++) {

		document.getElementsByTagName('p')[i].style.color = '#f9f9f9' ;

		}

	for (var i = 0; i < document.getElementsByTagName('h2').length; i++) {

		document.getElementsByTagName('h2')[i].style.color = '#f9f9f9';
	}

		for (var i = 0; i < document.getElementsByTagName('h3').length; i++) {

		document.getElementsByTagName('h3')[i].style.color = '#f9f9f9';

	}
}

/* CONTRASTE NORMAL */

function menos() {

	for (var i = 0; i < document.getElementsByClassName('fernando').length; i++) {

		document.getElementsByClassName('fernando')[i].style.color = ' #0a0b07';
		
		}

	for (var i = 0; i < document.getElementsByClassName('destaque').length; i++) {

		document.getElementsByClassName('destaque')[i].style.color = ' #0a0b07';
		
		}

	for (var i = 0; i < document.getElementsByTagName('body').length; i++) {

		document.getElementsByTagName('body')[i].style.backgroundColor = '#f9f9f9' ;
		}	


	for (var i = 0; i < document.getElementsByTagName('p').length; i++) {

		document.getElementsByTagName('p')[i].style.color = '#0a0b07' ;
	}

	for (var i = 0; i < document.getElementsByTagName('h2').length; i++) {
		document.getElementsByTagName('h2')[i].style.color = '#0a0b07' ;
		}

	for (var i = 0; i < document.getElementsByTagName('h3').length; i++) {
		document.getElementsByTagName('h3')[i].style.color = '#0a0b07' ;
		}

	}