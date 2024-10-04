import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import Image from "next/image";
// import profilePic from

export default function about() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <Image
        className=" mx-auto border-4 border-green-200 rounded-full mb-6 mt-6"
        src="images/Profile.svg"
        alt=""
        width={300}
        height={300}
      />
      <div className="flex-grow">
        <p className="ml-2 w-full  sm:w-3/4 sm:mx-auto leading-7 tracking-wide mb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          reiciendis quas dolor, voluptatibus impedit magnam facilis iure
          dolores quo recusandae, atque ab earum a laboriosam accusantium ipsum
          totam vero, voluptatem aliquam tempore minima maiores hic! Deleniti
          dicta cum molestiae quo nisi saepe at accusantium facilis voluptatum.
          Aliquid nihil dignissimos possimus?
        </p>

        <p className="ml-2 w-full  sm:w-3/4 sm:mx-auto leading-7 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          exercitationem ipsa quaerat, praesentium assumenda itaque temporibus,
          laudantium magnam dicta minima quisquam debitis quod, adipisci cum.{" "}
        </p>
      </div>

      <Footer />
    </div>
  );
}
