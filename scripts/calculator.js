
$(document).ready(function() {
function add(n) {
	if (arguments.length == 1) {
		return function (next) {
			return n + next;
		}
	}
	else {
		return arguments[0] + arguments[1];
	}
}

function sub(n) {
	if (arguments.length == 1) {
		return function (next) {
			return n - next;
		}
	}
	else {
		return arguments[0] - arguments[1];
	}
}

function div(n) {
	if (arguments.length == 1) {
		return function (next) {
			return n / next;
		}
	}
	else {
		return arguments[0] / arguments[1];
	}
}

function mult(n) {
	if (arguments.length == 1) {
		return function (next) {
			return n * next;
		}
	}
	else {
		return arguments[0] * arguments[1];
	}
}

function clear() {
	$('textarea').val('');
}
var shouldCall = false;
var shouldClean = false;
//var isEnd = false;
var fnc;
	$('button').click(function(){
		var entry = $(this).attr('value').toString();
		var result = 0;
		console.log("clicked button is " + entry);
		//if (isEnd) clear();
		if ($.isNumeric(entry) || (entry === '.' && /^[0-9]+$/.test($('textarea').val()))) {
			if (shouldClean) {
				$('textarea').val(entry);
				shouldClean = false;	
			}
			else {
				$('textarea').val($('textarea').val() + entry);
			}		

		}
		else if (entry === '.') {
			alert("nope");
		}
		else {
			var num = Number($('textarea').val());
			if (shouldCall) {
				result = fnc(num);
				shouldCall = false;
			}
			else {
				result = num;
			}
			if (entry === 'CL') {
				clear();
				shouldCall = false;
				shouldClean = false;
			}
			else if (entry === '+') {
				$('textarea').val(result);
				fnc = add(result);
				shouldCall = true;
				shouldClean = true;
			}
			else if (entry === '-') {
				$('textarea').val(result);
				fnc = sub(result);
				shouldCall = true;
				shouldClean = true;
			}
			else if (entry === '/') {
				$('textarea').val(result);
				fnc = div(result);
				shouldCall = true;
				shouldClean = true;
			}
			else if (entry === 'x') {
				$('textarea').val(result);
				fnc = mult(result);
				shouldCall = true;
				shouldClean = true;
			}
			else if (entry === '=') {
				$('textarea').val(result);
				shouldCall = false;
				shouldClean = true;
				//isEnd = true;
			}
		}
	});
});