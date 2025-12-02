import { tools } from '@/lib/data';

export default function Tools() {
  return (
    <section id="tools">
      <div className="section-title">
        <p>What I Use</p>
        <h2>My Tools</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-3 p-4 bg-card rounded-lg shadow-sm border transition-transform hover:scale-105">
            {/* You can use an Icon component here if you have one */}
            {/* For now, we'll just display the name */}
            {/* <tool.icon className="w-10 h-10 text-primary" /> */}
            <span className="text-sm font-medium">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
