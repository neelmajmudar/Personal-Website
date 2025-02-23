import Image from "next/image";
import bg from "../../public/background/pixelbg.png";
import RenderModel from "./components/RenderModel.jsx";
import Knight from "./components/models/Knight.jsx";
import Ranger from "./components/models/Ranger.jsx";
import Scroll  from "./components/models/Scroll.jsx";
import Npc from "./components/models/NPC.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betweeen relative">
      <Image src={bg} alt="background-image" fill className="absolute top-0 left-0 w-full h-screen object-cover opacity-100"/>
      <div className="w-full h-screen">
        {/* Navigation and 3D Model */}
        <RenderModel>
          <Knight />
          <Ranger />
          <Scroll />
          <Npc />
        </RenderModel>
      </div>
    </main>
  );
}
