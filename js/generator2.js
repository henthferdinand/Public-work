// function addOptionValue(actualField,location){

    
//     var optionFieldNumber = (document.getElementsByClassName("newOptionChild").length);//lekéri, hogy hány opció van eddig összesen
//     var fieldNumber = (document.getElementsByClassName('newFieldChild').length)-1;//lekéri, hogy hány mező van eddig összesen

//     actualField  = parseInt(actualField,10);//az aktuális beviteli rész sorszáma  
//     //console.log(actualField);

//     location  = parseInt(location,10);//annak a mezőnek a sorszáma, ahova hozzá lett adva az opció
    
//     var fieldType='field_Type_'+fieldNumber;
//     var locationFieldType='form_temp_'+location;
    
//     if (actualField == 0){
//         var divId ="newOptionField_"+actualField;//az opció rész számozott ID-ja
//         actualField++;
//     }
//     else {
//         var tempChildNumber = document.getElementById(locationFieldType).childElementCount;
    
//         actualField = tempChildNumber-1;
//         var divId ="newOptionField_"+actualField;//az opció rész számozott ID-ja
//         console.log(actualField);
//     }

//     var value = document.getElementById(fieldType).value;//lekéri, hogy milyen mező típus lett kiválasztva
    
//     var formId= 'form_temp_'+location;//a beviteli rész számozott ID-ja
//     console.log(divId);

    
//     switch(value){

//         case "SelectList":
            
//                 var field =  '<div class="newOptionChild" name="field_number_'+optionFieldNumber+'" > <form id="optionInputForm_'+optionFieldNumber+'" > <label for="option_hun_label_'+optionFieldNumber+'">Magyar opció label:</label>  <input type="text" id="option_SelectList_hun_label_'+optionFieldNumber+'" name="hunLabel">  <label for="option_en_label_'+optionFieldNumber+'">Angol opció label:</label> <input type="text" id="option_SelectList_en_label_'+optionFieldNumber+'" name="enLabel"><button type="button" class="selectOptionButton"  onclick="addOptionValue('+actualField+','+fieldNumber+')" >Új opció</button><button type="button" class="deleteOptionButton" id="deleteOptionButtonId"  onclick="deleteOption('+actualField+','+fieldNumber+')" >X</button> </form> </div>';

//             break;

//         case "SelectOrOtherList":
            
//             var field =  '<div class="newOptionChild" name="field_number_'+fieldNumber+'" > <form id="optionInputForm_'+fieldNumber+'" > <label for="option_hun_label_'+fieldNumber+'">Magyar opció label:</label>  <input type="text" id="option_SelectOrOtherList_hun_label_'+fieldNumber+'" name="hunLabel">  <label for="option_en_label_'+fieldNumber+'">Angol opció label:</label> <input type="text" id="option_SelectOrOtherList_en_label_'+fieldNumber+'" name="enLabel"><button type="button" class="selectOptionButton"  onclick="addOptionValue()" >Új opció</button> <button type="button" class="deleteOptionButton" id="deleteOptionButtonId"  onclick="deleteOption('+fieldNumber+')" >X</button> </form> </div>';

//             break;

//         case "CheckboxArray":

//             var field =  '<div class="newOptionChild" name="field_number_'+fieldNumber+'" > <form id="optionInputForm_'+fieldNumber+'" > <label for="option_hun_label_'+fieldNumber+'">Magyar opció label:</label>  <input type="text" id="option_CheckboxArray_hun_label_'+fieldNumber+'" name="hunLabel">  <label for="option_en_label_'+fieldNumber+'">Angol opció label:</label> <input type="text" id="option_CheckboxArray_en_label_'+fieldNumber+'" name="enLabel"><button type="button" class="selectOptionButton"  onclick="addOptionValue()" >Új opció</button> <button type="button" class="deleteOptionButton" id="deleteOptionButtonId"  onclick="deleteOption('+fieldNumber+')" >X</button> </form> </div>';

//             break;

//         case "SelectOrOtherCheckboxArray":

