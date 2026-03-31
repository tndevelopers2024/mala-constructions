'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

interface EnquiryModalProps {
  open: boolean
  onClose: () => void
  project?: string
}

export default function EnquiryModal({ open, onClose, project }: EnquiryModalProps) {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, project }),
      })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
      reset()
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            backgroundColor: 'rgba(14,14,14,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--color-ink)',
              border: '1px solid var(--color-graphite)',
              padding: '2.5rem',
              maxWidth: '480px',
              width: '100%',
              position: 'relative',
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-ash)',
                cursor: 'none',
                padding: '4px',
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-gold)' }} />
              <span className="text-ui" style={{ color: 'var(--color-gold)', fontSize: '10px' }}>
                GET IN TOUCH
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: 300,
                color: 'var(--color-white)',
                marginBottom: '1.5rem',
              }}
            >
              Enquire Now
            </h3>

            {sent ? (
              <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '14px' }}>
                Thank you! We'll be in touch shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['name', 'phone', 'email'].map((field) => (
                  <div key={field}>
                    <input
                      {...register(field as 'name' | 'phone' | 'email')}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: '1px solid var(--color-graphite)',
                        borderRadius: 0,
                        padding: '12px 16px',
                        color: 'var(--color-white)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.25s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-graphite)')}
                    />
                    {errors[field as keyof FormData] && (
                      <p style={{ color: '#c0392b', fontSize: '11px', marginTop: '4px' }}>
                        {errors[field as keyof FormData]?.message}
                      </p>
                    )}
                  </div>
                ))}
                <textarea
                  {...register('message')}
                  placeholder="Message (optional)"
                  rows={3}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: '1px solid var(--color-graphite)',
                    borderRadius: 0,
                    padding: '12px 16px',
                    color: 'var(--color-white)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.25s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-graphite)')}
                />
                {error && <p style={{ color: '#c0392b', fontSize: '12px' }}>{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    border: '1px solid var(--color-gold)',
                    background: 'transparent',
                    color: 'var(--color-gold)',
                    padding: '14px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'none',
                    transition: 'background 0.3s, color 0.3s',
                    opacity: isSubmitting ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-gold)'
                    e.currentTarget.style.color = 'var(--color-obsidian)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--color-gold)'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
