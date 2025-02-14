import { ReactNode } from "react";

type titleType = {
  children: ReactNode;
};

function Title({ children }: titleType) {
  return <h2 className="text-2xl text-center">{children}</h2>;
}

export default Title;
