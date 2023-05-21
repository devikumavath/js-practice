// try {
//   let a = 0;
//   // console.log(name);
//   console.log("Program ran successfully - try clause ");
// } catch (error) {
//   console.log("I will run when there is error in try - catch clause");

//   // console.log(classes);
// } finally {
//   console.log("I will run always  no matter if there is error in try or catch - finally clause ");
//   // used for final cleanup
//   //close the file
//   //exit loop
//   // write to log file

// }


const f = () => {
    try {
        let a = 0;
        // console.log(name);
        console.log("Program ran successfully - try clause ");
        return
      } catch (error) {
        console.log("I will run when there is error in try - catch clause");
      
        // console.log(classes);
      } finally {
        console.log("I will run always  no matter if there is error in try or catch - finally clause ");
        // used for final cleanup
        //close the file
        //exit loop
        // write to log file
      
      }

      console.log("end");
}


f();