import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Intro */}
        <div className="space-y-4">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground">
            Prarambh.
          </h2>
          <p className="text-muted-foreground font-sans text-sm leading-relaxed">
            Rooted in community realities, we co-create and scale sustainable solutions to complex development problems.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-sans font-semibold tracking-wide uppercase text-primary-foreground">
            Connect
          </h3>
          <ul className="space-y-3 font-sans text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:prarambhfoundation2023@gmail.com"
                className="hover:text-primary-foreground transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                prarambhfoundation2023@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+918826547301"
                className="hover:text-primary-foreground transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                +91 8826547301
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h3 className="text-lg font-sans font-semibold tracking-wide uppercase text-primary-foreground">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
          <p className="text-sm font-sans text-muted-foreground mt-2">
            @prarambhfoundation
          </p>
        </div>

        {/* Registration Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-sans font-semibold tracking-wide uppercase text-primary-foreground">
            Registration
          </h3>
          <div className="text-sm font-sans text-muted-foreground space-y-2">
            <p>Non-profit organisation registered under Society Act</p>
            <p>Reg No: FIR/06491/2023-2024</p>
            <p>Registered on 26/12/2023</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-muted-foreground/20 text-center font-sans text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Prarambh Foundation. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          A happy, healthy, safe and sustainable world for all.
        </p>
      </div>
    </footer>
  );
}
