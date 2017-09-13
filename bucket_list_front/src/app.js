var CountryList = require( './models/CountryList' );


var app = function() {

  var countryList = new CountryList( 'http://localhost:3000/api/countries' );
  countryList.onUpdate = function( countries ){
    console.log( countries );
  };
  countryList.getCountries();

}


window.addEventListener( 'load', app );
