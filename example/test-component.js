$.module('.test-component', function () {
    var $component = $(this);
    var $button = $component.find('button[name="alert"]');

    $button.click(function () {
        alert('Click');
    });
});

