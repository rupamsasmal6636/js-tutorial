/**
 * Here is some interesting things about object.. Have you ever thought is it possible to change the value of pi(3.14) in Math.PI?
 * It's not possible.. then why so??
 * It's because of The Math.PI property is read-only, meaning its value cannot be changed once it has been set.
 */

console.log(Math.PI);
Math.PI=5;
console.log(Math.PI); // value is unchanged

// Let's find out why?
const descriptor= Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor);

/*OUTPUT:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

1. Writable (writable):
Determines whether the value of the property can be changed or modified.
If set to false, attempts to modify the value will have no effect. If set to true or not specified, the property can be modified.

2. Enumerable (enumerable):
Determines whether the property will be listed during enumeration using for...in loops or Object.keys().
If set to false, the property will be skipped during enumeration.

3. Configurable (configurable):
Determines whether the property can be modified or deleted and whether its attributes can be changed.
If set to false, the property cannot be deleted, and its attributes cannot be modified.
*/

// Let's create own object and set property
let myObj = {
    id: 1242,
    name: "Rupam",
    role: "SDE",
    getBIO : function(){
        console.log("SDE at Google");
    }
}

console.log(myObj);
console.log(Object.getOwnPropertyDescriptor(myObj,'id'));
/* OUTPUT:
{ value: 1242, writable: true, enumerable: true, configurable: true }
*/
console.log(Object.getOwnPropertyDescriptors(myObj)); // it will return all properties of each key 
/* OUTPUT:
{
  id: { 
    value: 1242, 
    writable: true, 
    enumerable: true, 
    configurable: true 
  },
  name: {
    value: 'Rupam',
    writable: true,
    enumerable: true,
    configurable: true
  },
  role: {
    value: 'SDE',
    writable: true,
    enumerable: true,
    configurable: true
  },
  getBIO: {
    value: [Function: getBIO],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/

// Now set id non-unchangable
Object.defineProperty(myObj,'id',{
    writable: false
})

myObj.id=1227;
console.log("id: ", myObj.id); // id:  1242

// set 'role' unmodifiedable/deletable
Object.defineProperty(myObj,'role',{
    configurable: false
})

delete myObj.role; 
console.log("role: ", myObj.role); // role:  SDE -> still there

// before enumerable:
for (let [key, value] of Object.entries(myObj)) {
    if (typeof value !== 'function') { // if we don't use code faat skta hai due to function inside object        
        console.log(`${key} : ${value}`);
    }
}
// After : setting enumerable false: [we can do it together]
Object.defineProperties(myObj,{
    id : {
        enumerable: false,
        configurable: false
    },
    getBIO : {
        enumerable: false
    }
})
console.log(myObj); // OUTPUT -> { name: 'Rupam', role: 'SDE' }

for (let [key, value] of Object.entries(myObj)) {
    console.log(`${key} : ${value}`);
}

// see there is no 'id' & 'getBIO' when we iterate