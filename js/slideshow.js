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

Eve.scope('#tabs', function(){
	
	var parent = this;

	this.listen('.tabbed_nav li', 'click', function(e) {
		//Keeps link from being changed
		e.stop();
		//Remove class 'active' from previously active tab
		this.find('.active').removeClass('active');		
		//defines the tabName as the href of the clicked li
		var tabName = e.target.getElementsByTagName('a')[0].getAttribute('href').replace('#', '');
		//Add class 'active' to desired tab content
		for (var i = 0; i < $$(".tabbed_nav li").length; i++) {
			//Iterates through every .tabbed_nav li and checks if it matches the tabName
			if ($$(".tabbed_nav li")[i].getElementsByTagName('a')[0].getAttribute('href') === "#" + tabName) {
				$$(".tabbed_nav li")[i].addClass('active');
			}
		}

		//Adds class to the active tab content
		parent.find('.tab_content .' + tabName).addClass('active');
	});

});