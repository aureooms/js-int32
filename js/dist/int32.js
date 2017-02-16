( function ( ) {

'use strict' ;

var definition = function ( exports , undefined ) {


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

return exports ;
} ;
if ( typeof exports === "object" ) {
	definition( exports ) ;
}
else if ( typeof define === "function" && define.amd ) {
	define( "@aureooms/js-int32" , [ ] , function ( ) { return definition( { } ) ; } ) ;
}
else if ( typeof window === "object" && typeof window.document === "object" ) {
	definition( window["int32"] = { } ) ;
}
else console.error( "unable to detect type of module to define for @aureooms/js-int32") ;
} )( ) ;
