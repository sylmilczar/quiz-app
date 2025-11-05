import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BaseLayout from './layouts/BaseLayout';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<GamePage />} path="/game" />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default App;
