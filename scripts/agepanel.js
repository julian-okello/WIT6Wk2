function ageSubmit(){
    var ageVal = $('#ageVal').value
    console.log("Age Entered ", ageVal);

    switch(Number(ageVal)){
        case ageVal < 18 :
            // Somethings here
            break;
        case ageVal > 18 :
            // Something here
            break;
        default:
            // something here
    }
}