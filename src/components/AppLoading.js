"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";

export default function AppLoading({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Logo />;

  return children;
}
