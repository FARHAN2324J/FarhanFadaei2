
import TimeDifference from "../../components/TimeDifference";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <>
      <TimeDifference />
      <Hero />
      <main>
        <Projects />
      </main>
    </>
  );
};

export default Home;
