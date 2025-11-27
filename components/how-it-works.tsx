'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, BookOpen, Briefcase, Download } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Users,
    title: 'Enroll in a Live Batch',
    description: 'Choose your track (Admin/Developer/Combo) and start date. Get matched with a cohort of professionals. Access to curriculum, recordings, and exclusive Slack community.',
    cta: 'Browse Batch Schedules',
    downloadUrl: '/pdfs/batch-schedule.pdf',
  },
  {
    number: 2,
    icon: BookOpen,
    title: 'Learn from Industry Experts',
    description: 'Attend 2–3 live sessions weekly. Build projects. Get code reviews & feedback. Collaborate with peers. Earn completion certificate.',
    cta: 'See Sample Curriculum',
    downloadUrl: '/pdfs/sample-curriculum.pdf',
  },
  {
    number: 3,
    icon: Briefcase,
    title: 'Get Job-Ready & Land Roles',
    description: 'Interview prep, mock interviews, portfolio review, and job board access. Our placement team helps match you with opportunities.',
    cta: 'View Success Stories',
    downloadUrl: null,
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your journey from learning to earning in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <Card key={step.number} className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{step.description}</p>
                </div>

                {step.downloadUrl ? (
                  <a href={step.downloadUrl} download className="inline-flex">
                    <Button variant="link" className="p-0 h-auto gap-2">
                      <Download className="w-4 h-4" />
                      {step.cta}
                    </Button>
                  </a>
                ) : (
                  <a href="#contact">
                    <Button variant="link" className="p-0 h-auto gap-2">
                      {step.cta}
                      <span>→</span>
                    </Button>
                  </a>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
