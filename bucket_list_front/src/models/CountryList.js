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
      this.countries = JSON.parse( jsonString );
      this.onUpdate( this.countries );
    }
  }.bind( this ) );
  request.send();
}


module.exports = CountryList;