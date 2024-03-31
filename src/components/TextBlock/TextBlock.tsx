interface TextBlockProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  weight?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
}

export default function TextBlock({
  children,
  color = 'text-black',
  size = 'text-base',
  weight = 'font-normal',
  align = 'left',
  className = '',
}: TextBlockProps) {
  const customStyles = `${color} ${size} ${weight} text-${align} ${className}`;

  return <div className={customStyles}>{children}</div>;
}
