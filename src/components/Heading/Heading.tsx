import React from 'react';

interface HeadingProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export default function Heading({
  level = 'h2',
  children,
  className = '',
  align = 'left',
}: HeadingProps) {
  const Tag = level;

  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  const classes = `${className} ${alignClass}`;

  return <Tag className={classes}>{children}</Tag>;
}
