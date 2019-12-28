console.log("load")

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyFYOVHLR6XvYBvTm2O3CbCcsOZcBfQGwxW-HStmgZSxavVtZHe/exec'

$('#submit-form').on('click', function(e) {
    console.log('submit')
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).success(
        // do something
    );
})

