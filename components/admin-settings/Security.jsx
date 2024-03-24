import React from 'react';
import { BiLogOut } from 'react-icons/bi';

const Security = () => {
  return (
    <div className="w-full">
      <div className="flex gap-2 items-center">
        <div className="w-5 h-9 rounded-md bg-zinc-300"></div>
        <div className="text-3xl font-semibold">Security</div>
      </div>

      <form className="mt-8 flex flex-col gap-4">
        <label className="text-xl font-semibold mt-4">Business Name</label>
        <input
          className="border-2 border-zinc-300 p-2 rounded-md text-xl w-[40%]"
          type="text"
          placeholder="Travan Johnstone Enterprise"
        />

        <div className="w-full flex gap-4">
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold mt-4">
              Business Address
            </label>
            <input
              className="border-2 border-zinc-300 p-2 rounded-md text-xl flex-1"
              type="text"
              placeholder="Travan Johnstone Enterprise"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold mt-4">Email Address</label>
            <input
              className="border-2 border-zinc-300 p-2 rounded-md text-xl flex-1"
              type="text"
              placeholder="travanjohnstoneenterprise@gmail.com"
            />
          </div>
        </div>
        <div className="w-full flex gap-4">
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold mt-4">
              Business Address
            </label>
            <input
              className="border-2 border-zinc-300 p-2 rounded-md text-xl flex-1"
              type="text"
              placeholder="Travan Johnstone Enterprise"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold mt-4">Email Address</label>
            <input
              className="border-2 border-zinc-300 p-2 rounded-md text-xl flex-1"
              type="text"
              placeholder="travanjohnstoneenterprise@gmail.com"
            />
          </div>
        </div>
        <div className="w-full flex gap-4">
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold mt-4">Phone Number</label>
            <input
              className="border-2 border-zinc-300 p-2 rounded-md text-xl flex-1"
              type="text"
              placeholder="0811 111 1111"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold mt-4">Services</label>
            <textarea
              className="border-2 border-zinc-300 p-2 rounded-md"
              placeholder="Dine in, Instant delivery, Bookings"
            ></textarea>
          </div>
        </div>

        <span className="text-xl font-semibold mt-4">Is your business...</span>
        <div className="flex items-center gap-4">
          <span className="text-xl">Insured?</span>
          <div className="flex items-center gap-2">
            <label className="text-xl" htmlFor="yes">
              Yes
            </label>
            <input type="radio" id="yes" name="insured" value="yes" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xl" htmlFor="no">
              No
            </label>
             
            <input type="radio" id="no" name="insured" value="no" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xl">Licensed?</span>
          <div className="flex items-center gap-2">
            <label className="text-xl" htmlFor="yes">
              Yes
            </label>
            <input type="radio" id="yes" name="licensed" value="yes" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xl" htmlFor="no">
              No
            </label>
             
            <input type="radio" id="no" name="licensed" value="no" />
          </div>
        </div>

        <label className="text-xl font-semibold">Addtional Comments</label>
        <textarea
          className="border-2 border-zinc-300 p-2 rounded-md w-[40%] text-xl"
          placeholder="All meals are carefully picked to satisfy customers."
        ></textarea>
        <button className="bg-red-500 w-60 flex items-center justify-center gap-2 py-4 rounded-md text-2xl text-white bg-opacity-80 hover:bg-opacity-100">
          <BiLogOut /> Logout
        </button>
      </form>
    </div>
  );
};

export default Security;
