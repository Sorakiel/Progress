// Блок Progress
class Progress {
	constructor(element) {
		this.element = element
		this.arc = element.querySelector('.progress__arc')
		this.value = 0

		// Получаем радиус дуги, чтобы вычислить длину окружности
		const radius = this.arc.getAttribute('r')
		// Длина окружности = 2 * π * r
		this.length = 2 * Math.PI * radius
		this.arc.setAttribute('stroke-dasharray', this.length)

		this.setValue(0)
	}

	// Задаёт значение от 0 до 100
	setValue(value) {
		value = Number(value)
		if (isNaN(value)) {
			return // Если значение не число, оставляем прежнее
		}

		// Ограничиваем значение от 0 до 100
		this.value = Math.min(100, Math.max(0, value))

		// Меньше значение - больше сдвиг и короче дуга
		const offset = this.length * (1 - this.value / 100)
		this.arc.setAttribute('stroke-dashoffset', offset)
	}

	// Включает или выключает вращение
	setAnimated(isAnimated) {
		this.element.classList.toggle('progress--animated', isAnimated)
	}
}
