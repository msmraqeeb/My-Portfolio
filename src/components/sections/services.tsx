import { services } from '@/lib/data';

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
              <service.icon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
