import { Routes, Route } from 'react-router-dom'
import { PageHome } from '../components/page/home/PageHome'
import { Page404 } from '../components/page/Page404/Page404'
import { Navbar } from '../components/layouts/Navbar/Navbar'
import { Footer } from '../components/layouts/Footer/Footer'

import '../css/index.css'



function App() {
  return (
  <>
  <Navbar />
    <Routes>
          <Route path='/' element= {<PageHome />} />
          <Route path="*" element= {<Page404 />} />
    </Routes>
    <Footer />

  </>
  );
}

export default App;
