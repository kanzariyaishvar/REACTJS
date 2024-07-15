import logo from './logo.svg';
import './App.css';
import MainRoutes from './Componet/Router/MainRoutes';
import { ChakraProvider } from '@chakra-ui/react';
import Products from './Componet/pages/Product';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <MainRoutes />
      </ChakraProvider>
    </div>
  );
}

export default App;
