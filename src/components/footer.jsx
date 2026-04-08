import Link from "next/link";

export default function FooterSection({locale, content}) {
  const homeHref = `/${locale}`;

  return (
    <footer className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href={homeHref}
          aria-label="Go to homepage"
          className="mx-auto block size-fit text-sm font-semibold">
          Skinova
        </Link>

        <nav aria-label="Footer navigation" className="my-8">
          <ul className="flex flex-wrap justify-center gap-6" role="list">
            {content.links.map((link, index) => (
              <li key={index}>
                <Link
                  href={`${homeHref}${link.href}`}
                  className="text-muted-foreground hover:text-primary block duration-150">
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul
          className="my-8 flex flex-wrap justify-center gap-6 text-sm"
          role="list"
          aria-label="Social links">
          <li>
            <Link
              href="https://www.facebook.com/gaberuseff"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.linkedInAria}
              className="text-muted-foreground hover:text-primary block">
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/gaberuseff"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.facebookAria}
              className="text-muted-foreground hover:text-primary block">
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
              </svg>
            </Link>
          </li>
        </ul>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} {content.rights}
        </span>
      </div>
    </footer>
  );
}
