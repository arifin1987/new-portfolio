import { Link } from "react-router-dom";
import {
  useDeleteProjectsMutation,
  useGetProjectsQuery,
} from "../../../redux/api";

const DashboardAllProjects = () => {
  const { data, isLoading } = useGetProjectsQuery();
  const [deleteProject] = useDeleteProjectsMutation();
  console.log(data);

  if (isLoading) {
    return <p>loading.....</p>;
  }
  return (
    <div>
      <div>
        <h2>Total Projects:{data.length}</h2>

        <div className="overflow-x-auto w-full">
          <table className="table w-full bg-sky-300">
            <thead>
              <tr>
                <th>Live Site</th>
                <th>Project Name</th>
                <th>Used Technologies</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((project) => (
                <tr key={project._id}>
                  <td>
                    <img
                      className="w-[100px]"
                      src={project.projectImage}
                      alt=""
                    />{" "}
                  </td>
                  <td>{project.projectName}</td>
                  <td>{project.usedTechnologies}</td>

                  <td>
                    <Link to={`/dashboard/update-projects/${project._id}`}>
                      <button>Edit </button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => deleteProject(project._id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to="/dashboard/create-projects">
                      <button>Add </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardAllProjects;
