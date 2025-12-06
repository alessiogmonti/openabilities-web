import { Camera, Zap, Brain, Wifi } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Camera,
    title: "Fingertip 4K Camera",
    description:
      "Ultra-compact 4K camera embedded in the index finger captures high-resolution images with minimal motion blur.",
  },
  {
    icon: Brain,
    title: "Real-Time AI Narration",
    description:
      "Advanced vision models process and describe scenes instantly, providing natural language descriptions through audio feedback.",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description:
      "Gesture-based activation responds in under 2 seconds. Simply point and tap for immediate scene analysis.",
  },
  {
    icon: Wifi,
    title: "Cloud Integration",
    description:
      "Seamless cloud connectivity enables continuous model updates and access to the latest AI capabilities.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-balance">Technology that sees for you</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Combining precision hardware with state-of-the-art AI to deliver an unprecedented assistive experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="p-8 bg-background border-border hover:border-foreground/20 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center">
                      <Icon className="h-6 w-6 text-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-balance">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
