import Image from "next/image";

export default function Home() {
  return (
    <div className="text-xl p-3 bg-slate-400 text-white font-bold">
      <Image
        src={"/picture-desktop.webp"}
        alt={"picture-desktop"}
        className="object-cover hidden md:block"
        width={1400}
        height={600}
      ></Image>
      <Image
        src={"/picture-mobile.jpg"}
        alt={"picture-mobile"}
        className="object-cover block md:hidden"
        width={400}
        height={400}
      ></Image>
    </div>
  );
}
