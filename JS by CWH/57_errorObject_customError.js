// Two propertys of error object: name , message

// try {
//   console.log(devi);
  
// } catch (error) {
//   console.log("error", error);
//   console.log("error message ", error.message);
//   console.log("error name", error.name);
// }


//custom error

try {
    let age = 200;
    if (age > 120) {

        //syntaxerror , internalerror 
        throw new ReferenceError("not true cant belive ");
        
    }
    
} catch (error) {

      console.log("error stack", error.stack);
  console.log("error message ", error.message);
  console.log("error name", error.name);
    
}

console.log("script is still running");