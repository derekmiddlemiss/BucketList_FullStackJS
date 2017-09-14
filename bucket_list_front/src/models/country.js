var Country = function( params ){
  if ( params['_id'] ) this._id = params._id;
  if ( params['name'] ) this.name = params.name;
  if ( params['region'] ) this.region = params.region;
  if ( params['coords'] ) this.coords = params.coords; 
}

module.exports = Country;