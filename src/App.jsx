import './App.css';
import Index from './pages/Index';
import Contacto from './pages/Contacto';
import IndexAdmin from './pages/admin/IndexAdmin';
import Usuarios from './pages/admin/Usuarios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from './layout/LayoutAdmin';
import LayoutPublic from './layout/LayoutPublic';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path='' element={<LayoutPublic />} >
          <Route path='/' element={<Index />} />
          <Route path='Contacto' element={<Contacto />} />
          </Route>

          <Route path='/admin' element={<LayoutAdmin />}>
            <Route path='' element={<IndexAdmin />} />
            <Route path='Usuarios' element={<Usuarios />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
