$(document).ready(function () {
    var fruits = [];
    var veg = [];
    var mockmeats = [];
    var allfoodnames = [];
    var allitems = $('.food').toArray();

    //    fruits = $('.food .fruits').find($('p.fruitname')).innerHTML.toArray();
    var fruititems = $('.food.fruits').toArray();
    var vegitems = $('.food.veg').toArray();
    var meatitems = $('.food.mockmeat').toArray();
    // allitems.push($('.food.fruits'), $('.food.veg'), $('.food.mockmeat'));
    // allitems.push($('.food'));

    ///Arrays de cada uno de los tipos de comida
    for (let i = 0; i < fruititems.length; i++) {
        fruits.push($(fruititems[i]).find($('.fruitname')).text());
    }
    for (let i = 0; i < vegitems.length; i++) {
        veg.push($(vegitems[i]).find($('.vegname')).text());
    }
    for (let i = 0; i < meatitems.length; i++) {
        mockmeats.push($(meatitems[i]).find($('.mockmeatname')).text());
    }

    // allfoodnames.push(fruits, veg, mockmeats);
    // console.log(allfoodnames);
    $('#ordenarbutton').click(function () {
        if ($('#ordenaritems').val() == "fruta") {
            console.log("fruta");
            $("li.food.fruits").show();
            $("li.food.veg").hide();
            $("li.food.mockmeat").hide();
        } else if ($('#ordenaritems').val() == "verdura") {
            console.log("verdura");
            $("li.food.veg").show();
            $("li.food.fruits").hide();
            $("li.food.mockmeat").hide();
        } else if ($('#ordenaritems').val() == "mockmeat") {
            console.log("mockmeat");
            $("li.food.mockmeat").show();
            $("li.food.veg").hide();
            $("li.food.fruits").hide();
        } else if ($('#ordenaritems').val() == "abc") {
            $("li.food.mockmeat").show();
            $("li.food.veg").show();
            $("li.food.fruits").show();
            var $lis = $('li.food');
            console.log($lis);
                var alphabeticallyOrderedLis = $lis.sort(function (a, b) {
                    return $(a).find("p").text() > $(b).find("p").text();
                });
                // $('ul').addClass('.itemslist')
                $("ul.itemslist").html(alphabeticallyOrderedLis);

        }

    });

});