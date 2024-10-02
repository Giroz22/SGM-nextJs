import Image from "next/image";

type headerProps = {
  title: string;
  urlImgBG: string;
};

export default function HeaderDef({ title, urlImgBG }: headerProps) {
  return (
    <header
      className={`p-16 relative before:inset-0 before:absolute before:backdrop-blur-sm z-10`}
    >
      <Image
        src={urlImgBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-20"
        fill
      />
      <h3 className="text-2xl text-center md:text-4xl relative">{title}</h3>
    </header>
  );
}
