$(document).ready(function () {
    var manolo = $('#manolo');
    var ramon = $('#ramon');
    var josefina = $('#josefina');
    $('#pechar').click(function(){
        $('#engadir').remove();               
    });
    $('#manolo .eliminar').click(function(){
        manolo.remove();
    });
    $('#ramon .eliminar').click(function(){
        ramon.remove();
    });
    $('#josefina .eliminar').click(function(){
        josefina.remove();
    });
    $('#manolo .arriba').click(function(){
        if(ramon.index() < manolo.index() || josefina.isBefore(manolo)){
        manolo.prev().insertBefore(manolo);
        manolo.insertBefore(manolo.prev());
    }
    });
    $('#manolo .abaixo').click(function(){
        manolo.next().insertBefore(manolo);
        manolo.insertBefore(manolo.next());
    });
    $('#ordearbutton').click(function () {
        if ($('#ordear').val() == "nombre") {
            josefina.detach().insertBefore(manolo);
            manolo.detach().insertBefore(ramon);
        } else {
            manolo.detach().insertAfter(josefina);
            ramon.detach().insertBefore(josefina);
        }
    });
});