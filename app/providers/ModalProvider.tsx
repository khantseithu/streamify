"use client";

import { useState, useEffect } from "react";

import RegisterModal from "@/components/RegisterModal";
import LoginModal from "@/components/LoginModal";
import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
    </>
  );
};
export default ModalProvider;
