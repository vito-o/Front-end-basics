import React, { Suspense, lazy } from 'react';
import { Link, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home';
// import About from './pages/About';

const Home = lazy(() => import(/* webpackChunkName: "home" */'./pages/Home'))
const About = lazy(() => import(/* webpackChunkName: "about" */'./pages/About'))

import { Button } from 'antd';

function App() {
    return (
    <div>
        <h1>App</h1>

        <Button type="primary">btn</Button>

        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>

        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </Suspense>
    </div>
    )
}

export default App;