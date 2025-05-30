import Hero from "@/components/Hero";
import Main from "@/components/Main";
// import UnderConstruction from "@/components/UnderConstruction";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div id="main">
        <Main />
      </div>
      
      {/* <UnderConstruction /> */}
    </div>
  );
}
