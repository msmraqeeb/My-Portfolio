import CuratorForm from './curator-form';

export default function AIPortfolioCuratorPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">AI Portfolio Curator</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Leverage AI to refine your project's presentation. Enter your project details below, and our AI will suggest optimal tags and categories to enhance its discoverability and impact.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <CuratorForm />
      </div>
    </div>
  );
}
