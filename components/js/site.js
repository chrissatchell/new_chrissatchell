function SimpleModal (settings) {

	// Settings
	this.modalID = settings.id || "simple-modal";
	this.width = settings.width;
	this.height = settings.height;
	this.backgroundColor = settings.backgroundColor;
	this.opacity = settings.opacity;
	this.fadeTime = settings.fadeTime;
	//this.loadContent = settings.stuff;

	var containerMarkUp = '<section id="'+ this.modalID + '" data-sexy-modal>';
			containerMarkUp += '<header class="modal-header"><h1 class="chris-satchell handwritten">Chris <span>Satchell</span></h1></header>';
			containerMarkUp += '<div class="loaded-content"></div>';
			containerMarkUp += '</section>';

	// Modal markup
	var modalMarkUp = {
		container : containerMarkUp,
		overlay : '<div class="sexy-overlay"></div>',
		closeBtn : '<div class="sexy-close-btn">x</div>'
	};
	
	this.trigger = function () {

		// Scope this
		var self = this;
		
		// ui elements
		var $select = {
			trigger	 : $('.view-modal'),
			triggerURL : $('.view-modal').attr('href'),
			overlay  : $('.sexy-overlay'),
			closeBtn : $('.sexy-close-btn')
		};

		// OPEN
		$select.trigger.click(function () {

			var getHref = $(this).attr('href');
			
			// Load content
			$sexyModal.find('.loaded-content').html( $(getHref).html() );

			// Fade in overlay and modal
			$sexyModal.add($select.closeBtn).fadeIn(self.fadeTime-50);
			$select.overlay.fadeIn(self.fadeTime);
			
			return false;
		});
		
		// CLOSE
		$select.closeBtn.click(function () {
			// Fade out overlat and modal
			$sexyModal.add($select.closeBtn).fadeOut(self.fadeTime-50);
			$select.overlay.fadeOut(self.fadeTime, function () {
				$sexyModal.find('.loaded-content').html('');
			});

			return false;
		});

	}; //this.trigger()
	
	this.init = function () { 

		// Scope this
		var self = this;

		// Add modal markup to page and select modal
		$('body').prepend(modalMarkUp.container, modalMarkUp.overlay);
		
		// Select modal
		$sexyModal = $('[data-sexy-modal]'); 

		// Select overlay
		$sexyOverlay = $('.sexy-overlay');
		
		$('body').prepend(modalMarkUp.closeBtn);
		//$sexyModal.prepend(modalMarkUp.closeBtn);
		
		// Optional settings
		$sexyModal.css({
			'width': this.width,
			'height': this.height,
			'background-color' : this.backgroundColor,
			'opacity' : this.opacity,
		});
		
		this.trigger();
	}; //this.init()

	this.init();
}

var myModal = new SimpleModal({
	id: "modal",
	opacity: 1,
	fadeTime: 250//,
	//stuff: "#chris-satchell-work"
});

$('.no-link').on('click', function () {
	return false;
});