//             var field =  '<div class="newOptionChild" name="field_number_'+fieldNumber+'" > <form id="optionInputForm_'+fieldNumber+'" > <label for="option_hun_label_'+fieldNumber+'">Magyar opció label:</label>  <input type="text" id="option_SelectOrOtherCheckboxArray_hun_label_'+fieldNumber+'" name="hunLabel">  <label for="option_en_label_'+fieldNumber+'">Angol opció label:</label> <input type="text" id="option_SelectOrOtherCheckboxArray_en_label_'+fieldNumber+'" name="enLabel"><button type="button" class="selectOptionButton" onclick="addOptionValue()" >Új opció</button> <button type="button" class="deleteOptionButton" id="deleteOptionButtonId"  onclick="deleteOption('+fieldNumber+')" >X</button> </form> </div>';

//             break;

//         default:
//             document.getElementById(formId).innerHTML ="";
//     }

//     let div = document.createElement('div');
//     div.id = divId;
//     div.innerHTML = field;
//     document.getElementById(formId).appendChild(div);
// }

function listGenerate(){
    
    
    var listHun = document.getElementById("listHunLabel").value; //magyar nyelvű label lista
    var listEn = document.getElementById("listEnLabel").value;//agnol nyelvű label lista
    var sign = document.getElementById("sign").value;//az elválasztó jel
    var resultSplitHun= listHun.split(sign);//magyar lista feldarabolása
    var resultSplitEn= listEn.split(sign);//angol lista feldarabolása
    
    //a két label listából kiszedi a white space-eket
    for (var i=0; i< resultSplitHun.length-1; i++){
        resultSplitHun[i] = resultSplitHun[i].trim();
    }
    for (var i=0; i< resultSplitEn.length-1; i++){
        resultSplitEn[i] = resultSplitEn[i].trim();
    }

    //létrehoz egy eredmény listát, olyan hosszút aháyn label/opció van
    var optionResult = new Array(resultSplitHun.length-1);
    console.log(resultSplitHun.length);
    //az eredmény listába, a megadott formulába kimenti az opciókat
    for (var i=0; i<=resultSplitHun.length-1; i++){
        optionResult[i]='\n* "'+i+'"=hu:"'+resultSplitHun[i]+'" en:"'+resultSplitEn[i]+'"';
    }

    
    document.getElementById('result').innerHTML += "\n    "+optionResult;
}

