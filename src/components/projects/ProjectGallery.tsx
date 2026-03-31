'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { getPlaceholderImage } from '@/lib/utils'

interface ProjectGalleryProps {
  images: string[]
  projectSlug: string
}

export default function ProjectGallery({ images, projectSlug }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const galleryImages = images.length > 0
    ? images.map((src, i) => ({
        src: getPlaceholderImage(`${projectSlug}-gallery-${i}`, 1200, 800),
        alt: `${projectSlug} gallery image ${i + 1}`,
      }))
    : [
        {
          src: getPlaceholderImage(projectSlug, 1200, 800),
          alt: `${projectSlug} cover image`,
        },
      ]

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {galleryImages.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setLightboxIndex(i)
              setLightboxOpen(true)
            }}
            className="relative overflow-hidden group"
            style={{ aspectRatio: '4/3' }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div
              className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{ backgroundColor: 'rgba(201, 168, 112, 0.15)' }}
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={galleryImages.map((img) => ({ src: img.src }))}
      />
    </>
  )
}
