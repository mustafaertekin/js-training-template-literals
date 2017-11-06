
let poem = {
    p1 : 'sanma şâhım',
    p2 : 'herkesi sen',
    p3 : 'sâdıkhâne',
    p4 : 'yâr olur',
    p5 : 'dost mu sandın',
    p6 : 'belki ol',
    p7 : 'ağyâr olur',
    p8 : 'cihanda',
    p9 : 'serdâr olur',
    p10 : 'dildâr olur',
    author : 'Yavuz Sulzan Selim'
}


let htmlPoem = `
    <h2>${poem.p1} / ${poem.p2} / ${poem.p3} / ${poem.p4}</h2>
    <h2>${poem.p2} / ${poem.p5} / ${poem.p6} / ${poem.p7}</h2>
    <h2>${poem.p3} / ${poem.p6} / ${poem.p8} / ${poem.p9}</h2>
    <h2>${poem.p4} / ${poem.p7} / ${poem.p9} / ${poem.p10}</h2>
    <h3 class="right">${poem.author}</h3>`;

$("#textArea").html(htmlPoem);
