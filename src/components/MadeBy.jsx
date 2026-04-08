function MadeBy({content}) {
  return (
    <section
      aria-label="Website credits"
      className="border-t border-border/60 px-6 py-4">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm text-muted-foreground">
          {content.prefix}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground"
            href="https://www.gaberuseff.com">
            Gaber Usef
          </a>
        </p>
      </div>
    </section>
  );
}

export default MadeBy;
