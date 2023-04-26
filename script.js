
$(document).ready(function() {
//Create a function that will fire when the submit <button> is clicked
    $('#submit').on('click', function(e) {
        e.preventDefault();
//create variables for each of the form inputs
        let name = $("#name");
        let email = $("#email");
        let phone = $("#phone");
//create an array named required
        let required = [name, email, phone];
//Utilize a for loop to iterate of the entire required array
        for(let item of required) {
//use an if statement to check the value of each array item
//if the array item is equal to an empty string ("")
            if (item.val() == "") {
//populate the message <p> with the following text:
//"Please Fill Out Required Fields
                $("#message").text("Please Fill Out Required Fields");
//add the warning class to this message
                $("#message").addClass("warning");
//Attach the warning class to the array item's <label>
                item.prev('label').addClass('warning');
            }
//once the field has something other than a blank string. make sure the warning class is removed
            else {
                item.prev('label').removeClass('warning'); 
            }
//close out the for loop
        }
//utilize another if statement
//verify that no <label>'s have the warning class
        if(!$('label').hasClass('warning')) {
//remove the form from the DOM
            $('#form').remove(); 
//manipulate the <h2> to say: "Thanks for your feedback!"
            $('#pre-form > h2').text('Thanks for your feedback!');
//close your function
        }
    });
});