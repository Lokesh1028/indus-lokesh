import type { Metadata } from 'next'
import { getProject } from '@/data/projects'

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const project = getProject(params.slug)
  if (!project) return { title: 'Project not found | VIP Homes' }
  const title = `${project.name} | ${project.location.short} | VIP Homes`
  const description = `Explore ${project.name}, ${project.status.toLowerCase()} in ${project.location.full}. ${project.tagline}. Discover the project with VIP Homes.`
  const url = `https://viphomes.co.in/projects/${project.slug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: project.cardImage.startsWith('/')
            ? `https://viphomes.co.in${project.cardImage}`
            : project.cardImage,
          alt: project.imageryNote
            ? 'Illustrative landscape imagery'
            : project.name,
        },
      ],
    },
  }
}

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
