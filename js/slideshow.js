Eve.scope('#slideshow', function(){
	//Define parent outside of next function so we can access it
	var parent = this,
		//So we can list what slide is being shown
	    currentSlide = 1;
	//Checks for a click on the 'next' button
	this.listen('a.next', 'click', function(e) {
		//Prevents link change
		e.stop();
		//Removes class from previously active tab
		var current = parent.find('.active').removeClass('active');
		//defines the next slide
		var next = current.getNext();
		//increments the slide counter
		currentSlide++;
		//Shows text if no more slides are left, otherwise shows next slide
		if (!next[0]) {
			$$('.slides li')[0].addClass('active');
			currentSlide = 1;
		} else next.addClass('active');
		//Sets text to the correct slide number
		this.find('.slide_number .current').set('text', currentSlide);

	});

	this.listen('a.back', 'click', function(e) {
		//Prevents link change
		e.stop();
		//Removes class from previously active tab
		var current = parent.find('.active').removeClass('active');
		//defines the next slide
		var prev = current.getPrevious();
		//increments the slide counter
		currentSlide -= 1;
		//Shows text if no more slides are left, otherwise shows next slide
		if (!prev[0]) {
			$$(".slides li")[$$(".slides li").length - 1].addClass('active');
			currentSlide = $$('.slides li').length;		
		} else prev.addClass('active');
		//Sets text to the correct slide number
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