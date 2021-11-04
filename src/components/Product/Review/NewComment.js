import React, { useState } from "react";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import { post } from "../../../utils/fetch";
import { range } from '../../../utils/range'

const apiUrl = process.env.REACT_APP_API_URL;

export default function NewComment({ product_id, replyTo, toggleReplyFor }) {

  const [currStar, setCurrStar] = useState(5);

  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [comment, setComment] = useState("");
  const [commentErr, setCommentErr] = useState("");

  const user = useSelector((state) => state.shop.user);

  const submitReview = async () => {
    setNameErr("");
    setCommentErr("");

    if (!user) {
      toast.error("You must login to post a review");
      return;
    }

    if (!checkReviewFields()) {
      toast.error(
        "Validation for review failed. Please provide required fields"
      );
      return;
    }

    const newReview = {
      name,
      text: comment,
      user_id: user._id,
      product_id,
      rate: currStar,
    };

    if( replyTo ) newReview.replyTo = replyTo

    if (user.img) newReview.img = user.img;

    const createdReview = await post(`${apiUrl}/api/review`, newReview);

    if (createdReview.success) {
      toast.success(
        "Your review has successfuly submitted and its under confirmation from admin."
      );
      setName("");
      setComment("");
    } else {
      if (
        createdReview.message === "User Already has a review on this product."
      )
        toast.error("You already have a review on this product.");
      else toast.error("Some Error occured during submitting your review.");
    }

    if( replyTo ) toggleReplyFor(replyTo)
  };

  const checkReviewFields = () => {
    let checks = true;

    if (name.length < 3) setNameErr("");

    if (comment.length < 3) setCommentErr("You must provide a comment");

    return checks;
  };

  return (
    <>
      <div className={`form--review-rating text-center ${ replyTo ? 'new-reply' : ''}`} >

        { replyTo &&
            <svg onClick={ () => toggleReplyFor(replyTo) } xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 close-reply" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        }
        
        {
          replyTo ?
            <h5>Add Reply</h5>
          :
            <h5>Add Your Review</h5>

        }

        {
          !replyTo &&
            <div className="form--review-rating-content">
              <span>Your Ratting</span>

              {range(1, 5).map((star) => (
                <div
                  className="product--rating"
                  onClick={() => setCurrStar(star)}
                  key={star}
                >
                  {range(1, star).map((idx) => (
                    <i
                      key={idx}
                      className={`fa fa-star ${currStar === star ? "active" : ""}`}
                    ></i>
                  ))}
                </div>
              ))}
            </div>
        }
      </div>

      <div className={`form--review ${ replyTo ? 'new-reply' : ''}`}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <textarea
                className="form-control"
                id="review"
                rows="2"
                placeholder="Comment review"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>

            <div
              className="
                    col-sm-12 col-md-12 col-lg-12
                    text--center
                  "
            >
              <button
                className="btn btn--primary btn--rounded new-review-btn"
                onClick={submitReview}
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
