import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public/data/realestate.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return data.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function ProjectDetails({ params }) {
  const filePath = path.join(process.cwd(), "public/data/realestate.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  const project = data.find((item) => item.id.toString() === params.id);

  if (!project) return notFound();

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-4">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-96 object-cover rounded-xl"
      />
      <h1 className="text-2xl font-bold"></h1>
      <p className="text-gray-600">{project.location}</p>
      <p className="text-yellow-500 font-semibold">{project.price}</p>
      <p>{project.description}</p>
    </div>
  );
}
