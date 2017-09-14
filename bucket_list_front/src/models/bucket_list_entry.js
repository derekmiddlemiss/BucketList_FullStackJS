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