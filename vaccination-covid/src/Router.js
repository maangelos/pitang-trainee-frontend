import Scheaduling from './pages/Scheadualing';
import Home from './pages/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/Scheaduling' element={<Scheaduling/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;