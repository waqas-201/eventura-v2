
export const HeroVideo = () => {
  return (
    // Fixed 1: Use min-h-screen + overflow-hidden
    <section >
      {/* Fixed 2: Responsive iframe container */}
      <video
      width={"100%"}
      height={"100%"}
      autoPlay
      loop
      src="/welcome.mp4"/>
    </section>
  );
}



      // <div className="absolute inset-0 w-full h-full">
  
        
      // </div>




{/* <iframe
  src="https://player.vimeo.com/video/1070420095?title=0&amp;byline=0&amp;muted=1&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
  // Fixed 3: Remove fixed dimensions, use 100% sizing
  className="w-full h-full object-cover"
  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
  title="GPJ Global Sizzle Reel 2025"
  data-ready="true"
  aria-label="Background video"
></iframe> */}