import Image from "next/image"

export default function EventCard() {
  return (
    <div className="group relative aspect-[16/9] cursor-pointer overflow-hidden rounded-lg bg-black/50 p-3">
      <div className="relative h-full w-full overflow-hidden rounded">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PuUQE8OnHqCNnMOucnfbOhWJepUHzd.png"
          alt="IBM Think interactive display"
          width={1280}
          height={720}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TWX9krObCrx0hi3bTvq5umtKAlWypI.png"
          alt="IBM Think interactive display - hover state"
          width={1280}
          height={720}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </div>
  )
}
