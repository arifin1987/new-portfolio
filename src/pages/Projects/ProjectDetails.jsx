import { Link, useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";

const ProjectDetails = () => {
  const data = useLoaderData();

  const {
    projectImage,
    projectName,
    usedTechnologies,
    projectDescription,
    liveSite,
  } = data;
  return (
    <Container>
      <div className="md:flex gap-8 justify-center items-center my-4">
        <img className="h-[400px] rounded-md" src={projectImage} alt="" />
        <div>
          <h1 className="text-emerald-600 text-2xl my-2">
            Project Name:{projectName}
          </h1>
          <p className="text-emerald-500 w-2/3 my-2">
            Technologies: {usedTechnologies}
          </p>
          <p className="text-emerald-500 ">
            Project Description:{projectDescription}
          </p>
          <Link to={liveSite}>
            <button className="bg-teal-500 p-2 rounded text-white">
              Live Site
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetails;
