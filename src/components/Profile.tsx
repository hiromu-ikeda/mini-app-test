"use client";

import { useContext, useEffect, useState } from "react";
import { LiffContext } from "./LiffProvider";

export const Profile = () => {
  const liff = useContext(LiffContext);
  const [name, setName] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const profile = await liff?.getProfile();
      setName(profile?.displayName);
    })();
  }, []);
  return <div>名前 : {name}</div>;
};