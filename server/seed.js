/* class Seeder {
  constructor( collection, options ) {
     if ( !collection || !options ) {
      throw new Error( 'Please supply a collection to seed and options for seeding. Usage: Seed( collectionName, options ).' );
    } else {
      this.collection = this.getCollection( collection );
      this.options    = options;
	  
      if ( typeof this.collection !== 'undefined' ) {
        this.seed();
      } else {
        throw new Error( `Sorry, couldn't find the collection "${ collection }" to seed!` );
      }
    }
  }
  getCollection( collection ) {
    let collectionName = this.sanitizeCollectionName( collection );
    return collectionName === 'Users' ? Meteor.users : global[ collectionName ];
  }

  sanitizeCollectionName( collection ) {
    return collection[ 0 ].toUpperCase() + collection.slice( 1 );
  }
}
}

Seed = ( collection, options ) => {
  return new Seeder( collection, options );
}; */