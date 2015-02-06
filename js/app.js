$(document).foundation();

var graph=d3.select(document.getElementById('create-graph'));

start();

function onClick1() {
    deselect();
    graph.attr("class","selectedRadial");
}

function labelFunction(val,min,max) {}

function deselect() {
    graph.attr("class","radial");
}

function start() {

    var rp1 = radialProgress(document.getElementById('create-graph'))
            // .label("RADIAL 1")
            .onClick(onClick1)
            .diameter(350)
            .value(75)
            .render();

}
