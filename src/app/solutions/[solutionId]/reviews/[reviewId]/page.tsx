import React from 'react'

export default function ReviewDetail({ params} :{
    params: {
        solutionId: string;
        reviewId: string;

    }
}) {
  return (

    <h1> 
        Review {params.reviewId} for solution {params.solutionId}
    </h1>
  )
}
