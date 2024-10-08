import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="avatar-box mb-4">
        <img
          src="/path-to-image"
          alt="Your Name"
          className="w-20 rounded-full"
        />
      </div>
      <h1 className="text-2xl font-bold">Richard Hanrick</h1>
      <p className="text-sm text-gray-400">Web Developer</p>
      {/* Contacts */}
      <div className="mt-6">
        <h2 className="font-semibold">Contact</h2>
        <ul>
          <li>Email: richard@example.com</li>
          <li>Phone: +1 (213) 352-2795</li>
        </ul>
      </div>
      {/* Social Links */}
    </aside>
  );
};

export default Sidebar;
