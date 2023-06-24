"use client";

import { useContext } from "react";
import { LiffContext } from "./LiffProvider";

export const Profile = () => {
  const liff = useContext(LiffContext);

  const profile = liff?.getDecodedIDToken();

  return (
    <div>
      <button onClick={() => liff?.login()}>ログイン</button>
      <p>名前 : {profile?.name}</p>
    </div>
  );
};
