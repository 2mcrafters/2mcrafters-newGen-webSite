import Image from "next/image";
import { contactItems, navItems } from "@/lib/data";
import { Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/108333019/admin/dashboard/',
    Icon: Linkedin,
  },
  { label: 'Instagram', href: 'https://www.instagram.com/2m.crafters/', Icon: Instagram },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/2mcrafters/61578604900086/',
    Icon: Facebook,
  },
  { label: 'WhatsApp', href: 'https://wa.me/212688284783', Icon: MessageCircle },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 bg-linear-to-b from-[#00315f] to-[#001428] py-8 text-sm text-slate-300"
    >
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <FadeInOnScroll>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl space-y-3">
              <Image
                src="/images/whitelogohori.png"
                width={150}
                height={36}
                alt="Crafters"
                className="max-w-[210px]"
                priority
              />
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">À propos</p>
              <h3 className="text-2xl font-semibold text-white">
                CRAFTERS, entreprise digital-tech & créative.
              </h3>
              <p className="text-slate-400">
                Basés à Tanger, nous accompagnons les entreprises dans leurs projets web, SaaS,
                branding et digitalisation RH.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-white/80">
                {contactItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-sm">
                    <span className="block text-[0.55rem] uppercase tracking-[0.4em] text-slate-500">
                      {item.label}
                    </span>
                    {item.value}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Navigation</p>
              <div className="flex flex-wrap gap-4 text-white">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="opacity-75 transition hover:opacity-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 text-white/70">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} CRAFTERS – Tous droits réservés.</p>
            <p>Entreprise basée à Tanger · Disponible worldwide</p>
          </div>
        </FadeInOnScroll>
      </div>
    </footer>
  );
}
