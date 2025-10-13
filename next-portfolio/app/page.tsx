export default function Home() {
  return (
    <div className="bg-[#09090B] min-h-screen bg-[radial-gradient(circle,_#222_1px,_transparent_1px)] [background-size:20px_20px] p-2 md:px-100 px-20 h-700">
      {/* NAVBAR */}

      <div className="flex justify-between m-5 text-white bg-zinc-950/30 backdrop-blur-md sticky top-0 z-2">
        <div>
          <a className="font-bold text-2xl">Jakub Stępniewski</a>
        </div>
        <div className="flex gap-10 items-center">
          <a>About</a>
          <a>Skills</a>
          <a>Experience</a>
          <a>Tech stack</a>
          <a>Projects</a>
          <a>Contact</a>
        </div>
      </div>

      {/* PROFILE */}
      <div className="h-90 bg-zinc-900/80 fade-in mt-30"></div>
    </div>
  );
}
