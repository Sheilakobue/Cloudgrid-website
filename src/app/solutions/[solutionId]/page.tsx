import React from 'react'

export default function SolutionDetails({ 
  params,
}: {
  params:{ solutionId:string };
}) {
  return (
    <h1>Details about our Solutions{params.solutionId}</h1>
  )
}
