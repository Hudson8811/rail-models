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


var kb50_elements = [];
kb50_elements['base'] = "/images/models/kb50/base.png";
kb50_elements['kb50_1'] = "/images/models/kb50/kb50_1.png";
kb50_elements['kb50_2'] = "/images/models/kb50/kb50_2.png";
kb50_elements['kb50_3'] = "/images/models/kb50/kb50_3.png";
kb50_elements['kb50_4'] = "/images/models/kb50/kb50_4.png";
kb50_elements['kb50_5'] = "/images/models/kb50/kb50_5.png";
kb50_elements['kb50_6'] = "/images/models/kb50/kb50_6.png";
kb50_elements['kb50_7'] = "/images/models/kb50/kb50_7.png";
kb50_elements['kb50_8'] = "/images/models/kb50/kb50_8.png";
kb50_elements['kb50_9'] = "/images/models/kb50/kb50_9.png";
kb50_elements['kb50_10'] = "/images/models/kb50/kb50_10.png";
kb50_elements['kb50_11'] = "/images/models/kb50/kb50_11.png";
kb50_elements['kb50_12'] = "/images/models/kb50/kb50_12.png";
kb50_elements['kb50_13'] = "/images/models/kb50/kb50_13.png";
kb50_elements['kb50_14'] = "/images/models/kb50/kb50_14.png";

var kb65_elements = [];
kb65_elements['base'] = "/images/models/kb65/base.png";
kb65_elements['kb65_1'] = "/images/models/kb65/kb65_1.png";
kb65_elements['kb65_2'] = "/images/models/kb65/kb65_2.png";
kb65_elements['kb65_3'] = "/images/models/kb65/kb65_3.png";
kb65_elements['kb65_4'] = "/images/models/kb65/kb65_4.png";
kb65_elements['kb65_5'] = "/images/models/kb65/kb65_5.png";
kb65_elements['kb65_6'] = "/images/models/kb65/kb65_6.png";
kb65_elements['kb65_7'] = "/images/models/kb65/kb65_7.png";
kb65_elements['kb65_8'] = "/images/models/kb65/kb65_8.png";
kb65_elements['kb65_9'] = "/images/models/kb65/kb65_9.png";
kb65_elements['kb65_10'] = "/images/models/kb65/kb65_10.png";
kb65_elements['kb65_11'] = "/images/models/kb65/kb65_11.png";
kb65_elements['kb65_12'] = "/images/models/kb65/kb65_12.png";
kb65_elements['kb65_13'] = "/images/models/kb65/kb65_13.png";
kb65_elements['kb65_14'] = "/images/models/kb65/kb65_14.png";

var kd65_elements = [];
kd65_elements['base'] = "/images/models/kd65/base.png";
kd65_elements['kd65_1'] = "/images/models/kd65/kd65_1.png";
kd65_elements['kd65_2'] = "/images/models/kd65/kd65_2.png";
kd65_elements['kd65_3'] = "/images/models/kd65/kd65_3.png";
kd65_elements['kd65_4'] = "/images/models/kd65/kd65_4.png";
kd65_elements['kd65_5'] = "/images/models/kd65/kd65_5.png";
kd65_elements['kd65_6'] = "/images/models/kd65/kd65_6.png";
kd65_elements['kd65_7'] = "/images/models/kd65/kd65_7.png";
kd65_elements['kd65_8'] = "/images/models/kd65/kd65_8.png";
kd65_elements['kd65_9'] = "/images/models/kd65/kd65_9.png";
kd65_elements['kd65_10'] = "/images/models/kd65/kd65_10.png";

var p65_4_elements = [];
p65_4_elements['base'] = "/images/models/p65_4/base.png";
p65_4_elements['p65_4_1'] = "/images/models/p65_4/p65_4_1.png";
p65_4_elements['p65_4_2'] = "/images/models/p65_4/p65_4_2.png";
p65_4_elements['p65_4_3'] = "/images/models/p65_4/p65_4_3.png";
p65_4_elements['p65_4_4'] = "/images/models/p65_4/p65_4_4.png";
p65_4_elements['p65_4_5'] = "/images/models/p65_4/p65_4_5.png";

var p65_6_elements = [];
p65_6_elements['base'] = "/images/models/p65_6/base.png";
p65_6_elements['p65_6_1'] = "/images/models/p65_6/p65_6_1.png";
p65_6_elements['p65_6_2'] = "/images/models/p65_6/p65_6_2.png";
p65_6_elements['p65_6_3'] = "/images/models/p65_6/p65_6_3.png";
p65_6_elements['p65_6_4'] = "/images/models/p65_6/p65_6_4.png";
p65_6_elements['p65_6_5'] = "/images/models/p65_6/p65_6_5.png";

var d65_elements = [];
d65_elements['base'] = "/images/models/d65/base.png";
d65_elements['d65_1'] = "/images/models/d65/d65_1.png";
d65_elements['d65_2'] = "/images/models/d65/d65_2.png";
d65_elements['d65_3'] = "/images/models/d65/d65_3.png";
d65_elements['d65_4'] = "/images/models/d65/d65_4.png";
d65_elements['d65_5'] = "/images/models/d65/d65_5.png";
d65_elements['d65_6'] = "/images/models/d65/d65_6.png";

