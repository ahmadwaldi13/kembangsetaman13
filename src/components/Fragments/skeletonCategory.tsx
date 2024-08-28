import React from 'react'

const skeletonCategory = () => {
  return (
    <div>
      <div className="w-[250px] h-[350px] border border-gray-200 rounded-xl shadow-lg overflow-hidden my-10 animate-pulse">
        <div className="relative w-full h-[70%] bg-gray-300 dark:bg-gray-400"></div>
        <div className="p-4 space-y-2">
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-400 w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-400 w-full mb-2"></div>
          <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-400 w-5/6"></div>
        </div>
      </div>
    </div>
  )
}

export default skeletonCategory
