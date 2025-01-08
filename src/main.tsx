import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

import About from './pages/About';
import NotFound from './pages/NotFound';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        {/* Главная страница */}
        <Route path="/" element={<App />} />

        {/* Пример дополнительной страницы */}
        <Route path="/about" element={<About />} />

        {/* Страница 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>,
)
