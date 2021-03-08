//Declaration
//function showMessage() {
    //alert('I have declared this function. It has no parameters but has a function body. When I call it, this alert message shows in the DOM.');
    //or
//     console.log('I have declared this function. It has no parameters but has a function body. When I call it, this message shows in the console.');
// }
//     showMessage();

//Local variables
    // function showMessage() {
    // let message= "Hello, is this Javacsript?";  //local variable nb! all works with no let!!!
    //alert(message);   
//     console.log(message);                       //sees local variable
// }
//     showMessage();
    //alert(message);                           //doesn't see local variable
//    console.log(message);

//Outer variables
// let userName= 'Joshua';
// function showMessage() {
//     let message= 'Hello, ' + userName;
//     alert(message);
// }
//     showMessage();

//Outer and inner variables
    let userName= 'Joshua';
function showMessage() {
    let userName= "Benjamin";   //when does this change the  outer variable?
    let message= 'Hello, ' + userName;
    //alert(message);
    console.log(message);
}
    //alert(userName);
    console.log(userName); //shows Joshua when let or no let to userName= Benjamin
    showMessage();          //shows Hello, Benjamin let or no let to userName= Benjamin
    //alert(userName);
    console.log(userName); //shows Joshua when let to userName= Benjamin
                            //but shows Benjamin when NO let to userName= Benjamin