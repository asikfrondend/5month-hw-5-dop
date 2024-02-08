import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Suspense, lazy } from 'react';
import UsersDetails from './components/UsersDetails/UsersDetails';

const UsersLazy = lazy(() => import("./components/Users/Users"))

const App = () => {
    return (
       <Router>
        <Routes>
            <Route path='/' element={
                <Suspense fallback ={<div>loading...</div>}>
                <UsersLazy/>
                </Suspense>
            }></Route>
            <Route path='/users/:id' element={<UsersDetails/>}></Route>
        </Routes>
       </Router>
    );
}

export default App;