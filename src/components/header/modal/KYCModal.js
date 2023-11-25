import React from 'react'

export default function KYCModal({show, close}) {

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal modal-open">
        <div className=" modal-box  max-w-sm p-0">
          <div className="flex items-center  flex-col justify-center bg-[#F9DEDC] rounded-md">
            <div className="flex items-center justify-center  p-5 pb-2 gap-5 bg-[#F9DEDC] rounded-md ">
              <div>
                <h1 className="text-[#8C1D18] font-bold">Attention</h1>
                <h2 className="text-[#8C1D18] text-[13px]">
                  Please head over to your profile and <br /> get verified to
                  use website
                </h2>
              </div>
              <div>
                <button onClick={close}>close</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none">
                  <path
                    d="M24 44.5C35.0457 44.5 44 35.5457 44 24.5C44 13.4543 35.0457 4.5 24 4.5C12.9543 4.5 4 13.4543 4 24.5C4 35.5457 12.9543 44.5 24 44.5Z"
                    stroke="#8C1D18"
                    stroke-width="2.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 28.5V14.5M24 31.5V34.5"
                    stroke="#8C1D18"
                    stroke-width="2.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <button className=' btn mb-5 normal-case  btn-sm text-xs'>Do KYC</button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
