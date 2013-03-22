Eve.scope('#slideshow', function(){

	var parent = this,
	    currentSlide = 1;

	this.listen('a.next', 'click', function(e) {

		e.stop();

		var current = parent.find('.active').removeClass('active');

		var next = current.getNext();

		currentSlide++;

		if (!next[0]) {
			parent.find().addClass('no-more-slides');
		} else next.addClass('active');

		this.find('.slide_number .current').set('text', currentSlide);

	});

});