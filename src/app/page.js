import Banner from "@/components/home/banner/Banner";
import Books from "@/components/home/books/Books";
import MarqueeText from "@/components/home/marquee/MarqueeText";
import Testimonials from "@/components/home/testimonials/Testimonials";
import UserShowcase from "@/components/home/userShowcase/UserShowcase";



export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeText />
      <Books/>
      <Testimonials/>
      <UserShowcase/>
    </div>
  );
}
