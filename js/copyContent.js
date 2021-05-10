function copyContent(){

    var contentCopy = document.getElementById("result");

    contentCopy.select();
    document.execCommand("copy");
}