"use client";

import Image from "next/image";
import { useContext } from "react";
import { LiffContext } from "./LiffProvider";

export const Profile = () => {
  const liff = useContext(LiffContext);

  const profile = liff?.getDecodedIDToken();

  if (!profile?.picture)
    return (
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-300 rounded-[50%]" />
        <div className="w-[96px] h-6 bg-gray-300" />
      </div>
    );

  return (
    <div className="flex items-center gap-4">
      <Image
        src={profile.picture}
        width={40}
        height={40}
        alt="プロフィール"
        className="rounded-[50%]"
      />
      <p>{profile?.name}</p>
    </div>
  );
};
