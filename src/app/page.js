import Image from "next/image";
import bg from "../../public/background/pixelbg.png";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betweeen relative">
      <Image src={bg} alt="background-image" className="absolute top-0 left-0 w-full h-screen object-cover opacity-70"/>
    </main>
  );
}
