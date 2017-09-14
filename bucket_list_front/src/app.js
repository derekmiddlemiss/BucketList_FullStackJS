var CountryList = require( './models/country_list' );
var BucketList = require( './models/bucket_list' );
var BucketListEntry = require( './models/bucket_list_entry' );
var CountryListView = require( './views/country_list_view' );


var app = function() {

  var countryList = new CountryList( 'http://localhost:3000/api/countries' );
  var selectView = new CountryListView( document.querySelector( '#country-select'))
  var bucketList = new BucketList( 'http://localhost:3000/api/countries' );
  var bucketListView = new bucketListView( document.querySelector())


  countryList.onUpdate = function( countries ){
    selectView.render( countries );
  };
  
  selectView.onChange = function( country ){
    var bucketListEntry = new BucketListEntry( country );
    bucketList.addEntry( bucketListEntry );
  }

  bucketList.onUpdate = function( bucketList ){

  }

  countryList.getCountries();

}


window.addEventListener( 'load', app );
