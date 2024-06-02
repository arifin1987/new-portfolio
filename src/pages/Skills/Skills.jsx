import Container from "../../components/Shared/Container";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiExpress, SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { Flip } from "react-awesome-reveal";
const Skills = () => {
  return (
    <Container>
      <div className="my-8">
        <Flip>
          <h1 className="text-4xl text-emerald-400 text-center my-4 border-y-2 border-emerald-400 w-[25%] mx-auto py-2 ">
            Skills
          </h1>
        </Flip>

        <div className="md:flex justify-between">
          <div>
            <h1 className="text-2xl text-cyan-500">
              {" "}
              <SiTypescript></SiTypescript>TypeScript
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-cyan-500">
              {" "}
              <FaReact></FaReact>React.js
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-cyan-500">
              {" "}
              <SiNextdotjs></SiNextdotjs>Next.js
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-cyan-500">
              {" "}
              <SiRedux></SiRedux>Redux
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-emerald-500">
              <FaNodeJs></FaNodeJs>Node.js
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-emerald-700">
              <BiLogoMongodb></BiLogoMongodb>Mongo DB
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-black">
              <SiExpress></SiExpress> Express.js
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-cyan-500">
              <BiLogoTailwindCss></BiLogoTailwindCss>Tailwind Css{" "}
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-sky-600">
              <FaBootstrap></FaBootstrap>Bootstrap
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-yellow-500">
              <BiLogoFirebase></BiLogoFirebase>Firebase
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
