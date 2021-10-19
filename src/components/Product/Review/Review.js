import React, { useState } from 'react'
import { range } from '../../../utils/range'

import NewComment from './NewComment'
import Comment from './Comment'

import './review.scss'

export default function Review({ showTab, reviews, product_id }) {

  const [replyFor,setReplyFor] = useState('')

  const allNoReplyReviews = reviews.filter( rev => {
    if( !rev.replyTo ) return true
    if( !rev.replyTo.length ) return true
    return false
  })

  const allReplyReviews = (id) => reviews.filter( rev => rev.replyTo && rev.replyTo === id )

  const toggleReplyFor = async (id) => {

    if( replyFor === id ) setReplyFor('')
    else setReplyFor(id)

  }

  return (
    <div  className={`tab-pane fade ${ showTab === 2 ? 'show active' : '' }`} id="reviews">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">

        { reviews.length ? 

            <ul className="product--review-comments list-unstyled">
              
              { 
                allNoReplyReviews.map( (review,idx) => {

                  const { _id } = review

                  return (
                    <li className="review--comment" key={idx}>
                      
                      <Comment { ...review } replyFor={replyFor} toggleReplyFor={toggleReplyFor} product_id={product_id} />

                      {
                        allReplyReviews(_id).map( (replyRev,idx) => <Comment key={idx} { ...replyRev } isReply={true} />)
                      }
                    </li>
                  )
                })
              }

            </ul>          
          : 
            <div className="no-comment">
              No Comments for this product
            </div>
        }
        
        
        
        <NewComment product_id={product_id} />
      
      </div>
    </div>
    </div>
  )
}
