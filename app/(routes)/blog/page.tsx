import BlogCard from "@/components/BlogCard/page";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";

export default function blog() {
  return (
    <div>
      <Navbar />
      <div className="md:flex gap-4 mx-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Footer />
    </div>
  );
}
