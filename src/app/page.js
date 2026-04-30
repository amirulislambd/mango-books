import Banner from "@/components/home/banner/Banner";
import Books from "@/components/home/books/Books";
import MarqueeText from "@/components/home/marquee/MarqueeText";



export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeText />
      <Books/>
    </div>
  );
}
