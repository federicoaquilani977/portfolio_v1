import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data/projects";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDetailContent from "@/components/projects/ProjectDetailContent";
import ProjectNavigation from "@/components/projects/ProjectNavigation";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="relative">
      <ProjectDetailHero project={project} />
      <ProjectDetailContent project={project} />
      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
    </div>
  );
}
