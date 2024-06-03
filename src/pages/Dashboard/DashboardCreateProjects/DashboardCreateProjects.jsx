import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAddProjectsMutation } from "../../../redux/api";

const DashboardCreateProjects = () => {
  const [addProject] = useAddProjectsMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    addProject(data);
    if (data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `created successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    reset();
  };
  return (
    <div>
      <div className="w-full  ">
        <h1 className="text-red-500 text-2xl my-4">Create Projects</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="">Image:</label>
            <input
              className="w-full rounded-md p-4 border-slate-600 border-2"
              type="text"
              {...register("projectImage", { required: true })}
              placeholder="Image"
            />
            {errors.projectImage && (
              <span className="text-red-600">Image is required</span>
            )}
          </div>
          <div>
            <label className="">Project Name</label>
            <input
              className="w-full rounded-md p-4 border-slate-600 border-2"
              type="text"
              {...register("projectName", { required: true })}
              placeholder="Project Name"
            />
            {errors.projectName && (
              <span className="text-red-600">Project Name is required</span>
            )}
          </div>
          <div>
            <label className="">Project Description</label>
            <input
              className="w-full rounded-md p-4 border-slate-600 border-2"
              type="text"
              {...register("projectDescription", { required: true })}
              placeholder="Project Description"
            />
            {errors.projectDescription && (
              <span className="text-red-600">
                Project Description is required
              </span>
            )}
          </div>
          <div>
            <label className="">Used Technologies</label>
            <input
              className="w-full rounded-md p-4 border-slate-600 border-2"
              type="text"
              {...register("usedTechnologies", { required: true })}
              placeholder="Used Technologies"
            />
            {errors.usedTechnologies && (
              <span className="text-red-600">
                Used Technologies is required
              </span>
            )}
          </div>
          <div>
            <label className="">Live Site</label>
            <input
              className="w-full rounded-md p-4 border-slate-600 border-2"
              type="text"
              {...register("liveSite", { required: true })}
              placeholder="Live Site"
            />
            {errors.liveSite && (
              <span className="text-red-600">Live Site is required</span>
            )}
          </div>
          <button
            className="border-2 p-4 w-full rounded-md bg-blue-500 text-white-500 my-2 text-white"
            type="submit"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardCreateProjects;
