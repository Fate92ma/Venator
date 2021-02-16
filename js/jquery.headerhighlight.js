(function($) {

	$.fn.headerhighlight = function(settings) {



        /* -------------------- Functions -------------------- */

        /**
         * Get current jQuery DOM element
         */
        function getCurrent() {
            var screenOffset = $(window).scrollTop();
            var $currentElement;

            $elementsHeader.each(function() {
                if ( this.offsetTop < (screenOffset + offset) ) {
                    $currentElement = $(this);
                } else {
                    return false;
                }
            });
            
            if ($currentElement === undefined) 
                $currentElement = $elementsHeader.eq(0);
                
            return $currentElement;
        }

        /**
         * Set class to current element from changing group
         */
        function setCurrent() {
            var $currentElement = getCurrent();
            var currentIdAttr = $currentElement.attr('id');

            // Set class to current element
            $elementsChanging.removeClass(currentClass);
            $elementsChanging.filter('a[href="#' + currentIdAttr + '"]').addClass(currentClass);
        }



        /* -------------------- Default settings -------------------- */

		// settings = {
        //     elementsChanging: [],
        //     currentClass: 'string',
        //     offset: int
        // }
        if (settings.currentClass === undefined) settings.currentClass = 'active';
        if (settings.offset === undefined) settings.offset = 0;



        /* -------------------- Script -------------------- */

        // Declare variables
        var $elementsHeader, $elementsChanging;
        var currentClass, offset;

        // Initialize variables
        $elementsHeader = $(this);
        $elementsChanging = settings.elementsChanging;
        currentClass = settings.currentClass;
        offset = settings.offset;

        // Initialize script
        $(document).scroll(setCurrent);
        setCurrent();

	};

})(jQuery);