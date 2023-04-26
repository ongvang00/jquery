//Create a function that will fire when the submit <button> is clicked
const submitBtn = $('#submit').on("click", function(){
    console.log ("submitBtn is clicked")
//create variables for each of the form inputs
    const nameInput = $('#name').val();
    const emailInput = $('#email').val();
    const phoneInput = $('#phone').val();
    const labelTag = $("label");
    const labelWarningClass = $(".warning")
 
//create an array named required
    const required = [nameInput, emailInput, phoneInput];
    
//Utilize a for loop to iterate of the entire required array   
    for(let i=0; i<3; i++){ 
//if the array item is equal to an empty string ("") populate the message <p> with the following text:
      let elmLabel = required[i].prev();
    if (required[i] === ""){
            $("#message").html("Please fill out the required fields");
//add the warning class to this message
////Attach the warning class to the array item's <label>
//note: You want the label to turn red, if the field is empty
        
            $("#message").attr("class","warning");
            $("label").addClass("warning");
            required[i].prev().attr("class", "warning");
        } else {
//once the field has something other than a blank string. make sure the warning class is removed
            $("#message").html("");
            elmLabel.removeClass("warning");

        }
//close out the for loop
}

    if (!($("label").hasClass("warning"))){
  
//remove the form from the DOM
    $('#form').remove();
    
//manipulate the <h2> to say: "Thanks for your feedback!"
    $("h2").html("Thanks for the feedback");
    
    return true 
}
}
)
