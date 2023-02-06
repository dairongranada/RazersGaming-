import { Routes, Route } from 'react-router-dom'

import { Navbar } from '../components/layouts/Navbar/Navbar'
import { Footer } from '../components/layouts/Footer/Footer'

import { PageHome } from '../components/page/home/PageHome'
import { SingUp } from '../components/page/SingUp/SingUp'



import { Page404 } from '../components/page/Page404/Page404'


import '../css/index.css'



function App() {
  return (
  <>
  <Navbar />
    <Routes>
          <Route path='/' element= {<PageHome />} />
          <Route path="*" element= {<Page404 />} />
          <Route path="/sing/up" element= {<SingUp />} />

    </Routes>
    <Footer />

  </>
  );
}

export default App;
