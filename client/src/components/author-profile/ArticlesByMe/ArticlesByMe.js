import axios from "axios";
import { axiosWithToken } from '../../../axiosWithToken.js'; // Import axios instance with token
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ArticlesByMe.css";
import { useNavigate } from "react-router-dom";

function ArticlesByMe() {
  const [articlesList, setArticlesList] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.userAuthorLoginReducer);

  const getArticlesOfCurrentAuthor = async () => {
    try {
      const res = await axiosWithToken.get(`http://localhost:4000/author-api/articles/${currentUser.username}`);
      console.log("API response:", res.data); // Log the API response
      setArticlesList(res.data.payload);
    } catch (error) {
      console.error("Error fetching articles:", error);
      // Handle error
    }
  };

  useEffect(() => {
    getArticlesOfCurrentAuthor(); // Fetch articles when component mounts
  }, []); 
  // Empty dependency array ensures the effect runs only once
    const readArticleByArticleId = (articleObj) => {
    navigate(`../article/${articleObj.articleId}`, { state: articleObj });
  };

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
        {articlesList.map((article) => (
          <div className="col" key={article.articleId}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className=" aaa">{article.title}</h5>
                <p className="card-text">
                  {article.courseDetails.substring(0, 80) + "...."}
                </p>
                
                <button className="custom-btn btn-4" onClick={() => readArticleByArticleId(article)}>
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
    </div>
  );
}

export default ArticlesByMe;
