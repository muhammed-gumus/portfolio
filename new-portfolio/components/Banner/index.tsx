export default function Home() {
  return (
    <div className="text-white mt-24">
      <div className="text-left">
        <h1 className="text-lg mb-4 opacity-80">Hey, I'm</h1>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-800 via-sky-500 to-pink-400 inline-block text-transparent bg-clip-text mb-8">
          Muhammed Gümüş
        </h1>

        <p className="text-lg mb-8 opacity-80">
          I'm a software engineer based in Toronto, Canada and also a
          communication and journalism student. I enjoy creating things that
          live on the internet, whether that be websites, applications, or
          anything in between. I have been freelancing for a year now while
          studying at the university and I've managed to gain a decent amount of
          experience and valuable knowledge from all different kinds of fields
          throughout my projects/work.
        </p>
        <button className="bg-transparent text-lg  text-white hover:text-xl  hover:opacity-100 opacity-90">
          Say hi {"---> "}
        </button>
      </div>
    </div>
  );
}
