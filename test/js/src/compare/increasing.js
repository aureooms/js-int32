

test( "increasing", function () {

	ok( int32.increasing( int32.min, int32.max )   < 0, "int32 <" );
	ok( int32.increasing( int32.max, int32.max ) === 0, "int32 = (max)" );
	ok( int32.increasing( int32.min, int32.min ) === 0, "int32 = (min)" );
	ok( int32.increasing( int32.max, int32.min )   > 0, "int32 >" );

});
