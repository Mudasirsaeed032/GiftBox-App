type Props = { value: number; className?: string };

export default function Badge({ value, className = "" }: Props) {
  if (value <= 0) return null;
  return (
    <span
      className={`absolute -top-1.5 -right-1.5 inline-flex items-center justify-center rounded-full text-[10px] font-semibold px-1.5 py-[2px] bg-gray-900 text-white ${className}`}
      aria-label={`${value} items`}
    >
      {value > 99 ? "99+" : value}
    </span>
  );
}
