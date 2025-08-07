import { LogoColumn } from "@/components/logo-column"

// Define all logos with placeholder URLs and alt text
const allLogos = [
  { src: "/adobe-logo.png", alt: "Adobe Logo" },
  { src: "/placeholder-4cgjz.png", alt: "Jeep Logo" },
  { src: "/placeholder-8u9dd.png", alt: "Epsilon Logo" },
  { src: "/cloudsec-logo.png", alt: "fwd:cloudsec Logo" },
  { src: "/xiaomi-logo.png", alt: "Xiaomi Logo" },
  { src: "/imc-logo.png", alt: "IMC Logo" },
  { src: "/weather-company-logo.png", alt: "The Weather Company Logo" },
  { src: "/placeholder-lu6cy.png", alt: "AWS Logo" },
  { src: "/ibm-logo.png", alt: "IBM Logo" },
  { src: "/google-logo.png", alt: "Google Logo" },
  { src: "/dp-world-logo.png", alt: "DP World Logo" },
  { src: "/celonis-logo.png", alt: "Celonis Logo" },
];

// Distribute logos into three columns for the animation
const column1Logos = [allLogos[0], allLogos[3], allLogos[6], allLogos[9]];
const column2Logos = [allLogos[1], allLogos[4], allLogos[7], allLogos[10]];
const column3Logos = [allLogos[2], allLogos[5], allLogos[8], allLogos[11]];

export function AnimatedLogoGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 h-[400px] overflow-hidden">
      <LogoColumn logos={column1Logos} direction="up" />
      <LogoColumn logos={column2Logos} direction="down" />
      <LogoColumn logos={column3Logos} direction="up" />
    </div>
  );
}
