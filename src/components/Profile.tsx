"use client";

import { useContext, useEffect, useState } from "react";
import { LiffContext } from "./LiffProvider";

export const Profile = () => {
  const liff = useContext(LiffContext);
  const [name, setName] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const profile = await liff?.getDecodedIDToken();
      setName(profile?.name);
    })();
  }, []);
  return (
    <div>
      <button onClick={() => liff?.login()}>ログイン</button>
      <p>名前 : {name}</p>
    </div>
  );
};
