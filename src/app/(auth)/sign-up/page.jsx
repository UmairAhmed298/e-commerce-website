import React from 'react'

const SignupPage = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center items-center bg-green-300">
        <h1 className="font-bold text-6xl pb-7">Sign-Up-Form-Submission</h1>

        <form
          action=""
          className="flex flex-col justify-center items-center gap-10"
        >
          <div className="flex gap-10">
            <label id="name">First Name</label>
            <input type="text" className="border-1" />
          </div>
          <div className="flex gap-10">
            <label id="name">Last Name</label>
            <input type="text" className="border-1" />
          </div>

          <div className="flex gap-9">
            <label id="email">Email</label>
            <br />
            <input type="text" className="border-1" />
          </div>

          <input
            type="submit"
            className="bg-amber-500 text-white px-5 py-1 rounded-[5px] flex justify-center w-full cursor-pointer hover:bg-black hover:text-yellow-500 font-bold"
          />
        </form>
      </div>
    </div>
  )
}

export default SignupPage