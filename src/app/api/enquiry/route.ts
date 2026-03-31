import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const enquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(5, 'Message is required'),
  project: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = enquirySchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      )
    }

    const { name, phone, email, message, project } = result.data

    // Configure transporter — use env vars in production
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER || 'noreply@malaconstructions.com',
      to: 'malaconstructionschennai@gmail.com',
      subject: `New Enquiry${project ? ` — ${project}` : ''} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A870; border-bottom: 1px solid #C9A870; padding-bottom: 12px;">
            New Enquiry from malaconstructions.com
          </h2>
          ${project ? `<p><strong>Project:</strong> ${project}</p>` : ''}
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f0e8; padding: 16px; border-left: 3px solid #C9A870;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #999; font-size: 12px;">This enquiry was submitted via malaconstructions.com</p>
        </div>
      `,
    }

    // Only send if SMTP credentials are configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions)
    } else {
      // Log to console in development
      console.log('Enquiry received (email not configured):', result.data)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Enquiry submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again.' },
      { status: 500 }
    )
  }
}
