import "./Article.css";
import { useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { axiosWithToken } from "../../axiosWithToken";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FcClock } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { BiCommentAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { MdRestore } from "react-icons/md";

function Article() {
  const { state } = useLocation();
  let { currentUser } = useSelector(
    (state) => state.userAuthorLoginReducer
  );

  let { register, handleSubmit } = useForm();
  let [comment, setComment] = useState("");
  let navigate = useNavigate();
  let [articleEditStatus, setArticleEditStatus] = useState(false);
  let [currentArticle, setCurrentArticle] = useState(state);

  const deleteArticle = async() => {
    let art={...currentArticle};
    delete art._id;
    let res=await axiosWithToken.put(`http://localhost:4000/author-api/article/${currentArticle.articleId}`,art)
    if(res.data.message==='article deleted'){
      setCurrentArticle({...currentArticle,status:res.data.payload})
    }
  };

  const restoreArticle =async () => {
    let art={...currentArticle};
    delete art._id;
    let res=await axiosWithToken.put(`http://localhost:4000/author-api/article/${currentArticle.articleId}`,art)
    if(res.data.message==='article restored'){
      setCurrentArticle({...currentArticle,status:res.data.payload})
    }
  };

  //add comment top an article by user
  const writeComment = async (commentObj) => {
    commentObj.username = currentUser.username;
    let res = await axiosWithToken.post(
      `http://localhost:4000/user-api/comment/${state.articleId}`,
      commentObj
    );
    if (res.data.message === "Comment posted") {
      setComment(res.data.message);
    }
  };

  //enable edit state
  const enableEditState = () => {
    setArticleEditStatus(true);
  };

  //disable edit state
  const saveModifiedArticle = async (editedArticle) => {
    let modifiedArticle = { ...state, ...editedArticle };
    //change date of modification
    modifiedArticle.dateOfModification = new Date();
    //remove _id
    delete modifiedArticle._id;

    //make http put req to save modified article in db
    let res = await axiosWithToken.put(
      "http://localhost:4000/author-api/articlem",
      modifiedArticle
    );
    if (res.data.message === "Article modified") {
      setArticleEditStatus(false);
      navigate(`/author-profile/article/${modifiedArticle.articleId}`, {
        state: res.data.article,
      });
    }
  };

  //convert ISO date to UTC data
  function ISOtoUTC(iso) {
    let date = new Date(iso).getUTCDate();
    let day = new Date(iso).getUTCDay();
    let year = new Date(iso).getUTCFullYear();
    return `${date}/${day}/${year}`;
  }

  return (
    <div>
      {articleEditStatus === false ? (
        <>
           <div className="d-flex justify-content-between">
            {/* <div>
              <p className=" me-4">Title of the Course:{state.title}</p>
              <p className="me-5"> Language :{state.language}</p>
              <p className=" me-5">It is Free Or Paid : {state.FreeorPaid}</p>
              <p className="me-5"> Available At:{state.availableAt}</p>
              <p className="me-5"> Duration of Course:{state.duration}</p>
              <p className="me-5"> Branch related to :{state.branch}</p>
              <p className="me-5">Certificate Available :   {state.certificateAvailable}</p>
              <p className=" me-5">Details of the Course :{state.courseDetails}</p>
              
              <span className="py-3">
                <small className=" text-secondary me-4">
                  <FcCalendar className="fs-4" />
                  Created on:{ISOtoUTC(state.dateOfCreation)}
                </small>
                <small className=" text-secondary">
                  <FcClock className="fs-4" />
                  Modified on: {ISOtoUTC(state.dateOfModification)}
                </small>
              </span>
            </div> */} 
            <div class="container bg-dark text-center p-4 border border-primary">
  <h2 className="text-danger">Title of the Course: {state.title}</h2>
  <div class="border border-primary p-3">
    <p class="me-5 border-bottom border-primary pb-1 poo"><span className="ddd">Language:</span> {state.language}</p>
    <p class="me-5 border-bottom border-primary  pb-1poo"><span className="ddd">It is Free Or Paid:</span> {state.FreeorPaid}</p>
    <p class="me-5 border-bottom border-primary  pb-1 poo"><span className="ddd">Available At:</span> {state.availableAt}</p>
    <p class="me-5 border-bottom border-primary pb-1 poo"><span className="ddd">Duration of Course: </span>{state.duration}</p>
    <p class="me-5 border-bottom border-primary pb-1 poo"><span className="ddd">Branch related to:</span> {state.branch}</p>
    <p class="me-5 border-bottom border-primary pb-1 poo"><span className="ddd">Certificate Available: </span>{state.certificateAvailable}</p>
    <p class="me-5 border-bottom border-primary pb-2 poo"><span className="ddd">Details of the Course:</span> {state.courseDetails}</p>
    
    <div class="py-3">
      <small class="text-secondary me-4 border-bottom border-primary">
        <FcCalendar class="fs-4" />
        Created on: {ISOtoUTC(state.dateOfCreation)}
      </small>
      <small class="text-secondary border-bottom border-primary">
        <FcClock class="fs-4" />
        Modified on: {ISOtoUTC(state.dateOfModification)}
      </small>
    </div>
  </div>
</div>

            
            <div>
              {currentUser.userType === "author" && (
                <>
                 
                  <button
                    className="me-2 btn btn-warning "
                    onClick={enableEditState}
                  >
                    <CiEdit className="fs-2" />
                  </button>
                  {currentArticle.status === true ? (
                    <button
                      className="me-2 btn btn-danger"
                      onClick={deleteArticle}
                    >
                      <MdDelete className="fs-2" />
                    </button>
                  ) : (
                    <button
                      className="me-2 btn btn-info"
                      onClick={restoreArticle}
                    >
                      <MdRestore className="fs-2" />
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          <p className="lead mt-3" style={{ whiteSpace: "pre-line" }}>
            {state.content}
          </p>
          {/* user comments */}
          <div>
            {/* read existing comments */}
            <div className="comments  commentssss ">
              {state.comments.length === 0 ? (
                <p className="fs-3 ml-4">No comments yet...</p>
              ) : (
                state.comments.map((commentObj, ind) => {
                  return (
                    <div key={ind} className="bg-light  p-3">
                      <p
                        className="fs-4"
                        style={{
                          color: "dodgerblue",
                          textTransform: "capitalize",
                        }}
                      >
                        <FcPortraitMode className="fs-2 me-2" />
                        {commentObj.username}
                      </p>

                      <p
                        style={{
                          fontFamily: "cursive",
                          color: "lightseagreen",
                        }}
                        className="ps-4 "
                      >
                        <FcComments className="me-2" />
                        {commentObj.comment}
                      </p>
                    </div>
                  );
                })
              )}
            </div>

            <h1 className="fs-4 commentposted mr-3">{comment}</h1>
            {/* write comment by user */}
            {currentUser.userType === "user" && (
              <form onSubmit={handleSubmit(writeComment)}>
                <input
                  type="text"
                  {...register("comment")}
                  className="form-control mb-4 w-50 ml-5 commentbox"
                  placeholder="Write comment here...."
                />
                <button type="submit" className="btn btn-success buttoncomment ">
                  Add a Comment <BiCommentAdd className="fs-3" />
                </button>
              </form>
            )}
          </div>
        </>
      ) : (
        // <form onSubmit={handleSubmit(saveModifiedArticle)}>
        //   <div className="mb-4">
        //     <label htmlFor="title" className="form-label">
        //       Title
        //     </label>
        //     <input
        //       type="text"
        //       className="form-control"
        //       id="title"
        //       {...register("title")}
        //       defaultValue={state.title}
        //     />
        //   </div>

        //   <div className="mb-4">
        //     <label htmlFor="category" className="form-label">
        //       Select a category
        //     </label>
        //     <select
        //       {...register("category")}
        //       id="category"
        //       className="form-select"
        //       defaultValue={state.category}
        //     >
        //       <option value="programming">Programming</option>
        //       <option value="AI&ML">AI&ML</option>
        //       <option value="database">Database</option>
        //     </select>
        //   </div>
        //   <div className="mb-4">
        //     <label htmlFor="content" className="form-label">
        //       Content
        //     </label>
        //     <textarea
        //       {...register("content")}
        //       className="form-control"
        //       id="content"
        //       rows="10"
        //       defaultValue={state.content}
        //     ></textarea>
        //   </div>

        //   <div className="text-end">
        //     <button type="submit" className="btn btn-success">
        //       Save
        //     </button>
        //   </div>
        // </form>
        <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 col-md-8 col-sm-10">
          <div className="card shadow"></div>
        <form onSubmit={handleSubmit(saveModifiedArticle)}>
      <div className="mb-4">
        <label htmlFor="title" className="form-label kkk">Title</label>
        <input type="text" className="form-control" id="title" {...register("title")} />
      </div>

      <div className="mb-4">
        <label htmlFor="language" className="form-label kkk">Select a Course</label>
        <select {...register("language")} id="language" className="form-select">
          <option value="" disabled selected>Select a Course</option>
          <option value="node">Node</option>
          <option value="cpp">C++</option>
          <option value="csharp">C#</option>
          <option value="ui">UI</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
          <option value="java">Java</option>
          <option value="mongodb">MongoDB</option>
          <option value="dbms">DBMS</option>
          <option value="aws">AWS</option>
          <option value="blockchain">Blockchain</option>
          <option value="Ruby">Ruby</option>
          <option value="HTML&CSS">HTML&CSS</option>
          <option value="deepLearning">Deep Learning</option>
          <option value="NLP">NLP</option>
          <option value="machineLearning">Machine Learning</option>
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
          <input type="radio" value="yes" {...register("Free or Paid")} /> Yes
          <input type="radio" value="no" {...register("Free or Paid")} className="ms-3" /> No
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="courseDetails" className="form-label">Course Details</label>
        <textarea {...register("courseDetails")} className="form-control" id="courseDetails" rows="3"></textarea>
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary">Modify</button>
      </div>
    </form>
    </div>
    </div>
    </div>
      )}
    </div>
  );
}

export default Article;