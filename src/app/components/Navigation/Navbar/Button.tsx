"use client";
import React from "react";
const Button = ({ onClick }: { onClick: () => void }) => {
    return (
      <button onClick={onClick} className="h-12 rounded-lg bg-white font-bold px-5">Sign In</button>
    );
  };

export default Button;