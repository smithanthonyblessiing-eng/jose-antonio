const Footer = () => {
  return (
    <footer className="border-t bg-background py-8">
      <div className="container mx-auto px-6 text-center font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} José Antonio Gómez. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
