
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
    for(let i=0; i<1; i++){ 
//if the array item is equal to an empty string ("") populate the message <p> with the following text:
        if (required[i] == ""){
            $("#submit").before(`<p>"Please fill out the required fields"</p>`);
//add the warning class to this message
////Attach the warning class to the array item's <label>
//note: You want the label to turn red, if the field is empty
        
            $("p").addClass("warning");
            $("label").addClass("warning");
        } else {
//once the field has something other than a blank string. make sure the warning class is removed
            $("label").removeClass("warning")

}
//close out the for loop
}
    if (labelTag !== labelWarningClass){
  
//remove the form from the DOM
 
$('#form').remove('#form');
    
//manipulate the <h2> to say: "Thanks for your feedback!"

$("h2:contains('We love to hear your thoughts!')").replaceWith("Thanks for your feedback!");
return true 
}
}
)


