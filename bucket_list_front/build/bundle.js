/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var CountryList = __webpack_require__( 2 );
var BucketList = __webpack_require__( 5 );
var BucketListEntry = __webpack_require__( 6 );
var CountryListView = __webpack_require__( 4 );


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


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Country = __webpack_require__( 3 );

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var Country = function( params ){
  if ( params['_id'] ) this._id = params._id;
  if ( params['name'] ) this.name = params.name;
  if ( params['region'] ) this.region = params.region;
  if ( params['coords'] ) this.coords = params.coords; 
}

module.exports = Country;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var CountryListView = function( DOMelement ){
  
  this.DOMelement = DOMelement;
  this.countries = [];
  this.onChange = undefined;

  this.DOMelement.addEventListener( 'change', function( event ){
    var index = event.target.selectedIndex;
    var country = this.countries[ index ];
    this.onChange( country );
  }.bind( this ) )



}

CountryListView.prototype.render = function( countries ){

  this.countries = countries;
  while( this.DOMelement.firstChild ){
    this.DOMelement.removeChild( this.DOMelement.firstChild )
  };

  this.countries.forEach( function( country, index ){
  
    var option = document.createElement( 'option' )
    option.innerText = country.name;
    option.value = index;

    this.DOMelement.appendChild( option );

  }.bind( this ));

}

module.exports = CountryListView;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/derekmiddlemiss/CODECLAN_WORK/WEEK_12/DAY_03/bucket_list/bucket_list_front/src/models/bucket_list.js Unexpected token (22:3)\nYou may need an appropriate loader to handle this file type.\n|       alert( \"Country already on list. Not added\" );\n|     }\n|   });\n|   request.send( JSON.stringify( bucketListEntry ) );\n| ");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var BucketListEntry = function( params ){
  if ( params['_id'] ) this._id = params._id;
  if ( params['countryId'] ) this.countryId = params.countryId;
  if ( Object.keys( params ).includes( 'completed' ) ) {
    this.completed = params.completed;
  } else {
    this.completed = false;
  }
}

BucketListEntry.prototype.complete = function(){
  this.completed = true;
}

module.exports = BucketListEntry;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map