
function isChecked(){
    var radios = document.getElementsByTagName('input');
    for(i=0; i<radios.length; i++ ) {
        radios[i].onclick = function(e) {
            if(e.ctrlKey) {
                this.checked = false;
            }
        }
    }
}