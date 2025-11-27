'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MessageSquare } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-card scroll-smooth">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Start?</h2>
          <p className="text-lg text-muted-foreground">
            Get in touch and our team will help you find the perfect batch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 text-center space-y-2">
            <Mail className="w-6 h-6 text-primary mx-auto" />
            <div className="text-sm font-semibold">Email</div>
            <div className="text-xs text-muted-foreground">support@cloud101academy.com</div>
          </Card>
          <Card className="p-4 text-center space-y-2">
            <Phone className="w-6 h-6 text-primary mx-auto" />
            <div className="text-sm font-semibold">Phone</div>
            <div className="text-xs text-muted-foreground">+91 (555) 123-4567</div>
          </Card>
          <Card className="p-4 text-center space-y-2">
            <MessageSquare className="w-6 h-6 text-primary mx-auto" />
            <div className="text-sm font-semibold">Response Time</div>
            <div className="text-xs text-muted-foreground">Within 24 hours</div>
          </Card>
        </div>

        <Card className="p-8">
          {submitted ? (
            <div className="text-center space-y-4">
              <div className="text-lg font-semibold text-primary">Thank you!</div>
              <p className="text-muted-foreground">
                Check your email for next steps. Our team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <select
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select your track</option>
                <option value="admin">Salesforce Administrator</option>
                <option value="developer">Salesforce Developer</option>
                <option value="fullstack">Full-Stack Professional</option>
                <option value="unsure">Not sure yet</option>
              </select>

              <textarea
                placeholder="Any questions or background info? (Optional)"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />

              <label className="flex gap-2 text-sm">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-border"
                />
                <span>
                  I agree to Cloud101's privacy policy and to be contacted about courses & offers.
                </span>
              </label>

              <Button type="submit" className="w-full">
                Send My Application
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
