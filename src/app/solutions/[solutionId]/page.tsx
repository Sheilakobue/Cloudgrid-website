import React from 'react'

export default function SolutionDetails({ 
  params,
}: {
  params:{ solutionId:string };
}) {
  return (
    <div>
    <h1 className="text-lg dark:text-neutral-100 font-bold text-amber-500 mt-0 md:text-center">Details about our Solutions {params.solutionId}</h1>
    <h1 className='font-bold text-4xl md:text-center text-blue-950 '>Coming soon</h1>
    </div>
  )
}
