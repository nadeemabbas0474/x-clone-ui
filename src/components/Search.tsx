import React from 'react'
import Image from './Image'

const Search = () => {
  return (
    <div className='flex bg-inputGray py-2 px-4 items-center gap-2 rounded-full'>
        <Image path="icons/explore.svg" alt="search" w={16} h={16}/>
        <input placeholder='Search' type='text' className='bg-transparent outline-none placeholder:text-textGray'/>
    </div>
  )
}

export default Search