'use client'

import { useState } from "react"
import Image from "next/image";

import { PATH } from "@/app/constants/path";

interface Image {
  src: string;
  alt: string;
  className: string;
  width: number;
  height: number;
  priority?: any;
}

export default function ImageWithFallback(props: Image) {
  const [error, setError] = useState<boolean>(false);

  return (
    <Image
      {...props}
      src={error ? PATH.defaultImage : props.src}
      onError={() => setError(true)}
      placeholder='blur'
      blurDataURL={PATH.defaultImage}
    />
  )
}