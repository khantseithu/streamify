"use client";

import { useState, useEffect } from "react";

import RegisterModal from "@/components/RegisterModal";
import LoginModal from "@/components/LoginModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <LoginModal />
      <RegisterModal />
    </>
  );
};
export default ModalProvider;
