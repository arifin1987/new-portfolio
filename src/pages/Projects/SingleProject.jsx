import { Link } from "react-router-dom";

const SingleProject = ({ item }) => {
  const { projectImage, projectName, usedTechnologies, _id } = item;
  return (
    <div className="border-2 border-blue-400 rounded p-4">
      <img src={projectImage} alt="" />
      <h1 className="text-xl my-2">Project Name: {projectName}</h1>
      <p className="my-2">Technologies: {usedTechnologies}</p>
      <Link to={`all-projects/${_id}`}>
        <button className="bg-teal-500 p-2 rounded text-white">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleProject;
