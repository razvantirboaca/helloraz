$(document).ready(function() {
	var formId = '#lead';

	$(formId).validate({
		rules: {
			nume: "required",
			email: {
				required: true,
				email: true
			},
			telefon: {
				required: true
			},
			dealer: {
				required: true
			}
		},
		messages: {
			nume: "",
			email: "",
			telefon: "",
			dealer: ""
		},
		errorPlacement: function(error, element) {},
		submitHandler: function(form) {
			// some other code
			// maybe disabling submit button
			// then:
			var dataString = jQuery(formId).serialize();

			jQuery.ajax({
				url: "submit.php",
				type: "POST",
				dataType: "JSON",
				beforeSend: function(){
					$('button[type="submit"]').attr('disabled', true);
					submitForm();
				},
				data: dataString,
			})
			.done(function( data ) {
				if (!data.error) {
					window.location = "thankyou.php";
				}
				$('button[type="submit"]').attr('disabled', false);
			})
			.error(function( data ) {
				// error
				$('button[type="submit"]').attr('disabled', false);
			});
		}
	});
});

$('[name="nume"]').focusout(function() {
	$value = $(this).val();

	if ($value.length > 1) {
		// call function
	}
});

$('[name="email"]').focusout(function() {
	$value = $(this).val();

	if ($value.length > 1) {
		// call function
	}
});

$('[name="telefon"]').focusout(function() {
	$value = $(this).val();

	if ($value.length > 1) {
		// call function
	}
});

$('[name="dealer"]').on('change', function() {
	$value = $(this).val();

	if ($value.length > 0) {
		// call function
	}
});

$('#discover').on('click', function(e) {
	e.preventDefault();
	$(this).attr('disabled', true);
	discover();
	setTimeout(function() {
		var win = window.open($('#discover').attr('href'), '_blank');
        if(win){ win.focus(); }
	}, 1000);
});

$('[data-call]').on('click', function() {
	callNow();
});

function callNow() {
	var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://4808169.fls.doubleclick.net/activityi;src=4808169;type=peuge0;cat=peuge005;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe><noscript><iframe src="https://4808169.fls.doubleclick.net/activityi;src=4808169;type=peuge0;cat=peuge005;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe></noscript>');

}

function submitForm() {
	var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://4808169.fls.doubleclick.net/activityi;src=4808169;type=peuge0;cat=peuge003;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe><noscript><iframe src="https://4808169.fls.doubleclick.net/activityi;src=4808169;type=peuge0;cat=peuge003;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe></noscript>');

    $formular = [];

    $numeformular = $('[name="nume"]').val();
    $emailformular = $('[name="email"]').val();
    $telefonformular = $('[name="telefon"]').val();
    $dealerformular = $('[name="dealer"]').val();

    if ($numeformular.length > 1) {
    	$formular.push('u1=' + $numeformular + ';');
    }
    
	$formular.push('u3=' + $emailformular + ';');
    
    if ($telefonformular.length > 1) {
    	$formular.push('u2=' + $telefonformular + ';');
    }
    if ($dealerformular.length > 0) {
    	$formular.push('u4=' + $('option[value="' + $dealerformular + '"]').html() + ';');
    }

    $formularString = $formular.join('');

	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	$('body').append('<iframe src="https://4808169.fls.doubleclick.net/activityi;src=4808169;type=peuge0;cat=peuge0;' + $formularString + 'ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe><noscript><iframe src="https://4808169.fls.doubleclick.net/activityi;src=4808169;type=peuge0;cat=peuge0;u1=[numeformular];u2=[telefonformular];u3=[emailformular];u4=[dealerformular];ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe></noscript>');
}

function discover() {
	var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://4808169.fls.doubleclick.net/activityi;src=4808169;type=peuge0;cat=peuge004;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe><noscript><iframe src="https://4808169.fls.doubleclick.net/activityi;src=4808169;type=peuge0;cat=peuge004;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe></noscript>');
}