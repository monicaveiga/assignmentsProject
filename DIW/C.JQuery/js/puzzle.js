var allCompleted = false;
var completed1 = false;
var completed2 = false;
var completed3 = false;
var completed4 = false;
function checkpuzzle() {
    if (completed1 && completed2 && completed3 && completed4) {
        alert('Puzzle completado, ¡felicidades!');
    }
}
$("#img1").draggable();
$("#dropzone0").droppable({
    drop: function (event, ui) {
        $(this).css('background', 'ForestGreen');
        var draggedEl = ui.draggable.attr("id");
        // var droppableId = $(this).attr("id");
        if (draggedEl === "img1") {
            completed1 = true;
        }
        console.log(draggedEl);
        checkpuzzle();
    },
    over: function (event, ui) {
        $(this).css('background', 'LightPink');
    },
    out: function (event, ui) {
        $(this).css('background', 'CornflowerBlue');
        completed1 = false;
    }
});
$("#img2").draggable();
$("#dropzone1").droppable({
    drop: function (event, ui) {
        $(this).css('background', 'ForestGreen');
        var draggedEl = ui.draggable.attr("id");
        if (draggedEl === "img2") {
            completed2 = true;
        }
        checkpuzzle();
    },
    over: function (event, ui) {
        $(this).css('background', 'LightPink');
    },
    out: function (event, ui) {
        $(this).css('background', 'CornflowerBlue');
        completed2 = false;
    }
});
$("#img3").draggable();
$("#dropzone2").droppable({
    drop: function (event, ui) {
        $(this).css('background', 'ForestGreen');
        var draggedEl = ui.draggable.attr("id");
        if (draggedEl === "img3") {
            completed3 = true;
        }
        checkpuzzle();
    },
    over: function (event, ui) {
        $(this).css('background', 'LightPink');
    },
    out: function (event, ui) {
        $(this).css('background', 'CornflowerBlue');
        completed3 = false;
    }
});
$("#img4").draggable();
$("#dropzone3").droppable({
    drop: function (event, ui) {
        $(this).css('background', 'ForestGreen');
        var draggedEl = ui.draggable.attr("id");
        if (draggedEl === "img4") {
            completed4 = true;
        }
        checkpuzzle();
    },
    over: function (event, ui) {
        $(this).css('background', 'LightPink');
    },
    out: function (event, ui) {
        $(this).css('background', 'CornflowerBlue');
        completed4 = false;
    }
});