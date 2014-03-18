jQuery.module
=============

Usage
-----

Define a module:

```javascript
$.module('.login-widget', function () {
    var $login = $(this);

    // ...
});
```

Put in the HTML:

```html
<div class="login-widget">
    <!-- ... -->
</div>
```

Call .enter if you want to reinitialize:

```javascript
$('.login-widget').html(someHtmlFromTheServer).enter();
```

That's it.

