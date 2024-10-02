type propsType = {
  title: string;
  content: string;
  imgUrl: string;
  imgDescription: string;
  LtoR: boolean;
};

import { Image } from "@nextui-org/react";

export default function Information({
  title,
  content,
  imgUrl,
  imgDescription,
  LtoR,
}: propsType) {
  return (
    <section className="flex justify-center items-center p-8 md:p-16">
      <div
        className={`w-full flex flex-col justify-around items-center gap-8 md:gap-20 ${
          LtoR ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="basis-1/2 text-justify">
          <h3 className="text-2xl pb-6">{title}</h3>
          <p>{content}</p>
        </div>
        <div className="basis-1/2 h-96 bg-cover bg-center overflow-hidden flex justify-center items-center rounded-lg">
          <Image
            src={imgUrl}
            alt={imgDescription}
            className="object-fit object-center"
          />
        </div>
      </div>
    </section>
  );
}
