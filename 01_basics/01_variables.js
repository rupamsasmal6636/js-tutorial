const accountId = 12512; // used to store permanent value
var password = "Rupam@123" // issue in block scope so should be avoid now
let emailId = "rupamsasmal@gmail.com" // this is better than var
city = "Arambagh" 
let country;

// accountId = 2; // can't change const 
emailId= "rupamsasmal66@gmail.com"
password= "Rupam123@"
city= "Khanakul"

console.log("id: " + accountId);

console.table([accountId,emailId, password, city, country]);