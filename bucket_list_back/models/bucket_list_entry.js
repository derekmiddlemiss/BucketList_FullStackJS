var BucketListEntry = function( countryId, date ){
  this.countryId = countryId;
  this.date = date;
  this.completed = false
}

BucketListEntry.prototype.complete = function(){
  this.completed = true;
}

