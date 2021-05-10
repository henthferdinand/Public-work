
//ez a függvény ad új mezőt a listához
function newField(){
   
    var newFieldTest = document.getElementById('newField');

    if(!newFieldTest){
        var valamiField='<div> </div>'

        let valami = document.createElement('div');
        valami.id="newField";
        valami.innerHTML = valamiField;
        document.getElementById("newFieldTemp").appendChild(valami);
    }

    //lekéri hogy mennyi form-ot/ mezőt adtunk hozzá eddig  
    //var fieldNumber = document.getElementsByTagName('form').length;
    var fieldNumber = document.getElementsByClassName('newFieldChild').length;

    //console.log(fieldNumber);
  
    var divId ="newField_"+fieldNumber;

    
    //a kitöltendő lista, a generáláshoz
    var func='onchange="addOptionValue(0,0)"';

    var field =  '<div class="newFieldChild" name="field_number_'+fieldNumber+'" > <form id="inputForm_'+fieldNumber+'" > <label for="hun_label_'+fieldNumber+'">Magyar label:</label>  <input type="text" id="hun_label_'+fieldNumber+'" name="hunLabel">  <label for="en_label_'+fieldNumber+'">Angol label:</label> <input type="text" id="en_label_'+fieldNumber+'" name="enLabel"> <select id="field_Type_'+fieldNumber+'" name="fieldType'+fieldNumber+'" '+func+' ">    <option  value="fieldType">Mezőtípus</option> <option  value="RadioButton">RadioButton</option> <option  value="NumberField">NumberField</option>  <option  value="CalculatedNumberField">CalculatedNumberField</option> <option  value="FractionNumberField">FractionNumberField</option> <option  value="WrappedFractionUnitConverter">WrappedFractionUnitConverter</option> <option  value="SelectList">SelectList</option> <option  value="SelectOrOtherList">SelectOrOtherList</option> <option  value="CheckboxArray">CheckboxArray</option> <option  value="SelectOrOtherCheckboxArray">SelectOrOtherCheckboxArray</option> <option  value="DatePicker">DatePicker</option>  <option  value="TimePicker">TimePicker</option> <option  value="TextField">TextField</option>  <option  value="TextArea">TextArea</option> <option  value="Complex">complex</option><option  value="ComplexEnd">complex vége</option><option  value="Dependent">dependent</option><option  value="DependentEnd">dependent vége</option> <option  value="PainMap">PainMap</option> <option  value="GeneticField">GeneticField</option> <option  value="FileUpload">FileUpload</option> <option  value="ArrayInputField">ArrayInputField</option>  </select> <select id="field_Type_Option_'+fieldNumber+'" name="fieldTypeOption"> <option  value="OtherOptions">Egyéb opciók</option>  <option  value="Hint">Hint</option><option  value="Partial">Partial</option>   <option  value="HintPartial">Hint és Partial</option>  <option  value="Time">Time</option>  <option  value="HintTime">Hint és Time</option>  <option  value="Unit">Unit</option> <option  value="HintUnit">Hint és Unit</option> </select>  <label for="idgenerate'+fieldNumber+'">ID generálása</label><input type="radio" id="id_generate_'+fieldNumber+'">  </form><br>  </div><br>';
     

    let div = document.createElement('div');
    div.id = divId;
    div.innerHTML = field;
    document.getElementById("newField").appendChild(div);

    
    var optionsField='<div> </div>'
    let options = document.createElement('div');
    options.id="form_temp_"+fieldNumber;
    options.innerHTML = optionsField;
    document.getElementById("newField").appendChild(options);

}
