import React, { ReactNode } from "react";

type CircleButtonType = {
  children: ReactNode;
  action: () => void;
};

export default function CircleButton({ children, action }: CircleButtonType) {
  return (
    <button
      onClick={action}
      className="rounded-full flex items-center justify-center py-1 px-4 border-2 border-solid border-primarylight hover:bg-primarylight duration-300 text-primarylight hover:text-white"
    >
      {children}
    </button>
  );
}
