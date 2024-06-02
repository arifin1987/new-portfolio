import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Container from "../../../components/Shared/Container";
import { Rotate, Slide } from "react-awesome-reveal";

import img1 from "../../../assets/SA CV PIC.jpg";

const Banner = () => {
  return (
    <Container>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img1}
            width="500"
            height="500"
            className="max-w-sm rounded-[50%] shadow-2xl"
          />
          <div>
            <Slide>
              <h1 className="text-5xl font-bold py-4 text-emerald-500">
                Hi, I am Shohidul Arifin
              </h1>
            </Slide>
            <Rotate>
              <h2 className="text-3xl py-2 ">MERN Stack Developer</h2>
            </Rotate>

            <div className="flex gap-8 my-2 text-xl">
              <div>
                <a target="_blank" href="https://github.com/arifin1987">
                  Github<FaGithub></FaGithub>
                </a>
              </div>
              <div className="text-sky-500">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/shohidul-arifin-257527237"
                >
                  LinkedIn<FaLinkedinIn></FaLinkedinIn>
                </a>
              </div>
            </div>
            <h3 className="py-6  text-xl text-emerald-500 w-[70%]">
              I have vast experience in TypeScript, NodeJS, ExpressJS, ReactJS,
              Next.js, Redux Tool Kit, MongoDB, Firebase, Bootstrap, Tailwind
              css, Ant Design, Framer Motion, shadcn etc.
            </h3>
            <button className="btn btn-primary">
              {" "}
              <a href="Shohidul Arifin_MERN-Stack_CV.pdf" download>
                Download Resume <FaDownload></FaDownload>
              </a>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
