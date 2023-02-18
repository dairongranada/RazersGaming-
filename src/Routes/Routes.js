import { Routes, Route } from 'react-router-dom'

import { Navbar } from '../components/layouts/Navbar/Navbar'
import { Footer } from '../components/layouts/Footer/Footer'

import { PageHome } from '../components/page/home/PageHome'
import { SingUp } from '../components/page/SingUp/SingUp'


import { Admin } from '../components/page/Admin/Admin'
import { Page404 } from '../components/page/Page404/Page404'
import { AuthProvider } from '../context/authContext'


import '../css/index.css'



function App() {
  return (
  <>
  <Navbar />
      <AuthProvider>
        <Routes>
            <Route path='/' element= {<PageHome />} />
            <Route path="*" element= {<Page404 />} />
            <Route path="/sing/in" element= {<SingUp />} />
            <Route path="/Views/Admin/" element= {<Admin />} />
        </Routes>
      </AuthProvider>
    <Footer />

  </>
  );
}

export default App;
