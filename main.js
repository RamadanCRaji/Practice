et singleInstance = null; // this will hold our single instance (that is the object that we will create)
function Singleton() {
  if (singleInstance) {
    return singleInstance; // each time we call this function with 'new' we have it checks if single instance is holding an object or not. aka is there already an instance that has been created. At the first instance it is no so this never runs
  }
  singleInstance = this; // this is pointing to the empty object that was just created
}
// the word new just creates an empty object{} at first

var obj1 = new Singleton(); // at this point new creates an empty object. it goes it then goes into the constructor function. SingleInstance is already null so it skips the first conditional and moves to the second line. it takes that empty object and give it to SingleInstance. It now holds the empty object aka that empty object is bound to SingleInstance or we can say that SIngleInstance points to that instance( which has a name now called obj1). (this is refering to that empty object). there is no explicit return of the object then js automatically does that. the new instance gets a name called obj1




