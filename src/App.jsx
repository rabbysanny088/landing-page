import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section6 from "./pages/Section6";
import Section7 from "./pages/Section7";
import { default as Section8 } from "./pages/Section8";
import Section9 from "./pages/Section9";

const App = () => {
  return (
    <>
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8
          speed="-3"
          headerText={" What Our Customers Say"}
          paddTop={"3rem"}
        />
        <Section8 speed="-5" />
        <Section9 />
      </main>
    </>
  );
};

export default App;
