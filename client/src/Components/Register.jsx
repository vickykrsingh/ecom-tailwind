import React from 'react'

function RegisterComponent() {
  return (
    <div className="flex flex-col bg-gray-800 p-4 rounded-lg">
      <h1 className="font-semibold text-2xl my-4 text-center">Register</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <button className="btn w-full">Register</button>
      </div>
      <div className="divider">OR</div>
      <div className="flex flex-col gap-2">
        <button className="btn">Google</button>
        <button className="btn">Github</button>
      </div>
    </div>
  )
}

export default RegisterComponent