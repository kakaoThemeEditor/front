interface MessageCirclePlusProps {
  className?: string;
  size?: number;
  color?: string;
}

export function MessageCirclePlus({
  className = "",
  size = 21,
  color = "currentColor", // 기본 색 추가
}: MessageCirclePlusProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.007 17.9797C8.51585 17.9816 7.04354 17.6466 5.7 16.9997L1 17.9997L2.3 14.0997C-0.0239997 10.6627 0.874 6.22772 4.4 3.72572C7.926 1.22472 12.99 1.42972 16.245 4.20572C18.237 5.90572 19.175 8.24572 18.992 10.5457M14 16.9997H20M17 13.9997V19.9997"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
