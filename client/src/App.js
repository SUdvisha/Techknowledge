// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
// import Footer from './components/Footer/Footer'
import Favourites from './components/author-profile/Favourites/Favourites'
import UserProfile from './components/user-profile/UserProfile';
import RouteLayout from './components/RouteLayout';
import {createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom';
import AuthorProfile from './components/author-profile/AuthorProfile';
import ArticlesByMe from './components/author-profile/ArticlesByMe/ArticlesByMe';
import AddArticle from './components/author-profile/AddArticle/AddArticle';
import Articles from './components/Articles/Articles'
import Article from './components/Article/Article';
function App() {
  const router =createBrowserRouter(
    [
      {
        path:"",
        element:<RouteLayout/>,
        children:[
          {
          path:"",
          element:<Home/>
          },
          {
            path:"/Register",
            element:<Register />
          },
          {
            path:"/Login",
            element:<Login/>
          },
          {
            path:"/user-profile",
            element:<UserProfile/>,
            children:[
              {
                path:"article",
                element:<Articles />
              },
              {
                path:"article/:articleId",
                element:<Article/>
              }
            ]
          },
          {
            path:"/author-profile",
            element:<AuthorProfile/>,
            children: [
              {
                path:"",
                element:<Articles/>
              },
              {
                path: "add-article",
                element: <AddArticle />
              },
              {
                path: "articles/:username",
                element: <ArticlesByMe />
              },
              {
                path: "favourites",
                element: <Favourites />
              },
              {
                path: "article",
                element: <Articles />,
              },
              {
                path:"article/:articleId",
                element:<Article/>
              }
              
            ]

          },
          

        ]
      }

    ]
  )
  return (
     <div>
      <RouterProvider router={router}/>
    </div>
   
  );
}

export default App;
