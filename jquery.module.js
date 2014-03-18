(function ($) {
    // define a module using a selector and an initializer
    $.module = function (selector, initializer) {
        // initialize all existing instances
        $(selector).each(initializer);

        // initialize future instances when they enter the document
        // they can enter the document as the event target or as a descendant
        $(document).on('enter', function (event) {
            $(event.target).filter(selector).each(initializer);
            $(event.target).find(selector).each(initializer);
        });
    };

    // send out a notification that an instance is about to enter the document
    $.fn.enter = function () {
        var that = this;

        // wait until the current task is finished, then the node should be in the document
        setTimeout(function () {
            that.trigger('enter');
        }, 0);

        return this;
    };
}(jQuery));

