export default function Footer() {
  return (
    <footer className="py-24 text-center text-xs text-muted-foreground">
      <div className="container">
        <p>© {new Date().getFullYear()} Shakil Mahmud. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
