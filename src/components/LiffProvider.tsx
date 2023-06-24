"use client";

import { Liff } from "@line/liff/exports";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export const LiffContext = createContext<Liff | null>(null);

export const LiffProvider = ({ children }: Props) => {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);

  useEffect(() => {
    (async () => {
      import("@line/liff")
        .then((liff) => liff.default)
        .then((liff) => {
          liff
            .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! })
            .then(() => {
              setLiffObject(liff);
            })
            .catch((error: Error) => {
              console.log(error);
            });
        });
    })();
  }, []);

  return (
    <LiffContext.Provider value={liffObject}>{children}</LiffContext.Provider>
  );
};
