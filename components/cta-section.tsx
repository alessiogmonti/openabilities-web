import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-balance">
            Join the vision revolution
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            We're seeking strategic partners and investors to bring
            OpenAbilities to market. Schedule a demo to experience the future of
            assistive technology.
          </p>
        </div>

        <div className="space-y-4">
          <form className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 bg-background"
            />
            <Button size="lg" className="h-12 font-medium">
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground text-center">
            Institutional investors and strategic partners only. By submitting,
            you agree to our terms.
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-border/40">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">Series A</div>
              <div className="text-sm text-muted-foreground">
                Currently Raising
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">$5M</div>
              <div className="text-sm text-muted-foreground">Target Amount</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Q2 2025</div>
              <div className="text-sm text-muted-foreground">
                Expected Launch
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
