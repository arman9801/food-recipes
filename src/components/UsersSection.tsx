import React from 'react'

export default function UsersSection() {
  return (
    <>
      <div className="pt-4">
              <h1 className="py-2 text-2xl font-semibold">Users</h1>
              <p className="font- text-slate-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <hr className="mt-4 mb-8" />
            <p className="py-2 text-xl font-semibold">Email Address</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-400">
                Your email address is <strong>john.doe@company.com</strong>
              </p>
              <button className="inline-flex text-sm font-semibold text-[#b4a2c6] underline decoration-2">
                Change
              </button>
            </div>
            
    </>
  )
}
