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