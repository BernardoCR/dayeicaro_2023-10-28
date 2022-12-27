const Hero = (): JSX.Element => {
  return (
    <div className="relative h-screen min-h-[32rem] bg-joanGreen-500 selection:bg-white selection:text-joanGreen-500">
      <div className="absolute bottom-16 left-12">
        <div className="mb-8 max-w-2xl font-serif text-7xl text-white">
          <span className="italic">Chandra & João</span> vão finalmente fazer
          dessa união uma festa.
        </div>
        <div className="space-x-4">
          <a
            href="#lista-de-presentes"
            className="inline-flex min-h-[2.5rem] select-none items-center rounded-full border border-white px-5 text-white transition hover:bg-white hover:text-joanGreen-500"
          >
            Escolher presente
          </a>
          <a
            href="#confirmar-presenca"
            className="inline-flex min-h-[2.5rem] select-none items-center rounded-full border border-white px-5 text-white transition hover:bg-white hover:text-joanGreen-500"
          >
            Confirmar presença
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
