import React from 'react';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from '../src/pages/cadastro';  // Outra página

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define a rota inicial */}
        <Route path="/" element={<Cadastro />} />
        {/* Define outras rotas */}
      </Routes>
    </Router>
  );
};

export default App;
