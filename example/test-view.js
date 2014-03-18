$.module('#test-view', function () {
    var $view = $(this);
    var $button = $view.find('button[name="add"]');
    var $component = $view.find('.test-component').eq(0);

    $button.click(function () {
        $view.append(
            $component.clone().enter()
        );
    });
});

