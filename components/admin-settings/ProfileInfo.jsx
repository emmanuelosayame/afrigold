import Image from 'next/image';
import React from 'react';

const ProfileInfo = () => {
  return (
    <div className="flex-1">
      <div className="flex gap-2 items-center">
        <div className="w-5 h-9 rounded-md bg-red-300"></div>
        <span className="text-3xl font-semibold">Profile Information</span>
      </div>
      <div className="mt-8">
        <Image
          className="object-cover rounded-full"
          src="/images/user-profile.jpeg"
          alt="profile-pic"
          width={80}
          height={80}
        />
      </div>

      <form className="mt-8 flex flex-col gap-2">
        <label className="text-xl font-semibold">Full Name</label>
        <input
          className="border-2 border-zinc-300 p-2 rounded-md text-xl w-[40%]"
          type="text"
          placeholder="Travan Johnstone"
        />
        <label className="text-xl font-semibold mt-4">Email</label>
        <input
          className="border-2 border-zinc-300 p-2 rounded-md text-xl w-[40%]"
          type="text"
          placeholder="travanjohny@admin.co"
        />
        <label className="text-xl font-semibold mt-4">Role</label>
        <input
          className="border-2 border-zinc-300 p-2 rounded-md text-xl w-[40%]"
          type="text"
          placeholder="Admin"
        />

        <hr className="mt-8 mb-8 w-[80%]" />

        <div className="flex gap-2 items-center">
          <div className="w-5 h-9 rounded-md bg-zinc-300"></div>
          <span className="text-3xl font-semibold">Security</span>
        </div>
        <label className="text-xl font-semibold mt-4">Previous Password</label>
        <input
          className="border-2 border-zinc-300 p-2 rounded-md text-xl w-[40%]"
          type="password"
        />

        <div className="flex">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xl font-semibold mt-4">New Password</label>
            <input
              className="border-2 border-zinc-300 p-2 rounded-md text-xl w-[80%]"
              type="password"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xl font-semibold mt-4">
              Confirm New Password
            </label>
            <input
              className="border-2 border-zinc-300 p-2 rounded-md text-xl w-[80%]"
              type="password"
            />
          </div>
        </div>
        <button className="bg-zinc-200 w-60 flex items-center justify-center gap-2 py-4 rounded-md text-xl font-bold text-black mt-4 bg-opacity-80 hover:bg-opacity-100">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ProfileInfo;
