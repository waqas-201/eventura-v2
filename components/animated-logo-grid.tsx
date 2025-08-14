import { LogoColumn } from "@/components/logo-column"

// Define all logos with placeholder URLs and alt text
const allLogos = [
  { src: "/clients-logo/36.png", alt: "Adobe Logo" },
  { src: "/clients-logo/37.png", alt: "Jeep Logo" },
  { src: "/clients-logo/38.png", alt: "Epsilon Logo" },
  { src: "/clients-logo/39.png", alt: "fwd:cloudsec Logo" },
  { src: "/clients-logo/40.png", alt: "Xiaomi Logo" },
  { src: "/clients-logo/41.png", alt: "IMC Logo" },
  { src: "/clients-logo/42.png", alt: "The Weather Company Logo" },
  { src: "/clients-logo/43.png", alt: "AWS Logo" },
  { src: "/clients-logo/44.png", alt: "IBM Logo" },
  { src: "/clients-logo/45.png", alt: "Google Logo" },
  { src: "/clients-logo/46.png", alt: "DP World Logo" },
  { src: "/clients-logo/47.png", alt: "Celonis Logo" },
]

// Distribute logos into three columns for the animation
const column1Logos = [allLogos[0], allLogos[3], allLogos[6], allLogos[9]]
const column2Logos = [allLogos[1], allLogos[4], allLogos[7], allLogos[10]]
const column3Logos = [allLogos[2], allLogos[5], allLogos[8], allLogos[11]]

export function AnimatedLogoGrid() {
  return (
    <div className="relative grid grid-cols-3 md:h-[500px] h-[400px] overflow-hidden bg-black">
      {/* Logo columns */}
      <LogoColumn logos={column1Logos} direction="up" />
      <LogoColumn logos={column2Logos} direction="down" />
      <LogoColumn logos={column3Logos} direction="up" />

      {/* Top & bottom blackish glow */}
      <div className="pointer-events-none absolute inset-0 
        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,transparent_15%,transparent_85%,rgba(0,0,0,0.8)_100%)]">
      </div>


    </div>
  )
}
