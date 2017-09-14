var BucketListEntry = require( './bucket_list_entry' );

var BucketList = function( url ){
  this.url = url;
  this.entries = [];
  this.onUpdate = null;
}

BucketList.prototype.addEntry = function( bucketListEntry ){

  var request = new XMLHttpRequest();
  request.open( 'POST', this.url )
  request.setRequestHeader("Content-Type", "application/json");
  request.addEventListener( 'load', function(){
    if( request.status === 200 ){
    var addedBucketListEntry = new BucketListEntry( JSON.parse( request.responseText ) );
    if ( addedBucketListEntry !== null ) {
      this.entries.push( addedBucketListEntry );
    } else {
      alert( "Country already on list. Not added" );
    }
  });
  request.send( JSON.stringify( bucketListEntry ) );

}

module.exports = BucketList;