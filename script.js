(function($){
	var form = $("#contacts-form")

	form.submit(function(event) {
		event.preventDefault()
		
		var formData = form.serializeArray()

		for (var i = 0; i < formData.length; i++) {
			var element = form.find(`[name=${formData[i].name}]`)
			element.removeClass("error")

			if (formData[i].value.trim() === "") 
				element.addClass("error")
		}
	})

	$("input, textarea").bind("keyup change", function(event){
		event.preventDefault()
		
		$(event.target).removeClass("error")
	})
	
})(jQuery)
