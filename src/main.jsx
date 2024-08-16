import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import BooksDetails from './Components/BooksDetails/BooksDetails.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/book/:bookId",
        element:<BooksDetails />,
        loader: () => fetch('/books.json')
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch('/books.json')
      }
    ]
  }, 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router={router} />
  </StrictMode>,
)
