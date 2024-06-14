// import {useState,useEffect} from 'react';
// import { axiosWithToken } from '../../axiosWithToken';
// import {useNavigate,Outlet} from 'react-router-dom'

// // function Articles() {

// //   const [articlesList, setArticlesList] = useState([]);
// //   let navigate=useNavigate()

// //   const getArticlesOfCurrentAuthor = async () => {
// //     try {
// //       const res = await axiosWithToken.get(`http://localhost:4000/author-api/article`);
// //       console.log("API response:", res.data);
// //       setArticlesList(res.data.payload);
// //     } catch (error) {
// //       console.error("Error fetching articles:", error);
// //       // Handle error
// //     }
// //   };
  


// //   // const readArticleByArticleId=(articleObj)=>{
// //   //   navigate(`../article/${articleObj.articleId}`,{state:articleObj})
// //   // }


// //     useEffect(()=>{
// //       getArticlesOfCurrentAuthor()
// //     },[])



// //   return (
// //     <div>
// //     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
// //       {articlesList.map((article) => (
// //         <div className="col" key={article.articleId}>
// //           <div className="card h-100">
// //             <div className="card-body">
// //               <h5 className="card-title">{article.title}</h5>
// //               <p className="card-text">
// //                 {article.content.substring(0, 80) + "...."}
// //               </p>
// //               {/* <button className="custom-btn btn-4" onClick={()=>readArticleByArticleId(article)}>
// //                 <span>Read More</span>
// //               </button> */}
// //             </div>
// //             <div className="card-footer">
// //               <small className="text-body-secondary">
// //                 Last updated on {article.dateOfModification}
// //               </small>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //     <Outlet />
// //   </div>
// //   )
// // }

// // export default Articles
// function Articles() {
//   const [articlesList, setArticlesList] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const getArticlesOfCurrentAuthor = async () => {
//     try {
//       const res = await axiosWithToken.get(`http://localhost:4000/author-api/article`);
//       console.log("API response:", res.data);
//       setArticlesList(res.data.payload);
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//       setError(error.message);
//     }
//   };
  
//   useEffect(() => {
//     getArticlesOfCurrentAuthor();
//   }, []);

//   return (
//     <div>
//       {error && <p>Error: {error}</p>}
//       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
//         {articlesList.map((article) => (
//           <div className="col" key={article.articleId}>
//             <div className="card h-100">
//               <div className="card-body">
//                 <h5 className="card-title">{article.title}</h5>
//                 <p className="card-text">
//                   {article.content.substring(0, 80) + "...."}
//                 </p>
//               </div>
//               <div className="card-footer">
//                 <small className="text-body-secondary">
//                   Last updated on {article.dateOfModification}
//                 </small>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// export default Articles;
// import React, { useState, useEffect } from 'react';
// import { axiosWithToken } from '../../axiosWithToken';
// import { useNavigate, Outlet } from 'react-router-dom';

// function Articles() {
//   const [articlesList, setArticlesList] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getArticlesOfCurrentAuthor = async () => {
//       try {
//         const res = await axiosWithToken.get('http://localhost:4000/author-api/article');
//         console.log('API response:', res.data);
//         setArticlesList(res.data.payload);
//       } catch (error) {
//         console.error('Error fetching articles:', error);
//         setError(error.message);
//       }
//     };
//     const readArticleByArticleId = (articleObj) => {
//       navigate(`../article/${articleObj.articleId}`, { state: articleObj });
//     };

//     getArticlesOfCurrentAuthor();
//   }, []);

//   return (
//     <div>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
//           {articlesList.map((article) => (
//             <div className="col" key={article.articleId}>
//               <div className="card h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">{article.title}</h5>
//                   <p className="card-text">{article.courseDetails}</p>
//                 </div>
//                 <button className="custom-btn btn-4" onClick={() => readArticleByArticleId(article)}>
//                   <span>Read More</span>
//                 </button>
//                 <div className="card-footer">
//                   <small className="text-body-secondary">Last updated on {article.dateOfModification}</small>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <Outlet />
//     </div>
//   );
// }
import {useState,useEffect} from 'react';
import { axiosWithToken } from '../../axiosWithToken';
import {useNavigate,Outlet} from 'react-router-dom';
import { useSelector } from "react-redux";

function Articles() {

  const [articlesList, setArticlesList] = useState([]);
  let navigate=useNavigate()

  const getArticlesOfCurrentAuthor=async()=>{
    let res=await axiosWithToken.get(`http://localhost:4000/user-api/articles`)
    console.log(res)
    setArticlesList(res.data.payload)
  }




    useEffect(()=>{
      getArticlesOfCurrentAuthor()
    },[]);
    const readArticleByArticleId=(articleObj)=>{
      navigate(`../article/${articleObj.articleId}`,{state:articleObj})
    }



  return (
    <div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
      {articlesList.map((article) => (
        <div className="col" key={article.articleId}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title aaa bg-dark text-white text-center py-2">{article.title}</h5>
              <p className="card-text">  Language :{article.language} <br></br> AvailableAt : {article.availableAt} <br></br>For more details click read more!!!
                
              </p>
              
              <button className="custom-btn btn-4" onClick={()=>readArticleByArticleId(article)}>
                <span>Read More</span>
              </button>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated on {article.dateOfModification}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Outlet />
  </div>
  )
}


export default Articles;
