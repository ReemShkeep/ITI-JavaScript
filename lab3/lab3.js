function Person(f,l){
this.firstname=f;
this.lastname=l;
}


 Person.prototype.getfullname=function(){
    console.log(this.firstname+' '+this.lastname);
 }
 const instance=new Person('Hend','Mohammed');
 console.log(instance);
 instance.getfullname();


// [5, 6, 7].sum()
 // Output: 18



//  Array.prototype.sum =function () {
//     let sum=0;
//      this.forEach((element)=> {
//      if ( typeof element === "number" ) {
//        sum+= element; }
//      else {
//        throw new Error('Target array must contain numbers only')
//       }
//                })
//               return sum; 
//           }            
//   console.log([5,6,7].sum())
      