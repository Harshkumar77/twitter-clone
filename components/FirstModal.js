"use client"

import { useEffect } from "react";


export default function FirstModal() {
  useEffect(() => {
  // if(localStorage.getItem("username")) {
      window.location.replace("/home");
  } , [])
  return <p></p>
}
