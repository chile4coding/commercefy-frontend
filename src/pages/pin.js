import Applayout from '@/components/header/layout/Applayout'
import React from 'react'

export default function Pin() {
  return (
<Applayout>
    <div className="flex items-center justify-center  mt-10">
        <div className="w-full max-w-md">
            <div className="bg-[#ffffff] px-5 py-10 rounded-md mt-5 shadow-sm">
              <div className="text-left">
                <h1 className="text-2xl font-bold text-[#000000]">You’re almost there</h1>
                <h2 className="text-[#000000] mt-3 font-semibold">Create Pin</h2>
                <h3 className="text-[#000000] mt-3 text-sm">
                    This pin will be required for transaction purpose and to log into your account anytime.
                </h3>
            </div>
            <div>
                <div className="mt-10">
                   
                    <form>
                        <div className="flex items-center justify-between">
                          
                        <div className="mb-4">
                            <input type="text" id="digit1" name="digit1" max="1" className="w-16 px-4 py-2 border rounded-md text-center focus:outline-none focus:border-blue-500" placeholder="0" oninput="moveToNextInput(event, 'digit2', 'digit1')" />
                        </div>
            
                        <div className="mb-4">
                            <input type="text" id="digit2" name="digit2" min="1" className="w-16 px-4 py-2 border rounded-md text-center focus:outline-none focus:border-blue-500" placeholder="0" oninput="moveToNextInput(event, 'digit3', 'digit1', 'digit2')" />
                        </div>
            
                        <div className="mb-4">
                            <input type="text" id="digit3" name="digit3" min="1" className="w-16 px-4 py-2 border rounded-md text-center focus:outline-none focus:border-blue-500" placeholder="0" oninput="moveToNextInput(event, 'digit4', 'digit2', 'digit3')" />
                        </div>
            
                        <div className="mb-4">
                            <input type="text" id="digit4" name="digit4" min="1" className="w-16 px-4 py-2 border rounded-md text-center focus:outline-none focus:border-blue-500" placeholder="0" oninput="moveToNextInput(event, null, 'digit3', 'digit4')" />
                        </div> 
                        </div>
            
                        <div className="text-center mt-3 p-2">
                            <a href="/confirm pin.html" className="text-[#FEFEFE] bg-[#4F378B] px-28 py-3 rounded-md">Continue</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</Applayout>
  )
}
