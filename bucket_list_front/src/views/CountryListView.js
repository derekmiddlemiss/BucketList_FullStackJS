var CountryList = function( DOMelement ){
  
  this.DOMelement = DOMelement;
  this.countries = [];
  this.onChange = undefined;

  this.DOMelement.addEventListener( 'change', function( event ){
    var index = event.target.selectedIndex;
    var country = this.countries[ index ];
    this.onChange( country );
  })



}

CountryList.prototype.render = function( countries ){

  this.countries = countries;



} 