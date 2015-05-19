$(document).ready(function() {
	$('#output').html('<li>Loading...</li>');

	$.getJSON("monster-list.json", function(monsters) {
		$('#output').empty();

		console.log(monsters);

		$.each(monsters, function(index, monster) {
			var el = $('<li>');
			el.text(monster.name);
			el.attr('title', monster.content);
			
			$('#output').append(el);
			
			el.data('monster', monster);

			el.click(function(evt) {
				var monster = $(this).data('monster');
				$('#name').text(monster.name);
				$('#height').text(monster.height);
				$('#weight').text(monster.weight);
				$('#content').text(monster.content);
				$('img.picture').attr('src', "images/" + monster.name + ".jpg");
			});
		});
	});
});

$(document).ready(function() {
    var $navButton = $("nav button");
    var $navUl = $("nav ul");

    $navButton.click(function() {
        $navUl.slideToggle();
    });

    $(window).resize(function() {
        $("nav ul").css('display', '');
    });

});