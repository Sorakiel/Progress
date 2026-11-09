// Блок Progress
const SVG_NS = 'http://www.w3.org/2000/svg' // пространство имён SVG
const RADIUS = 45

class Progress {
	constructor(element) {
		this.element = element
		this.value = 0
		// Длина окружности
		this.length = 2 * Math.PI * RADIUS

		// Создаём SVG
		const svg = document.createElementNS(SVG_NS, 'svg')
		// Для анимации вращения
		svg.setAttribute('class', 'progress__svg')
		// Координаты и размеры SVG
		svg.setAttribute('viewBox', '0 0 100 100')

		// Фоновая окружность
		const track = this.createCircle('progress__track')
		// Видимая часть дуги, которая будет изменяться в зависимости от значения
		this.arc = this.createCircle('progress__arc')
		// Длина видимой части дуги задаётся через stroke-dasharray
		this.arc.setAttribute('stroke-dasharray', this.length)

		svg.append(track, this.arc)
		element.append(svg)

		this.setValue(0) // начальное значение
	}

	// Создаёт окружность с нужным классом
	createCircle(className) {
		const circle = document.createElementNS(SVG_NS, 'circle')
		circle.setAttribute('class', className) // класс для стилизации
		circle.setAttribute('cx', 50) // координата центра X
		circle.setAttribute('cy', 50) // координата центра Y
		circle.setAttribute('r', RADIUS) // радиус
		return circle
	}

	// Задаёт значение от 0 до 100
	setValue(value) {
		value = Number(value)
		if (isNaN(value)) {
			return // есди не число, оставляем прежнее значение
		}

		// Ограничиваем диапазон 0-100
		this.value = Math.min(100, Math.max(0, value))

		// Меньше значение - больше сдвиг и короче видимая часть дуги
		const offset = this.length * (1 - this.value / 100)
		this.arc.setAttribute('stroke-dashoffset', offset)
	}

	// Включает или выключает вращение
	setAnimated(isAnimated) {
		this.element.classList.toggle('progress--animated', isAnimated)
	}

	// Скрывает или показывает блок
	setHidden(isHidden) {
		this.element.classList.toggle('progress--hidden', isHidden)
	}
}
