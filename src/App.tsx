
import { Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './pages/layout';
import { navMainRoutes } from './routes/pagesRoutes';
function App() {
  return (
  <Layout>
    <Routes>
    <Route path="*" element={<Navigate to="/" replace />} />
           {navMainRoutes.map((route) => (
          <Route
            key={route.menuId}
            path={route.url}
            element={<route.component />}
          />
        ))}

    </Routes>
  </Layout>
  );
}

export default App;
