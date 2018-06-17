		$( function() {
			// Подключаем календарь
			$( "#datepicker" ).datepicker({
				dateFormat: "dd.mm.yy"
			});

			var minDepositValue = 1000;			
			var maxDepositValue = 3000000;
			
			/**
			* Функция для построения бегунка 
			* input selectorSlider - селектор для бегунка
			* input selectorSlider - селектор для поля ввода
			*
			*/
			function createSliderSumm(selectorSlider, selectorText) {
			
				// Подключаем бегунок для суммы депозита
				var slider = $( "#" + selectorSlider ).slider({
					range: "min",
					value: minDepositValue,
					min: minDepositValue,
					max: maxDepositValue,
					slide: function( event, ui ) {
						$( "#" + selectorText ).val( ui.value );
					}
				});
				
				// При изменении значения в поле депозита менять положение бегунка
				$( "#" + selectorText ).on( "input", function() {
					if ($(this).val() < minDepositValue || $(this).val() < maxDepositValue) {
						return false;
					}
				
					slider.slider( "value", $(this).val());
				});
			
				$( "#deposit-amount" ).val( $( "#slider-deposit-amount" ).slider( "value" ) );
			}
			
			// Бегунок для суммы депозита
			createSliderSumm("slider-deposit-amount", "deposit-amount");

			// Бегунок для суммы пополнения депозита
			createSliderSumm("slider-add-to-deposit-amount", "add-to-deposit-amount");

			// Обработка формы
			$( "#target" ).click(function() {
			console.log($("#calcForm").serialize());
				$.ajax({
					url: "calc.php",
					type: "POST",
					data: $("#calcForm").serialize(),
					success: function (result) {
						$("#calcResult").html(result);
					},
					error: function () {
						console.log('Error');
					}
				});
			});
		
		});