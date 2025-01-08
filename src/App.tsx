import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header class="m-3">
      <div class="flex items-center">
        <div class="px-3 w-20">
          <img src="https://www.svgrepo.com/show/20786/sushi.svg" alt="logo" />
        </div>
        <div class="px-3">
          <input type="text" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm " value="Поиск по меню"/>
        </div>
        <div class="px-3">
          <img src="https://www.svgrepo.com/show/526919/clock-circle.svg" class="w-8" alt="clock" />
          <p>Время работы</p>
          <p>10:00 - 23:00</p>
        </div>
        <div class="px-3">
          <img src="https://www.svgrepo.com/show/341404/phone-call-communication-telephone.svg" class="w-8" alt="call" />
          <p>Телефон</p>
          <p>8(xxx)xxx-xxx-x</p>
        </div>
        <div class="px-3">
          <img src="https://www.svgrepo.com/show/408418/location-pin-map.svg" class="w-7" alt="location" />
          <p>Иркутск</p>
        </div>
      </div>
      
      <menu>
        <ul class="flex">
          <li class="px-3">Акции</li>
          <li class="px-3">О компании</li>
          <li class="px-3">Доставка и оплата</li>
          <li class="px-3">Условия хранения и рекомендации</li>
          <li class="px-3">Вакансии</li>
          <li class="px-3">Политика конфиденциальности</li>
        </ul>
      </menu>
    </header>

    <div>
      <ul>
        <li class="px-3">Наборы</li>
        <li class="px-3">Роллы</li>
        <li class="px-3">Бургеры</li>
        <li class="px-3">Пицца</li>
        <li class="px-3">Суши и гунканы</li>
        <li class="px-3">Закуски</li>
        <li class="px-3">Салаты</li>
        <li class="px-3">Супы</li>
        <li class="px-3">Бенто</li>
        <li class="px-3">Десерты</li>
        <li class="px-3">Напитки</li>
        <li class="px-3">Соусы</li>
      </ul>
    </div>
    </>
  )
}

export default App
