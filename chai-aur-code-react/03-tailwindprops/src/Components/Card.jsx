import React from 'react'

function Card(props) {
    
  return (
    <div className="w-[300px] rounded-md border border-gray-300 mx-5 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      alt="Laptop"
      className="h-[200px] w-full rounded-t-md object-cover"
    />
    <div className="p-4">
      <h1 className="text-lg font-semibold">{props.title}</h1>
      <p className="mt-3 text-sm text-gray-600">
        {props.description}
      </p>
      <button
        type="button"
        className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Read
      </button>
    </div>
</div>


  )
}

export default Card
