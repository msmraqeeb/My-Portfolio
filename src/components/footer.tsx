export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-muted-foreground lg:hidden">
      <div className="container">
        <p>© {new Date().getFullYear()} Alex Doe. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
