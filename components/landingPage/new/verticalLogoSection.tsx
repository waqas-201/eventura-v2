import { AnimatedLogoGrid } from "@/components/animated-logo-grid";

export default function VerticalSliderSection() {
    return (
        <section className="w-full  text-white  py-12 md:py-20  flex items-center justify-center">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
                {/* Left Text Section */}
                <div className="text-center md:text-left">
                    <h1 className="font-extrabold leading-[0.9] tracking-tighter text-[min(10vw,60px)] md:text-[min(8vw,80px)] lg:text-[min(7vw,90px)]">
                        <span className="sr-only">GPJ is the World's Leading Strategic Experience Marketing Agency</span>
                        <span className="block">GPJ IS THE</span>
                        <span className="block text-primary">WORLD&apos;S</span>
                        <span className="block text-primary">LEADING</span>
                        <span className="block">STRATEGIC</span>
                        <span className="block">EXPERIENCE</span>
                        <span className="block">MARKETING</span>
                        <span className="block">AGENCY</span>
                    </h1>
                </div>

                {/* Right Animated Logos Section */}
                <AnimatedLogoGrid />
            </div>
        </section>
    );
}
