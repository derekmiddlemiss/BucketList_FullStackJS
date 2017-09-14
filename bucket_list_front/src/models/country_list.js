var Country = require( './country' );

var CountryList = function( url ){
  this.url = url;
  this.countries = [];
  this.onUpdate = null;
}

CountryList.prototype.getCountries = function(){
  var request = new XMLHttpRequest();
  request.open( "GET", this.url );
  request.addEventListener( 'load', function(){
    if( request.status === 200 ){
      var jsonString = request.responseText;
      var fullCountryObjects = JSON.parse( jsonString );
      this.countries = CountryList.parseCountries( fullCountryObjects );
      this.onUpdate( this.countries );
    }
  }.bind( this ) );
  request.send();
}

CountryList.parseCountries = function( fullCountryObjects ){
  return fullCountryObjects.map( function( fullCountryObject ){
    return new Country( fullCountryObject );
  })
}


module.exports = CountryList;