function generate(){

    //adatok lekérése a formból
    //1. mező

    var fieldType; 
    var hun_label;
    var en_label;
    var fieldOption;
    var idGenerateString;

    var fieldNumber = (document.getElementsByClassName('newFieldChild').length)+1;
    console.log(fieldNumber);

    for(var i=0; i<=fieldNumber;i++){

        fieldType = document.getElementById("field_Type_"+i).value; // mező típusa
        hun_label = document.getElementById("hun_label_"+i).value; // magyar label
        en_label = document.getElementById("en_label_"+i).value; // angol label
        fieldOption = document.getElementById("field_Type_Option_"+i).value; //a mezőhöz adható egyéb opciók

        if(document.getElementById("id_generate_"+i).checked){
            idGenerateString = camalize(en_label);
        }
        else {
            idGenerateString = "";
        }

        //a fenti adatok itt kerülnek be az ecdms formába
        switch (fieldType){

            case "RadioButton":

                if (fieldOption == "Hint"){
                    var generatedField= '\n? RadioButtons ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    ! dataType="boolean"\n    * "1"=hu:"igen" en:"yes"\n    * "0"=hu:"nem" en:"no"\n    !! required=true\n}'
                }
                else{
                    var generatedField= '\n? RadioButtons ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    ! dataType="boolean"\n    * "1"=hu:"igen" en:"yes"\n    * "0"=hu:"nem" en:"no"\n    !! required=true\n}'
                }
                break;

            case "NumberField": 
            
                if (fieldOption == "Hint"){
                    var generatedField= '\n? NumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    !! required=true\n} ';
                }
                else if (fieldOption == "Unit"){
                    var generatedField= '\n? NumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ decorationOptions={"postFixLabel": ""}\n    ! unit=""\n    !! required=true\n} ';
                }
                else if (fieldOption == "HintUnit"){
                    var generatedField= '\n? NumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    @ decorationOptions={"postFixLabel": ""}\n    ! unit=""\n    !! required=true\n} ';
                }
                else{
                    var generatedField= '\n? NumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    !! required=true\n} ';
                }
                break;
            
            case "CalculatedNumberField":
                
                if (fieldOption == "Hint"){
                    var generatedField= '\n? CalculatedNumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    @ formulaParameters=["",""]\n    @ formula="return "\n}';
                }
                else if (fieldOption == "Unit"){
                    var generatedField= '\n? CalculatedNumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ decorationOptions={"postFixLabel": ""}\n    ! unit=""\n    @ formulaParameters=["",""]\n    @ formula="return "\n}';
                }
                else if (fieldOption == "HintUnit"){
                    var generatedField= '\n? CalculatedNumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    @ decorationOptions={"postFixLabel": ""}\n    ! unit=""\n    @ formulaParameters=["",""] \n    @ formula="return "\n}';
                }
                else{
                    var generatedField= '\n? CalculatedNumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ formulaParameters=["",""]\n    @ formula="return "\n}';
                }
                break;

            case "FractionNumberField": 

                if (fieldOption == "Hint"){
                    var generatedField= '\n? FractionNumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    !! required=true\n} ';
                }
                else if (fieldOption == "Unit"){
                    var generatedField= '\n? FractionNumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ decorationOptions={"postFixLabel": ""}\n    ! unit=""\n    !! required=true\n} ';
                }
                else if (fieldOption == "HintUnit"){
                    var generatedField= '\n? FractionNumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    @ decorationOptions={"postFixLabel": ""}\n    ! unit=""\n    !! required=true\n} ';
                }
                else{
                    var generatedField= '\n? FractionNumberField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    !! required=true\n} ';
                }
                
                break;

            case "WrappedFractionUnitConverter": 

                if (fieldOption == "Hint"){
                    var generatedField= '\n? WrappedFractionUnitConverter ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    @ decorationOptions={"postFixLabel": ""} \n    ! unit="old unit"\n    @ formulas=[{"name": "new unit", "converter": "return value *7.63"}]\n    !! required=true \n}';
                }
                else{
                    var generatedField= '\n? WrappedFractionUnitConverter ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" { \n    @ decorationOptions={"postFixLabel": ""}\n    ! unit="old unit"\n    @ formulas=[{"name": "new unit", "converter": "return value *7.63"}]\n    !! required=true \n}';
                }
                
                break;

            case "SelectList":

                if (fieldOption == "Hint"){
                    var generatedField= '\n? SelectList ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    * "0"=hu:"" en:""\n    * "1"=hu:"" en:""\n    * "2"=hu:"" en:""\n    * "3"=hu:"" en:""\n    !! required=true\n}'
                }
                else {
                    var generatedField= '\n? SelectList ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    * "0"=hu:"" en:""\n    * "1"=hu:"" en:""\n    * "2"=hu:"" en:""\n    * "3"=hu:"" en:""\n    !! required=true\n}'
                }
                break;

            case "SelectOrOtherList":

                if (fieldOption == "Hint"){
                    var generatedField= '\n? SelectOrOtherList ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    @ otherValue="3"\n    * "0"=hu:"" en:""\n    * "1"=hu:"" en:""\n    * "2"=hu:"" en:""\n    * "3"=hu:"Egyéb, kérem pontosítsa" en:"Other, please specify"\n    !! required=true\n}'
                }
                else {
                    var generatedField= '\n? SelectOrOtherList ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ otherValue="3"\n    * "0"=hu:"" en:""\n    * "1"=hu:"" en:""\n    * "2"=hu:"" en:""\n    * "3"=hu:"Egyéb, kérem pontosítsa" en:"Other, please specify"\n    !! required=true\n}'
                }
                break;

            case "CheckboxArray":

                if (fieldOption == "Hint"){
                    var generatedField= '\n? CheckboxArray ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    * "0"=hu:"" en:""\n    * "1"=hu:"" en:""\n    * "2"=hu:"" en:""\n    * "3"=hu:"" en:""\n    !! required=true\n}' 
                }
                else{
                    var generatedField= '\n? CheckboxArray ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    * "0"=hu:"" en:""\n    * "1"=hu:"" en:""\n    * "2"=hu:"" en:""\n    * "3"=hu:"" en:""\n    !! required=true\n}'  
                }

                break;

            case "SelectOrOtherCheckboxArray":

                    if (fieldOption == "Hint"){
                        var generatedField= '\n? SelectOrOtherCheckboxArray ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    @ otherValue="3"\n    * "0"=hu:"" en:""\n    * "1"=hu:"" en:""\n    * "2"=hu:"" en:""\n    * "3"=hu:"Egyéb, kérem pontosítsa" en:"Other, please specify"\n    !! required=true\n}'
                    }
                    else {
                        var generatedField= '\n? SelectOrOtherCheckboxArray ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ otherValue="3"\n    * "0"=hu:"" en:""\n    * "1"=hu:"" en:""\n    * "2"=hu:"" en:""\n    * "3"=hu:"Egyéb, kérem pontosítsa" en:"Other, please specify"\n    !! required=true\n}'
                    }
                    break;

            case "DatePicker": 
            
                if (fieldOption == "Hint"){
                    var generatedField= '\n? DatePicker ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    !! required=true\n} ';
                }
                else if (fieldOption == "Partial"){
                    var generatedField= '\n? DatePicker ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ partial=true\n    !! required=true\n} ';
                }
                else  if (fieldOption == "HintPartial"){
                    var generatedField= '\n? DatePicker ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    @ partial=true \n    !! required=true\n} ';
                }
                else if (fieldOption == "Time"){
                    var generatedField= '\n? DatePicker ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ time=true\n    !! required=true\n} ';
                }
                else if (fieldOption == "HintTime"){
                    var generatedField= '\n? DatePicker ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    @ time=true \n    !! required=true\n} ';
                }
                else{
                    var generatedField= '\n? DatePicker ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    !! required=true\n} ';
                }

                break;

            case "TimePicker":
                
                if (fieldOption == "Hint"){
                    var generatedField= '\n? TimePicker ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    !! required=true\n}';
                }
                else {
                    var generatedField= '\n? TimePicker ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    !! required=true\n}';
                }
                break;

            case "TextField":

                if (fieldOption == "Hint"){
                    var generatedField= '\n? TextField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    !! required=true\n} ';
                }
                else{
                    var generatedField= '\n? TextField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    !! required=true\n} ';
                }

                break;

            case "TextArea":
                
                if (fieldOption == "Hint"){
                    var generatedField= '\n? TextArea ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    !! required=true\n} ';
                }
                else{
                    var generatedField= '\n? TextArea ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    !! required=true\n} ';
                }

                break;

            case "Complex":
                
                if (fieldOption == "Hint"){
                    var generatedField= '\ncomplex ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n';
                }
                else{
                    var generatedField= '\ncomplex ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n';
                }

                break;

            case "ComplexEnd":
                
                var generatedField= '\n}';            

                break;

            case "Dependent":
                
                    if (fieldOption == "Hint"){
                        var generatedField= '\ndependent hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    ! refValue=""\n    ! refField=""';
                    }
                    else{
                        var generatedField= '\ndependent hu:"'+hun_label+'" en:"'+en_label+'" {\n    ! refValue=""\n    ! refField=""';
                    }
        
                    break;

            case "DependentEnd":
                
                var generatedField= '\n}';            

                break;

            case "PainMap":
                var generatedField= '\n? PainMap [stomachPainLocationDetail] hu:"Lokalizáció helye" en:"Specify location" {\n    !! required=true\n} ';
                break;

            case "GeneticField":

                var generatedField= '\n? GeneticField [geneticTestingPreviousDetails] hu:"Eredmény részletei" en:"Results" { \n    @ defaultGens=["PRSS1","SPINK1","CTRC","CFTR","CPA1"] \n    !! required=true\n}';
                break;

            case "FileUpload":
                
                if (fieldOption == "Hint"){
                    var generatedField= '\n? FileUpload ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    @ hint= hu:"" en:""\n    !! required=true\n} ';
                }
                else{
                    var generatedField= '\n? FileUpload ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    !! required=true\n} ';
                }

                break;

            case "ArrayInputField":
                var generatedField= '\n? ArrayInputField ['+idGenerateString+'] hu:"'+hun_label+'" en:"'+en_label+'" {\n    !! required=true\n    ! dataType = "array"  \n    @ layout="horizontal"\n    @ separator="x"\n    @ fields=[{"key": "d1","component": "FractionNumberField"},{"key": "d2","component": "FractionNumberField"},{"key": "d3","component": "FractionNumberField"}] \n}';
                break;

            default:
                var generatedField = "Ez nem jött be! :P"; 
        }

        document.getElementById('result').innerHTML += "\n    "+generatedField;
    
    }
}