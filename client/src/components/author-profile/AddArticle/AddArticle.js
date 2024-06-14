import "./AddArticle.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddArticle() {
  let { register, handleSubmit } = useForm();
  let { currentUser } = useSelector((state) => state.userAuthorLoginReducer);
  let [err, setErr] = useState("");
  let navigate = useNavigate();
  let token = localStorage.getItem('token');

  // Create axios with token
  const axiosWithToken = axios.create({
    headers: { Authorization: `Bearer ${token}` }
  });

  const postNewArticle = async (article) => {
    article.dateOfCreation = new Date();
    article.dateOfModification = new Date();
    article.articleId = Date.now();
    article.username = currentUser.username;
    article.comments = [];
    article.status = true;
    // Make HTTP post request
    let res = await axiosWithToken.post('http://localhost:4000/author-api/add-article', article);
    console.log(res);
    if (res.data.message === 'New article created') {
      navigate(`/author-profile/articles/${currentUser.username}`);
    } else {
      setErr(res.data.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 col-md-8 col-sm-10">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3">Suggest a Course</h2>
            </div>
            <div className="card-body bg-light">
              {err.length !== 0 && <p className='text-danger fs-5'>{err}</p>}
              <form onSubmit={handleSubmit(postNewArticle)}>
                <div className="mb-4">
                  <label htmlFor="title" className="form-label kkk">Title</label>
                  <input type="text" className="form-control" id="title" {...register("title")} />
                </div>

                <div className="mb-4">
                  <label htmlFor="language" className="form-label kkk">Select a Course</label>
                  <select {...register("language")} id="language" className="form-select">
                    <option value="" disabled selected>Select a Course</option>
                    <option value="Node">Node</option>
                    <option value="c++">C++</option>
                    <option value="c#">c#</option>
                    <option value="UI">UI</option>
                    <option value="javaScript">JavaScript</option>
                    <option value="react">React</option>
                    <option value="java">Java</option>
                    <option value="mongo">MongoDB</option>
                    <option value="dbms">DBMS</option>
                    <option value="aws">AWS</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="Ruby">Ruby</option>
                    <option value="HTML&CSS">HTML&CSS</option>
                    <option value="deepLearning">deepLearning</option>
                    <option value="NLP">NLP</option>
                    <option value="machineLearning">machineLearning</option>
                    <option value="Finance">Finance</option>
                    <option value="C">C</option>
                    <option value="DataVisualization">DataVisualization</option>
                    

                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label kkk">Available At</label>
                  <div>
                    <input type="radio" value="youtube" {...register("availableAt")} /> YouTube
                    <input type="radio" value="coursera" {...register("availableAt")} className="ms-3" /> Coursera
                    <input type="radio" value="udemy" {...register("availableAt")} className="ms-3" /> Udemy
                    <input type="radio" value="ibm" {...register("availableAt")} className="ms-3" /> IBM
                    <input type="radio" value="ibm" {...register("availableAt")} className="ms-3" /> Microsoft
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="duration" className="form-label kkk">Duration of Course</label>
                  <select {...register("duration")} id="duration" className="form-select">
                    <option value="" disabled selected>Select Duration of Course</option>
                    <option value="1-4weeks">1-4 weeks</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="6months">6 months</option>
                    <option value="1year">1-year</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">Branch</label>
                  <div>
                    <input type="radio" value="cse" {...register("branch")} /> CSE
                    <input type="radio" value="it" {...register("branch")} className="ms-3" /> IT
                    <input type="radio" value="ece" {...register("branch")} className="ms-3" /> ECE
                    <input type="radio" value="eee" {...register("branch")} className="ms-3" /> EEE
                    <input type="radio" value="civil" {...register("branch")} className="ms-3" /> CIVIL 
                    <input type="radio" value="cyber" {...register("branch")} className="ms-3" /> CYBER
                    <input type="radio" value="datascience" {...register("branch")} className="ms-3" /> DATASCIENCE
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Certificate Available</label>
                  <div>
                    <input type="radio" value="yes" {...register("certificateAvailable")} /> Yes
                    <input type="radio" value="no" {...register("certificateAvailable")} className="ms-3" /> No
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Free or Paid</label>
                  <div>
                    <input type="radio" value="Free" {...register("FreeorPaid")} /> Free
                    <input type="radio" value="Paid" {...register("FreeorPaid")} className="ms-3" /> Paid
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="courseDetails" className="form-label">Course Details</label>
                  <textarea {...register("courseDetails")} className="form-control" id="courseDetails" rows="3"></textarea>
                </div>

                <div className="text-end">
                  <button type="submit" className="btn btn-primary">Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddArticle;
