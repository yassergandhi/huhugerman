// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importamos las páginas (que ahora son placeholders vacíos)
// Nota: Como son export default, podemos ponerles el nombre que queramos aquí
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CoursePage from './pages/CoursePage';
import InstructorPage from './pages/InstructorPage';

function App() {
  return (
    <BrowserRouter>
      {/* 
        BrowserRouter habilita la navegación SPA (Single Page Application).
        Maneja el historial del navegador sin recargar la página.
      */}
      <Routes>
        {/* Ruta pública: Home */}
        <Route path="/" element={<HomePage />} />

        {/* Ruta pública: Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Ruta protegida (futuro): Curso */}
        {/* Usamos :lessonId como parámetro dinámico en la URL */}
        <Route path="/course/:lessonId" element={<CoursePage />} />

        {/* Ruta protegida (futuro): Instructor */}
        <Route path="/instructor" element={<InstructorPage />} />

        {/* Ruta "Catch-all": Si el usuario entra a una ruta que no existe, redirigir a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
