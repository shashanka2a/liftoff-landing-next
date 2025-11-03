"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

type NextImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  width?: number;
  height?: number;
};

export function ImageWithFallback(props: NextImageProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, width, height, ...rest } = props;

  if (didError) {
    return (
      <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`} style={style}>
        <div className="flex items-center justify-center w-full h-full">
          <Image src={ERROR_IMG_SRC} alt="Error loading image" width={24} height={24} unoptimized />
        </div>
      </div>
    );
  }

  // If explicit dimensions are provided, use them; otherwise, use fill layout.
  if (typeof width === 'number' && typeof height === 'number') {
    return (
      <Image
        src={src ?? ''}
        alt={alt ?? ''}
        width={width}
        height={height}
        className={className}
        style={style}
        onError={handleError}
        unoptimized={String(src).startsWith('data:')}
        {...(rest as any)}
      />
    );
  }

  return (
    <div className={className} style={{ position: 'relative', ...style }}>
      <Image
        src={src ?? ''}
        alt={alt ?? ''}
        fill
        sizes="100vw"
        onError={handleError}
        unoptimized={String(src).startsWith('data:')}
        {...(rest as any)}
      />
    </div>
  );
}
