function ageSubmitted() {
    console.log("Reaching age submit fx");
    var ageVal = $('#ageVal').val();

    if (ageVal) {
        ageVal = Number(ageVal);
    }
    // https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than

    if (ageVal < 18 && ageVal > 0) {
        $('#resultBox').html("<span>Current User is a minor</span>");
    }

    if (ageVal >= 18 && ageVal <= 36) {
        $('#resultBox').html("<span>Current User is a youth</span>");
    }

    if (ageVal > 36) {
        $('#resultBox').html("<span>Current User is an elder</span>");
    }

    if (ageVal <= 0) {
        $('#resultBox').html("<span>Please Enter a valid age</span>");
    }

}