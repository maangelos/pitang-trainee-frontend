import Schedulings from './pages/Scheduling';
import Home from './pages/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route path = '/' element={<Home/>}/>
                <Route path = '/Schedulings' element={<Schedulings/>}/>
            </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;