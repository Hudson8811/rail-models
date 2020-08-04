$('img.mapster').mapster();

var tooltips = document.querySelectorAll('.modelElem > .modelElemTooltip');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};

function onModelElemHover(idElem, srcValue, elemDescriptionId, setStyle) {
    document.getElementById(idElem).src = srcValue;
    document.getElementsByClassName('mapster_el')[0].src = srcValue;
    var desc = document.getElementById(elemDescriptionId);
    if (setStyle == true) {
        desc.style.border = "2px solid #93BDFF";
    } else if (setStyle == false) {
        desc.style.border = "";
    }
}



var arc04_elements = [];
arc04_elements['base'] = "/images/models/arc04/base.png";
arc04_elements['arc04_1'] = "/images/models/arc04/arc04_1.png";
arc04_elements['arc04_2'] = "/images/models/arc04/arc04_2.png";
arc04_elements['arc04_3'] = "/images/models/arc04/arc04_3.png";
arc04_elements['arc04_4'] = "/images/models/arc04/arc04_4.png";
arc04_elements['arc04_5'] = "/images/models/arc04/arc04_5.png";
arc04_elements['arc04_6'] = "/images/models/arc04/arc04_6.png";
arc04_elements['arc04_7'] = "/images/models/arc04/arc04_7.png";
arc04_elements['arc04_8'] = "/images/models/arc04/arc04_8.png";
