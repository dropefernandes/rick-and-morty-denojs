type Props = {
  width: string;
  height: string;
};

export default function ChevronLeftIcon({ width, height }: Props) {
  return (
    <svg
      className={`h-${height} w-${width}`}
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      >
      </path>
    </svg>
  );
}
