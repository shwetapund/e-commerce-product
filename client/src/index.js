import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import ProductDetail from './views/ProductDetail/ProductDetail';
import AddProduct from './views/AddProduct/AddProduct';
import UpdateProduct from './views/UpdateProduct/UpdateProduct';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path:'/',
        
        element: <Home/>
    },
    {
        path:'/add-product',
        element:<AddProduct/>
    },
    {
        path:'/update-product/:_id',
        element:<UpdateProduct/>
    },
    {
        path:'/product-detail/:_id',
        element:<ProductDetail/>
    }
    
])



root.render(
    <div>
         <RouterProvider router = {router}/>
    </div>
)
