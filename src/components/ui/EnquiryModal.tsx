'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import EnquiryForm from '@/components/ui/EnquiryForm'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  project?: string
}

export default function EnquiryModal({ isOpen, onClose, project }: EnquiryModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[9998]"
            style={{ backgroundColor: 'rgba(14, 14, 14, 0.85)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 z-[9999] w-full max-w-lg p-8"
            style={{
              backgroundColor: 'var(--color-ink)',
              border: '1px solid var(--color-graphite)',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, y: 40, x: '-50%', translateY: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%', translateY: '-50%' }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'var(--text-title)',
                  fontWeight: 400,
                  color: 'var(--color-white)',
                }}
              >
                Enquire Now
              </h3>
              <button
                onClick={onClose}
                className="p-2 transition-colors duration-300"
                style={{ color: 'var(--color-ash)' }}
                aria-label="Close enquiry form"
              >
                <X size={20} />
              </button>
            </div>
            <EnquiryForm project={project} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
