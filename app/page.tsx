import { CopyEmailButton } from "@/components/copy-email-button"

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/robert-garabetian" },
  { label: "Resume", href: "/Robert-Garabetian-Resume.pdf" },
]

const linkClassName =
  "text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <p className="text-left text-lg leading-relaxed text-balance text-foreground">
          Hi, my name&apos;s Robert and I&apos;m a Computer Science student at
          USC, graduating in December 2027. I love programming in Go and C++ and
          I&apos;m passionate about systems programming. I recently worked as a
          software engineer at Layup Parts, a composites manufacturing startup
          serving aerospace and defense companies.
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-lg">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              {link.label}
            </a>
          ))}
          <CopyEmailButton className={`cursor-pointer ${linkClassName}`} />
        </nav>
      </div>
    </main>
  )
}
