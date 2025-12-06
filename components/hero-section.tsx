import { Button } from "@/components/ui/button";
import { GloveModel } from "@/components/glove-model";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/30 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
              </span>
              Seed Funding Open
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                AI vision at your fingertips
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
                Revolutionary wearable technology that captures your world
                through a fingertip camera and narrates what it sees with
                cutting-edge AI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base font-medium">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium bg-transparent">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/40">
              <div>
                <div className="text-3xl font-bold">4K</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Camera Resolution
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">{"<"}2s</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Response Time
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">12hr</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Battery Life
                </div>
              </div>
            </div>
          </div>

          <div className="lg:h-[600px] h-screen top-0">
            <GloveModel />
          </div>
        </div>
      </div>
    </section>
  );
}
