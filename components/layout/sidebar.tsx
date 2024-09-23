"use client";   
import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className="w-80 bg-gray-800 p-4 rounded-lg" data-sidebar>
      <div className="sidebar-info flex flex-col items-center text-center">
        <figure className="avatar-box mb-4">
          <Image
            src="/assets/images/my-avatar.png"
            alt="Richard Hanrick"
            width={80}
            height={80}
            className="rounded-full"
          />
        </figure>

        <div className="info-content">
          <h1 className="text-white text-2xl font-bold" title="Richard Hanrick">
            Richard Hanrick
          </h1>
          <p className="text-gray-400">Web Developer</p>
        </div>

        <button
          className="mt-4 flex items-center justify-center text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setShowContacts(!showContacts)}
          data-sidebar-btn
        >
          <span className="mr-2">Show Contacts</span>
          <ChevronDown/>
        </button>
      </div>

      {showContacts && (
        <div className="sidebar-info_more mt-6">
          <div className="separator border-t border-gray-700 my-4"></div>

          <ul className="contacts-list space-y-4">
            <li className="contact-item flex items-center">
              <div className="icon-box text-gray-400 mr-4">
                <Mail />
              </div>
              <div className="contact-info">
                <p className="contact-title text-gray-400">Email</p>
                <a
                  href="mailto:richard@example.com"
                  className="contact-link text-white"
                >
                  richard@example.com
                </a>
              </div>
            </li>

            <li className="contact-item flex items-center">
              <div className="icon-box text-gray-400 mr-4">
                <Phone />
              </div>
              <div className="contact-info">
                <p className="contact-title text-gray-400">Phone</p>
                <a href="tel:+12133522795" className="contact-link text-white">
                  +1 (213) 352-2795
                </a>
              </div>
            </li>

            <li className="contact-item flex items-center">
              <div className="icon-box text-gray-400 mr-4">
                <Calendar />
              </div>
              <div className="contact-info">
                <p className="contact-title text-gray-400">Birthday</p>
                <time dateTime="1982-06-23" className="text-white">
                  June 23, 1982
                </time>
              </div>
            </li>

            <li className="contact-item flex items-center">
              <div className="icon-box text-gray-400 mr-4">
                <MapPin />
              </div>
              <div className="contact-info">
                <p className="contact-title text-gray-400">Location</p>
                <address className="text-white">
                  Sacramento, California, USA
                </address>
              </div>
            </li>
          </ul>

          <div className="separator border-t border-gray-700 my-4"></div>

          <ul className="social-list flex space-x-4 justify-center">
            <li className="social-item">
              <a
                href="#"
                className="social-link text-gray-400 hover:text-white"
              >
                <Facebook />
              </a>
            </li>
            <li className="social-item">
              <a
                href="#"
                className="social-link text-gray-400 hover:text-white"
              >
                <Twitter />
              </a>
            </li>
            <li className="social-item">
              <a
                href="#"
                className="social-link text-gray-400 hover:text-white"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
}
