'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-card to-background px-4 py-20 mt-0">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium">
          <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
          Accepting applications for next batch
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Master Salesforce.{' '}
          <span className="text-primary">Transform Your Career.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Go from zero to job-ready in 12 weeks. Learn from industry experts in live, interactive batches. 85% of our graduates land roles within 3 months.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="#contact">
            <Button size="lg" className="gap-2 group w-full">
              Join Next Batch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="w-full">
              Start Free Trial
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-border">
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Professionals Trained</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-primary">85%</div>
            <div className="text-sm text-muted-foreground">Job Placement Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-primary">3 Mo</div>
            <div className="text-sm text-muted-foreground">Average to First Role</div>
          </div>
        </div>
      </div>
    </section>
  )
}