var gbr65_elements = [];
gbr65_elements['base'] = "/images/models/gbr65/base.png";
gbr65_elements['gbr65_1'] = "/images/models/gbr65/gbr65_1.png";
gbr65_elements['gbr65_2'] = "/images/models/gbr65/gbr65_2.png";
gbr65_elements['gbr65_3'] = "/images/models/gbr65/gbr65_3.png";
gbr65_elements['gbr65_4'] = "/images/models/gbr65/gbr65_4.png";
gbr65_elements['gbr65_5'] = "/images/models/gbr65/gbr65_5.png";
gbr65_elements['gbr65_6'] = "/images/models/gbr65/gbr65_6.png";
gbr65_elements['gbr65_7'] = "/images/models/gbr65/gbr65_7.png";
gbr65_elements['gbr65_8'] = "/images/models/gbr65/gbr65_8.png";
gbr65_elements['gbr65_9'] = "/images/models/gbr65/gbr65_9.png";

var gbr65sh_elements = [];
gbr65sh_elements['base'] = "/images/models/gbr65sh/base.png";
gbr65sh_elements['gbr65sh_1'] = "/images/models/gbr65sh/gbr65sh_1.png";
gbr65sh_elements['gbr65sh_2'] = "/images/models/gbr65sh/gbr65sh_2.png";
gbr65sh_elements['gbr65sh_3'] = "/images/models/gbr65sh/gbr65sh_3.png";
gbr65sh_elements['gbr65sh_4'] = "/images/models/gbr65sh/gbr65sh_4.png";
gbr65sh_elements['gbr65sh_5'] = "/images/models/gbr65sh/gbr65sh_5.png";
gbr65sh_elements['gbr65sh_6'] = "/images/models/gbr65sh/gbr65sh_6.png";
gbr65sh_elements['gbr65sh_7'] = "/images/models/gbr65sh/gbr65sh_7.png";
gbr65sh_elements['gbr65sh_8'] = "/images/models/gbr65sh/gbr65sh_8.png";

var gbr65sh_poli_elements = [];
gbr65sh_poli_elements['base'] = "/images/models/gbr65sh_poli/base.png";
gbr65sh_poli_elements['gbr65sh_poli_1'] = "/images/models/gbr65sh_poli/gbr65sh_poli_1.png";
gbr65sh_poli_elements['gbr65sh_poli_2'] = "/images/models/gbr65sh_poli/gbr65sh_poli_2.png";
gbr65sh_poli_elements['gbr65sh_poli_3'] = "/images/models/gbr65sh_poli/gbr65sh_poli_3.png";
gbr65sh_poli_elements['gbr65sh_poli_4'] = "/images/models/gbr65sh_poli/gbr65sh_poli_4.png";
gbr65sh_poli_elements['gbr65sh_poli_5'] = "/images/models/gbr65sh_poli/gbr65sh_poli_5.png";
gbr65sh_poli_elements['gbr65sh_poli_6'] = "/images/models/gbr65sh_poli/gbr65sh_poli_6.png";
gbr65sh_poli_elements['gbr65sh_poli_7'] = "/images/models/gbr65sh_poli/gbr65sh_poli_7.png";


var gbr65_poli_elements = [];
gbr65_poli_elements['base'] = "/images/models/gbr65_poli/base.png";
gbr65_poli_elements['gbr65_poli_1'] = "/images/models/gbr65_poli/gbr65_poli_1.png";
gbr65_poli_elements['gbr65_poli_2'] = "/images/models/gbr65_poli/gbr65_poli_2.png";
gbr65_poli_elements['gbr65_poli_3'] = "/images/models/gbr65_poli/gbr65_poli_3.png";
gbr65_poli_elements['gbr65_poli_4'] = "/images/models/gbr65_poli/gbr65_poli_4.png";
gbr65_poli_elements['gbr65_poli_5'] = "/images/models/gbr65_poli/gbr65_poli_5.png";
gbr65_poli_elements['gbr65_poli_6'] = "/images/models/gbr65_poli/gbr65_poli_6.png";
gbr65_poli_elements['gbr65_poli_7'] = "/images/models/gbr65_poli/gbr65_poli_7.png";
gbr65_poli_elements['gbr65_poli_8'] = "/images/models/gbr65_poli/gbr65_poli_8.png";

var p65_elements = [];
p65_elements['base'] = "/images/models/p65/base.png";
p65_elements['p65_1'] = "/images/models/p65/p65_1.png";
p65_elements['p65_2'] = "/images/models/p65/p65_2.png";
p65_elements['p65_3'] = "/images/models/p65/p65_3.png";
p65_elements['p65_4'] = "/images/models/p65/p65_4.png";
p65_elements['p65_5'] = "/images/models/p65/p65_5.png";
p65_elements['p65_6'] = "/images/models/p65/p65_6.png";
p65_elements['p65_7'] = "/images/models/p65/p65_7.png";