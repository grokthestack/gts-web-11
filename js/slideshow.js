Eve.scope('#slideshow', function(){

	var parent = this,
	    currentSlide = 1;

	this.listen('a.next', 'click', function(e) {

		e.stop();

		var current = parent.find('.active')


		var next = current.getNext();


		if (!next[0]) {
			console.log('no slides forward!');
			parent.find(".controls").addClass('no-forward');
		} else {
			parent.find('.controls').removeClass('no-previous');
			current.removeClass('active');
			next.addClass('active');	
			currentSlide++;
		} 

		this.find('.slide_number .current').set('text', currentSlide);

	});

	this.listen('a.back', 'click', function(e) {

		e.stop();

		var current = parent.find('.active');

		var prev = current.getPrevious();


		if (!prev[0]) {
			console.log('no slides back!');
			parent.find('.controls').addClass('no-previous');
		} else {
			parent.find('.controls').removeClass('no-forward');
			current.removeClass('active');
			prev.addClass('active');
			currentSlide--;
		} 

		this.find('.slide_number .current').set('text', currentSlide);

	});
	

});

Eve.scope("#tabs", function() {
	
	var parent = this;

	this.listen('.tabbed_nav li', 'click', function(e) {
		e.stop();

		this.find('.active').removeClass('active');
		
		var tabName = e.target.getElementsByTagName('a')[0].getAttribute('href').replace(/^#/, '');
		
		parent.find('#' + tabName).addClass('active');
		parent.find('.tab_content .' + tabName).addClass('active');

	});


});