export const N8nSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl mb-6 leading-tight">
              Powered by n8n Expertise
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              We leverage n8n, the powerful workflow automation platform, to deliver 
              intelligent automation solutions that connect your entire tech stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight">Why n8n?</h3>
              <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Fair-code distribution</strong> - Full control over your automation infrastructure with no vendor lock-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>400+ integrations</strong> - Connect virtually any tool in your tech stack seamlessly</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>AI-powered workflows</strong> - Built-in AI nodes for intelligent decision-making and data processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Self-hostable</strong> - Keep sensitive data within your infrastructure for complete security</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight">Our n8n Capabilities</h3>
              <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom workflow design and implementation for complex business processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced integration development with API connections and custom nodes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enterprise deployment and infrastructure setup with high availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Training and knowledge transfer for your internal teams</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 rounded-2xl p-8 md:p-12 overflow-hidden shadow-lg">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-primary">Orchestration Platform</span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4 leading-tight">
                From Disconnected Tools to <span className="text-primary">Unified Intelligence</span>
              </h3>

              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
                n8n serves as the orchestration layer that transforms your scattered SaaS tools
                into a cohesive, intelligent automation ecosystem. With visual workflow building
                and powerful execution capabilities, we create automation that adapts to your business needs.
              </p>

              {/* Visual emphasis bar */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                <span className="text-sm text-muted-foreground font-light">Powered by n8n</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
