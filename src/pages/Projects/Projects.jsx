import Container from "../../components/Shared/Container";
import { useGetProjectsQuery } from "../../redux/api";
import SingleProject from "./SingleProject";

const Projects = () => {
  const { data, isLoading } = useGetProjectsQuery(undefined);
  if (isLoading) {
    return <p>loading.....</p>;
  }
  console.log(data);
  return (
    <Container>
      <h1 className="text-4xl text-emerald-400 text-center my-4 border-y-2 border-emerald-400 w-[25%] mx-auto py-2">
        Projects
      </h1>
      <div className="md:grid grid-cols-3 gap-8 my-8">
        {data.map((item) => (
          <SingleProject key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
