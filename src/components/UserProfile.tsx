"use client";

import Image from "next/image";
import { useContext } from "react";
import { LiffContext } from "./LiffProvider";

export const UserProfile = () => {
  const liff = useContext(LiffContext);

  const profile = liff?.getDecodedIDToken();

  if (!profile?.picture)
    return (
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-gray-200 rounded-[50%]" />
      </div>
    );

  return (
    <div className="flex items-center gap-4">
      <Image
        src={profile.picture}
        width={32}
        height={32}
        alt="プロフィール"
        className="rounded-[50%]"
      />
    </div>
  );
};
