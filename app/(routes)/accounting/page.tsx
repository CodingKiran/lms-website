import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";

export default function Accounting() {
  const chapters = ["Intro", "Chapter 1", "Chapter 2", "Chapter 3"];
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <section className="flex-grow">
        <h1 className="text-center pt-10 pb-8 text-4xl">Accounting</h1>
        <ul className="rounded-md flex-col mb-4 shadow-md p-3 w-60 mx-auto">
          {chapters.map((each, i) => (
            <li className="py-2 pl-4" key={i}>
              {each}
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}
