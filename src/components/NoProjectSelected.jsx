import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-3/4 ">
      <img
        src={noProjectImage}
        alt="An Empty task lists"
        className="w-16 h-16 object-contain ms-auto"
      />
      <h1 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No Project Selected
      </h1>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
}
