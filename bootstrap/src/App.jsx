import logo from './logo.svg';
import './App.css';
import Componete from './Componet/Mycomponet';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Componete />
      </ChakraProvider>
    </div>
  );
}

export default App;