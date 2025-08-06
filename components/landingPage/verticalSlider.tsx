// components/InfiniteSliderVertical.tsx
import { InfiniteSlider } from "../ui/infinite-slider";

export function InfiniteSliderVertical() {
    const imageClass = 'aspect-square w-20 md:w-16 lg:w-20 object-contain rounded-md mx-auto';

    return (
        <div className="grid grid-cols-3   md:gap-4 h-[400px] md:h-[500px] w-full justify-items-center">
            {/* Column 1 */}
            <InfiniteSlider direction="vertical" speed={50} speedOnHover={20}>
                <img src="https://logo.clearbit.com/google.com" alt="Google" className={imageClass} />
                <img src="https://logo.clearbit.com/stripe.com" alt="Stripe" className={imageClass} />
                <img src="https://logo.clearbit.com/github.com" alt="GitHub" className={imageClass} />
                <img src="https://logo.clearbit.com/slack.com" alt="Slack" className={imageClass} />
                <img src="https://logo.clearbit.com/spotify.com" alt="Spotify" className={imageClass} />
                <img src="https://logo.clearbit.com/openai.com" alt="OpenAI" className={imageClass} />
            </InfiniteSlider>

            {/* Column 2 - Reverse */}
            <InfiniteSlider  direction="vertical" speed={50} speedOnHover={20} reverse>
                <img src="https://logo.clearbit.com/meta.com" alt="Meta" className={imageClass} />
                <img src="https://logo.clearbit.com/apple.com" alt="Apple" className={imageClass} />
                <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" className={imageClass} />
                <img src="https://logo.clearbit.com/amazon.com" alt="Amazon" className={imageClass} />
                <img src="https://logo.clearbit.com/netflix.com" alt="Netflix" className={imageClass} />
                <img src="https://logo.clearbit.com/youtube.com" alt="YouTube" className={imageClass} />
            </InfiniteSlider>

            {/* Column 3 */}
            <InfiniteSlider   direction="vertical" speed={50} speedOnHover={20}>
                <img src="https://logo.clearbit.com/figma.com" alt="Figma" className={imageClass} />
                <img src="https://logo.clearbit.com/zoom.us" alt="Zoom" className={imageClass} />
                <img src="https://logo.clearbit.com/airbnb.com" alt="Airbnb" className={imageClass} />
                <img src="https://logo.clearbit.com/shopify.com" alt="Shopify" className={imageClass} />
                <img src="https://logo.clearbit.com/notion.so" alt="Notion" className={imageClass} />
                <img src="https://logo.clearbit.com/discord.com" alt="Discord" className={imageClass} />
            </InfiniteSlider>
        </div>
    );
}