var pixel = document.getElementById("pixel");
var rem = document.getElementById("rem");
var lblpixel = document.getElementById("lbl_pixel");
var lblrem = document.getElementById("lbl_rem");


function converterREM(){
    var pixel = document.getElementById("pixel");
    var rem = document.getElementById("rem");
    rem.value = pixel.value/16;
}

function converterPixel(){
    var pixel = document.getElementById("pixel");
    var rem = document.getElementById("rem");
    pixel.value = rem.value*16;
}

function trocarUnidades(){
    if(pixel.id == "pixel"){
        pixel.setAttribute('id','rem');
        pixel.setAttribute('oninput','converterPixel()')

        rem.setAttribute('id','pixel');
        rem.setAttribute('oninput','converterREM()')

        lblpixel.innerHTML = "REM";
        lblrem.innerHTML = "Pixels";
    } else if(pixel.id == "rem") {
        pixel.setAttribute('id','pixel');
        pixel.setAttribute('oninput','converterREM()')

        rem.setAttribute('id','rem');
        rem.setAttribute('oninput','converterPixel()')

        lblpixel.innerHTML = "Pixels"
        lblrem.innerHTML = "REM";
    }
    
}

