var BucketListEntry = function( params ){
  if ( params['_id'] ) this._id = params._id;
  if ( params['countryId'] ) this.countryId = params.countryId;
  if ( params['date'] ) this.date = params.date;
  if ( Object.keys( params ).includes( 'completed' ) ) this.completed = params.completed
}

BucketListEntry.prototype.complete = function(){
  this.completed = true;
}

module.exports = BucketListEntry;