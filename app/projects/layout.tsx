"use client";

import ProjectPageHeader from "@/containers/projects/components/ProjectPageHeader";
import SidebarProject from "@/containers/projects/components/SidebarProject";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { step, milestone, project } = useParams<{
    milestone: string;
    step: string;
    project: string;
  }>();
  const { projectNameSelected, setProjectNameSelected } = useMilestoneStore();

  useEffect(() => {
    setProjectNameSelected(project || "", milestone, step);
  }, [step, milestone, project]);

  return <section>{children}</section>;
}
