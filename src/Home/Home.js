import "./Home.css";
import Section1 from "../Component/Section1/Section1";
import Section2 from "../Component/Section2/Section2";
import Section3 from "../Component/Section3/Section3";

function Home(){
return (
    <>
  
    <div className="container">
      <div className="section1"><Section1/></div>
    <div className="main">
        <Section2/>
        <Section3/>
    </div>
    </div>

    </>
    
  );
}
export default Home;