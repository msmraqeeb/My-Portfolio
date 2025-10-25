import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  return (
    <section id="services">
      <div className="section-title">
        <p>What I Do?</p>
        <h2>My Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="text-primary mt-1">
              <service.icon className="h-10 w-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
