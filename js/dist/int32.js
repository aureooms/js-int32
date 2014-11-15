(function(exports, undefined){

	'use strict';


/* js/src/compare */
/* js/src/compare/decreasing.js */

var decreasing = function ( a, b ) {
	return b - a;
};

exports.decreasing = decreasing;

/* js/src/compare/increasing.js */

var increasing = function ( a, b ) {
	return a - b;
};

exports.increasing = increasing;

/* js/src/limits */
/* js/src/limits/max.js */

exports.max = Math.pow( 2, 31 ) - 1;

/* js/src/limits/min.js */

exports.min = - Math.pow( 2, 31 );

})(typeof exports === 'undefined' ? this['int32'] = {} : exports);
