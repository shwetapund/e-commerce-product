import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import Form from './views/Form/Form';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/form',
        element:<Form/>
    }
    
])



root.render(
    <div>
         <RouterProvider router = {router}/>
    </div>
)
