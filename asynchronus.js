// Write an asynchronous function 
// that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.
async function  logmessageDelay (message,delay){
    await new Promise(resolve => setTimeout(resolve,delay));
    console.log(message)
}
logmessageDelay("Hello,Nancy", 5000);

// You have an array of user IDs and a function 
// getUserData(id) that returns a Promise with user data when 
// given a user ID. Write an asynchronous function that fetches and logs
//  the data for each user ID one by one, in sequence.
let userid=[32883302,49028032]
idnumber=userid[0]
let promise=new Promise(function(resolve,reject){
if(idnumber){
    resolve(idnumber)
}
else{
    reject("id details not found")
}
}).then(()=>{
  return(idnumber+=1)
}).
catch(()=>{
return("id not found");
})
const getuser_details=async()=>{
    let response=await promise
    console.log({response});
}
getuser_details();


// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the task is successful, 
// and a custom error message if there's an error.
let performtask=true
let thepromise=new Promise(function(resolve,reject){
if(performtask){
    resolve("the task is completed")
}
else{
    reject("Kindly complete the task!")
}
}).then(()=>{
  return("congratulations")
}).catch(()=>{
return("try again next time");
}).finally(()=>{
    return("atleast i attempted");
})
// console.log({thepromise})
const performTask=async()=>{
    let feedback=await thepromise
    console.log({feedback});
}
performTask()







