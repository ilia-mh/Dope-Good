import React from "react";

import { range } from "../../../utils/range";
import NewComment from './NewComment'

export default function Comment({
  _id,
  text,
  img,
  name,
  rate,
  created_at,
  product_id,
  isReply,
  toggleReplyFor,
  replyFor
}) {

  const convertDateToNow = (targetDate) => {
    const baseDate = new Date(targetDate);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = baseDate.getMonth();
    const day = baseDate.getDate();
    const year = baseDate.getFullYear();

    return `${months[month]} ${day}th, ${year}`;
  };

  return (
    <div className={`comment-wrapper ${ isReply ? 'reply-comment': '' }`}>

      <div className={`author--img ${ isReply ? 'reply-comment': ''}`}>
        {img ? (
          <img src={img} alt={name} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      <div className={`review--comment-content ${ isReply ? 'reply-comment': ''}`}>
        <div className="comment-top-info">
          <div className="pull-left">
            <h6>{name}</h6>
            <span className="review--date">{convertDateToNow(created_at)}</span>
          </div>

          {
            !isReply &&
              <div className="pull-right product--rating">
                {range(1, rate).map((star, idx) => (
                  <i className="fa fa-star active" key={idx}></i>
                ))}
              </div>
          }
        </div>

        <div className="product--comment">
          <p>{text}</p>
        </div>

        {
          !isReply && replyFor !== _id &&
            <button className="reply" onClick={() => toggleReplyFor(_id)}>
              reply
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
        }
      </div>

      { !isReply && replyFor === _id && 
          <NewComment replyTo={replyFor} toggleReplyFor={toggleReplyFor} product_id={product_id} />
      }
    </div>
  );
}
