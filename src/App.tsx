import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Layout from './Layouts/Layout';
import CategorPages from './pages/Categories/CategoriesPage';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categorias" element={<CategorPages />} />
      </Route>
    </Routes>
  )
}

export default App
