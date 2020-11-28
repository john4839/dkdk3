window.onkeydown =function(event){
    console.log(event.keyCode);
    var item = document.getElementById("item");
    if (event.keyCode == 39 ){
        var td = item.parentNode;
        var target = td.nextSibling.nextSibling;
        if(target.className == "way"){
            target.appendChild(item)     
        }
    }
    
    if (event.keyCode == 37 ){
        var td = item.parentNode;
        var target = td.previousSibling.previousSibling;
        if(target.className == "way"){
            target.appendChild(item)     
        }
    }
    if (event.keyCode == 40 ){
        var td = item.parentNode;
        var tr = td.parentNode;
        var tds = tr.children;
        var index = Array.prototype.indexOf.call(tds, td);
        var target = tr.nextSibling.nextSibling;
        target =target.children[index]
        if(target.className == "way"){
            target.appendChild(item)
        }
    }
    if (event.keyCode == 16 ){
        var td = item.parentNode;
        var tr = td.parentNode;
        var tds = tr.children;
        var index = Array.prototype.indexOf.call(tds, td);
        var target = tr.previousSibling.previousSibling;
        target =target.children[index]
        if(target.className == "way"){
            target.appendChild(item)
        }
    }
}




