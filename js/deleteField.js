function deleteField(){

    var fieldNumber = (document.getElementsByClassName('newFieldChild').length)-1;
    
    if (fieldNumber>0) {
        var inp = "newField_"+fieldNumber;
        console.log(fieldNumber);
        document.getElementById(inp).remove();
    }
    else if (fieldNumber==0) {
        document.getElementById('newField').remove();
    }
    else if (fieldNumber<0){
        alert('Nincs több törölhető mező!');
    }

    console.log(inp);
}

function deleteOption(optionNumber,fieldNumber){
    optionNumber = parseInt(optionNumber,10);
    fieldNumber = parseInt(fieldNumber,10);
    var fieldType='field_Type_'+fieldNumber;

    if(optionNumber>0) {
        for (var i=0; i<fieldNumber; i++){
            if(document.getElementById(fieldType)){
                var inp = "newOptionField_"+optionNumber;
                console.log(inp);
                document.getElementById(inp).remove();
            }
        }
    }
    else{
        alert('Ezt nem törölheted!');
    }
}