'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  if (!images.length) return null

  const slides = images.map((src) => ({ src }))

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            onClick={() => { setIndex(i); setOpen(true) }}
            style={{
              position: 'relative',
              aspectRatio: '4/3',
              cursor: 'none',
              overflow: 'hidden',
            }}
          >
            <Image
              src={src}
              alt={`${title} — gallery image ${i + 1}`}
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(14,14,14,0)',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(14,14,14,0.3)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(14,14,14,0)')}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </>
  )
}
