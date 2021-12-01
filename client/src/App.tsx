import React, { useState } from 'react';
import PLP from './pages/PLP';
import ThemeProvider from './components/ThemeProvider';
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';
import { ProductContext } from './context/ProductContext';
import useFetchProducts from './hooks/useFetchProducts';

const App = () => {
  const { loading, categories }: any = useFetchProducts();
  const [search, setSearch] = useState('')
  return (
    <ThemeProvider>
      <ProductContext.Provider value={{ loading, categories, searchQuery: search }}>
        <Header changeHandler={setSearch} />
        <Body>
          <PLP />
        </Body>
        <Footer />
      </ProductContext.Provider>
    </ThemeProvider >
  );
}

export default App;
