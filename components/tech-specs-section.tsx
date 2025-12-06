import { Card } from "@/components/ui/card"

const specs = [
  { label: "Camera Resolution", value: "4K @ 30fps" },
  { label: "Processing", value: "Edge + Cloud Hybrid" },
  { label: "Battery Life", value: "12 hours continuous" },
  { label: "Charging", value: "USB-C Fast Charge" },
  { label: "Weight", value: "85 grams" },
  { label: "Connectivity", value: "Bluetooth 5.3 + WiFi 6" },
  { label: "Water Resistance", value: "IP67 Rated" },
  { label: "Material", value: "Medical-grade silicone" },
]

const useCase = [
  "Visual assistance for the visually impaired",
  "Hands-free documentation for field professionals",
  "Real-time object identification and analysis",
  "Language translation via scene text recognition",
  "Navigation support in complex environments",
  "Educational tool for interactive learning",
]

export function TechSpecsSection() {
  return (
    <section id="technology" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-balance">Engineered for precision</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Every component designed with the highest standards in mind. From the custom optical system to the
                low-latency wireless architecture.
              </p>
            </div>

            <Card className="p-6 bg-secondary/30 border-border">
              <h3 className="text-lg font-semibold mb-6">Technical Specifications</h3>
              <dl className="grid grid-cols-2 gap-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="space-y-1">
                    <dt className="text-xs text-muted-foreground">{spec.label}</dt>
                    <dd className="text-sm font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-foreground text-background border-foreground">
              <h3 className="text-2xl font-bold mb-6 text-balance">Use Cases</h3>
              <ul className="space-y-4">
                {useCase.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-background/20 flex items-center justify-center text-sm font-medium mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-background/90 leading-relaxed text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-secondary/30 border-border text-center">
                <div className="text-3xl font-bold mb-1">{"<"}100ms</div>
                <div className="text-sm text-muted-foreground">Camera latency</div>
              </Card>
              <Card className="p-6 bg-secondary/30 border-border text-center">
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Recognition accuracy</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
