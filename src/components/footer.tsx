export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-[10px] sm:text-sm leading-loose text-muted-foreground whitespace-nowrap">
          © {new Date().getFullYear()} Shakil Mahmud. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
