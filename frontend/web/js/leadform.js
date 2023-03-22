$("#lead-form").submit(function (event) {
    var formData = {
      name: $("#lead-form input[name=name]").val(),
      email: $("#lead-form input[name=email]").val(),
      phone: $("#lead-form input[name=phone]").val(),
      '_csrf-frontend': $("#lead-form input[name=_csrf-frontend]").val(),
    };

    $.ajax({
		type: "POST",
		url: "/lead",
		data: formData,
		dataType: "json",
		encode: true,
    }).done(function (data) {
    	$('#lead-form')[0].reset();
    });

    event.preventDefault();
});