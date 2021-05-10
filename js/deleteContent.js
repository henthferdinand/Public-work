function deleteContent(){

    var fieldNumber = document.getElementsByTagName('form').length;
    var inp = "inputForm_";
    
    //for (var i=0; i<=fieldNumber-1; i++){
    //   

    //    inp = "inputForm_";
    //    inp += i;
    //    if(typeof(document.forms[inp]) === 'undefined' && document.forms[inp] === null){
    //        
    //        break;
    //    }
    //    else{
    //        console.log(inp);
    //        document.forms[inp].reset();
    //    }
    //    
    //    

    //}

    var i=0;
    var hunLabel="hun_label_"; 
    var enLabel="en_label_";
    var hL; 
    var eL;

    while(i<=fieldNumber-1){

        inp = "inputForm_";
        hunLabel="hun_label_";
        enLabel="en_label_";

        inp += i;
        hunLabel +=i;
        enLabel +=i;

        hL=document.getElementById(hunLabel).value;
        eL =document.getElementById(enLabel).value;

        console.log(typeof(hL));
        if(( hL === "") && ( eL === "")){
            alert("A mezők már üresek");
            //break;
        }
        else{
            console.log(inp);
            document.forms[inp].reset();
        }

        i++
    }


    

}