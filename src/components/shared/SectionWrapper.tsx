import { ScrollReveal } from "./ScrollReveal";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className="py-16 sm:py-20 lg:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-teal" />
          </div>
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}