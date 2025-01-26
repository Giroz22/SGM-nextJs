import React from "react";

export default function CircleButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className="rounded-full flex items-center justify-center p-1 border-2 border-solid border-primarylight hover:bg-primarylight duration-300 text-primarylight hover:text-white">
      {children}
    </button>
  );
}
