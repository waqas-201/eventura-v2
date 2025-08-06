export const HeroVideo = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden border border-red-600">
      <video
        className="w-full h-full object-cover"
        src="/welcome.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
};
