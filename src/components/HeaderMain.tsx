'use client'

import axios from 'axios'
import InputSearch from './Fragments/InputSearch'

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-3">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="relative text-4xl font-serif font-bold text-gray-800">
                <div className="relative">
                  <span className="block">K</span>
                  <span className="absolute top-0 left-4">S</span>
                </div>
              </div>

              <div className="text-xs font-medium tracking-widest text-gray-800">
                K E M B A N G S E T A M A N
              </div>
            </div>
          </div>
        </div>

        <InputSearch />
      </div>
    </div>
  )
}

export default HeaderMain
