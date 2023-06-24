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
        <div className="w-8 h-8 bg-gray-300 rounded-[50%]" />
        <div className="w-[72px] h-4 bg-gray-300" />
      </div>
    );

  return (
    <div className="flex items-center gap-4">
      <Image src={profile.picture} width={32} height={32} alt="プロフィール" />
      <p>名前 : {profile?.name}</p>
    </div>
  );
};
