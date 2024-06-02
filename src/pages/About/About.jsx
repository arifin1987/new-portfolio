import { Flip } from "react-awesome-reveal";
import Container from "../../components/Shared/Container";

const About = () => {
  return (
    <Container>
      <Flip>
        <h1 className="text-4xl text-emerald-400 text-center my-4 border-y-2 border-emerald-400 w-[25%] mx-auto py-2">
          About Me
        </h1>
      </Flip>

      <p className="text-center border-2 p-4 rounded-md my-4 text-emerald-500 shadow-md shadow-emerald-500">
        I am Shohidul Arifin. I am a MERN Stack Developer. I am skilled in
        JavaScript, TypeScript, Mongoose, React.js, Next.js, Redux Tool Kit,
        Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, Ant design, Framer
        Motion, Shadcn, Bootstrap etc. I did BSC. In Electrical and Electronic
        Engineering from American International University-Bangladesh(AIUB). I
        have completed Complete Web Development Course With Jhankar Mahbub from
        Programming Hero.
      </p>
    </Container>
  );
};

export default About;
