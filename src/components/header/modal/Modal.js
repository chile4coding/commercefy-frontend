import React from 'react'

export default function Modal() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className=" max-w-sm modal-box">
          <h1 class=" text-lg font-bold  text-[#252525]">Add New Recipient</h1>
          <form className=" card-body">
            <div class="">
              <label
                for="nationality"
                class="block text-gray-700 text-sm font-medium mb-2">
                Client’s Name
              </label>
              <div>
                <input
                  type="text"
                  id="nationaly"
                  name="nationaly"
                  class="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div class="">
              <label
                for="occupation"
                class="block text-gray-700 text-sm font-medium mb-2">
                Phone Number
              </label>
              <div>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  class="w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div class="">
              <label
                for="nationality"
                class="block text-gray-700 text-sm font-medium mb-2">
                Delivery Address
              </label>
              <div>
                <input
                  type="text"
                  id="nationaly"
                  name="nationaly"
                  class="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div class="mb-7">
              <label
                for="occupation"
                class="block text-gray-700 text-sm font-medium mb-2">
                E-mail Address{" "}
              </label>
              <div>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  class="w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
          
            <button class="bg-[#4F378B] text-[#FEFEFE] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
