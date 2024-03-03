import React from 'react'

function Card(props) {
    
  return (
    <div class="w-[300px] rounded-md border border-gray-300 mx-5 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      alt="Laptop"
      class="h-[200px] w-full rounded-t-md object-cover"
    />
    <div class="p-4">
      <h1 class="text-lg font-semibold">About Macbook</h1>
      <p class="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button
        type="button"
        class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Read
      </button>
    </div>
</div>


  )
}

export default Card
