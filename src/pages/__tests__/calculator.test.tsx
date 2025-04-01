import CalculatorPage from '@/pages/calculator'
import { calculateApi, calculatorReducer } from '@/services/redux/slices/calculator/calculator'
import { configureStore } from '@reduxjs/toolkit'
import '@testing-library/jest-dom'; // <-- Добавьте эту строку
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'

jest.mock('@/services/redux/slices/calculator/calculator', () => {
	const originalModule = jest.requireActual('@/services/redux/slices/calculator/calculator')

	return {
		...originalModule,
		calculateApi: jest.fn(),
	}
})

describe('CalculatorPage', () => {
	let store: any

	beforeEach(() => {
		store = configureStore({
			reducer: {
				calculator: calculatorReducer,
			},
		})

			// Мокаем успешный ответ API
			; (calculateApi as unknown as jest.Mock).mockResolvedValue({
				details: {
					basePrices: {
						wall: 1000,
						roof: 1500,
					},
					insulation_cost: 5000,
					roof_panel_cost: 20000,
					wall_panel_cost: 18000,
				},
				total_cost: 44000,
			})
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('renders calculator form', () => {
		render(
			<Provider store={store}>
				<CalculatorPage />
			</Provider>
		)

		expect(screen.getByText('Расчет панелей')).toBeInTheDocument()
		expect(screen.getByLabelText('Длина здания, м')).toBeInTheDocument()
		expect(screen.getByLabelText('Ширина здания, м')).toBeInTheDocument()
		expect(screen.getByText('Рассчитать')).toBeInTheDocument()
	})

	it('submits form with correct data and shows popup on success', async () => {
		render(
			<Provider store={store}>
				<CalculatorPage />
			</Provider>
		)

		// Заполняем форму
		await userEvent.type(screen.getByLabelText('Длина здания, м'), '10')
		await userEvent.type(screen.getByLabelText('Ширина здания, м'), '5')
		await userEvent.type(screen.getByLabelText('Высота до потолка, м'), '3')
		await userEvent.type(screen.getByLabelText('Площадь проёмов ворот, дверей, кв. м'), '2')
		await userEvent.type(screen.getByLabelText('Площадь оконных проёмов, кв. м'), '1')
		await userEvent.type(screen.getByLabelText('Толщина стеновых панелей, мм.'), '100')
		await userEvent.type(screen.getByLabelText('Толщина кровельных панелей, мм.'), '120')
		await userEvent.type(screen.getByLabelText('Район строительства'), 'Москва')

		// Нажимаем кнопку отправки
		fireEvent.click(screen.getByText('Рассчитать'))

		// Проверяем, что был вызван API с правильными параметрами
		await waitFor(() => {
			expect(calculateApi).toHaveBeenCalledWith({
				building_length: '10',
				building_width: '5',
				ceiling_height: '3',
				door_area: '2',
				window_area: '1',
				wall_panel_thickness: '100',
				roof_panel_thickness: '120',
				wall_panel_width: 1,
				metal_thickness: 0.45,
				insulation_type: 'mineral_wool',
				insulation_density: 95,
				region: 'Москва',
				color: undefined,
			})
		})

		// Проверяем, что открылся попап с результатами
		await waitFor(() => {
			expect(screen.getByText('Приблизительная стоимость')).toBeInTheDocument()
			expect(screen.getByText('Стоимость стен: 1 000 ₽/м²')).toBeInTheDocument()
			expect(screen.getByText('Общая стоимость: 44 000 ₽')).toBeInTheDocument()
		})
	})

	it('shows validation errors', async () => {
		render(
			<Provider store={store}>
				<CalculatorPage />
			</Provider>
		)

		// Пытаемся отправить пустую форму
		fireEvent.click(screen.getByText('Рассчитать'))

		// Проверяем сообщения об ошибках
		expect(await screen.findAllByText(/обязательное поле/i)).not.toHaveLength(0)
		expect(calculateApi).not.toHaveBeenCalled()
	})

	it('handles API error', async () => {
		// Мокаем ошибку API
		; (calculateApi as unknown as jest.Mock).mockRejectedValue(new Error('API Error'))

		render(
			<Provider store={store}>
				<CalculatorPage />
			</Provider>
		)

		// Заполняем минимальные данные для валидации
		await userEvent.type(screen.getByLabelText('Длина здания, м'), '10')
		await userEvent.type(screen.getByLabelText('Ширина здания, м'), '5')
		await userEvent.type(screen.getByLabelText('Высота до потолка, м'), '3')
		await userEvent.type(screen.getByLabelText('Район строительства'), 'Москва')

		// Нажимаем кнопку отправки
		fireEvent.click(screen.getByText('Рассчитать'))

		// Проверяем, что попап не открылся
		await waitFor(() => {
			expect(screen.queryByText('Приблизительная стоимость')).not.toBeInTheDocument()
		})
	})
})