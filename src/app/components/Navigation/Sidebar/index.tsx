"use client"; // Mark as Client Component

import React, { useState } from "react"; // Add useState

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <p>Sidebar is {isOpen ? "open" : "closed"}</p>
    </div>
  );
};

export default Sidebar;