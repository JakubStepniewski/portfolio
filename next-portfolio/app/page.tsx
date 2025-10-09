import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#09090B] min-h-screen bg-[radial-gradient(circle,_#222_1px,_transparent_1px)] [background-size:20px_20px] p-2">
      <div className="flex justify-between m-5 text-white bg-[#09090B] backdrop-blur-md ml-40 mr-40">
        <div>
          <a className="font-bold text-2xl">Jakub Stępniewski</a>
        </div>
        <div className="flex gap-10">
          <a>About</a>
          <a>Skills</a>
          <a>Experience</a>
          <a>Tech stack</a>
          <a>Projects</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}
