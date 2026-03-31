import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  message: z.string().optional(),
  project: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const emailBody = `
New Enquiry — Mala Constructions Website
=========================================
Name:    ${data.name}
Phone:   ${data.phone}
Email:   ${data.email}
Project: ${data.project ?? 'General Enquiry'}
Message: ${data.message ?? '(no message)'}
Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim()

    // Uncomment to enable Nodemailer (add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS to .env.local):
    //
    // const nodemailer = await import('nodemailer')
    // const transporter = nodemailer.default.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT ?? 587),
    //   secure: false,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // })
    // await transporter.sendMail({
    //   from: `"Mala Constructions" <${process.env.SMTP_USER}>`,
    //   to: 'malaconstructionschennai@gmail.com',
    //   replyTo: data.email,
    //   subject: `New Enquiry from ${data.name}${data.project ? ' — ' + data.project : ''}`,
    //   text: emailBody,
    // })

    // Uncomment to enable Resend (add RESEND_API_KEY to .env.local):
    //
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Mala Website <noreply@malaconstructions.com>',
    //   to: 'malaconstructionschennai@gmail.com',
    //   replyTo: data.email,
    //   subject: `New Enquiry from ${data.name}`,
    //   text: emailBody,
    // })

    console.log('ENQUIRY RECEIVED:\n', emailBody)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: err.errors }, { status: 400 })
    }
    console.error('Enquiry API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
