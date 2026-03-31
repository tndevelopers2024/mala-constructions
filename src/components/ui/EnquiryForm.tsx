'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const enquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(5, 'Message is required'),
})

type EnquiryData = z.infer<typeof enquirySchema>

interface EnquiryFormProps {
  project?: string
  compact?: boolean
}

export default function EnquiryForm({ project, compact }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryData>({
    resolver: zodResolver(enquirySchema),
  })

  const onSubmit = async (data: EnquiryData) => {
    try {
      setError('')
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, project }),
      })

      if (res.ok) {
        setSubmitted(true)
        reset()
      } else {
        const result = await res.json()
        setError(result.error || 'Something went wrong')
      }
    } catch {
      setError('Failed to submit. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'var(--text-title)',
            fontWeight: 400,
            color: 'var(--color-gold)',
          }}
        >
          Thank You
        </p>
        <p
          className="mt-2"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '14px',
            color: 'var(--color-ash)',
          }}
        >
          We will get back to you shortly.
        </p>
      </div>
    )
  }

  const inputStyles = {
    backgroundColor: 'transparent',
    border: '1px solid var(--color-graphite)',
    color: 'var(--color-white)',
    fontFamily: 'var(--font-dm-sans), sans-serif',
    fontSize: '14px',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.25s ease',
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('name')}
          placeholder="Your Name"
          style={inputStyles}
          className="focus:border-[var(--color-gold)]"
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--color-graphite)')}
        />
        {errors.name && (
          <p className="mt-1 text-xs" style={{ color: 'var(--color-sand)' }}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <input
          {...register('phone')}
          placeholder="Phone Number"
          type="tel"
          style={inputStyles}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--color-graphite)')}
        />
        {errors.phone && (
          <p className="mt-1 text-xs" style={{ color: 'var(--color-sand)' }}>
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <input
          {...register('email')}
          placeholder="Email Address"
          type="email"
          style={inputStyles}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--color-graphite)')}
        />
        {errors.email && (
          <p className="mt-1 text-xs" style={{ color: 'var(--color-sand)' }}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register('message')}
          placeholder="Your Message"
          rows={compact ? 3 : 4}
          style={{ ...inputStyles, resize: 'none' }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--color-graphite)')}
        />
        {errors.message && (
          <p className="mt-1 text-xs" style={{ color: 'var(--color-sand)' }}>
            {errors.message.message}
          </p>
        )}
      </div>

      {error && (
        <p className="text-xs" style={{ color: 'var(--color-sand)' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 transition-all duration-300"
        style={{
          border: '1px solid var(--color-gold)',
          backgroundColor: 'transparent',
          color: 'var(--color-gold)',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: '12px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-gold)'
          e.currentTarget.style.color = 'var(--color-obsidian)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = 'var(--color-gold)'
        }}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
      </button>
    </form>
  )
}
