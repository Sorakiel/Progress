// Элементы управления к блоку Progress
const progress = new Progress(document.querySelector('.progress'))
const valueInput = document.querySelector('#value')

// Вводим только цифры
valueInput.addEventListener('input', function () {
	valueInput.value = valueInput.value.replace(/\D/g, '')
})

// При изменении значения в поле Value обновляем прогресс
valueInput.addEventListener('change', function () {
	if (valueInput.value !== '') {
		progress.setValue(valueInput.value)
	}
	// Если поле пустое, оставляем прежнее значение, но обновляем поле, чтобы убрать лишние нули
	valueInput.value = progress.value
})
