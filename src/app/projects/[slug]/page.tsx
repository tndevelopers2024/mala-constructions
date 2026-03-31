import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import ProjectDetailClient from './ProjectDetailClient'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  return {
    title: project
      ? `${project.title} | Mala Constructions`
      : 'Project | Mala Constructions',
    description: project?.description || `${project?.title} — ${project?.location}. Built by Mala Constructions, Chennai.`,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-obsidian)' }}>
        <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'var(--text-title)', color: 'var(--color-white)' }}>
          Project not found
        </p>
      </div>
    )
  }

  return <ProjectDetailClient project={project} />
}
