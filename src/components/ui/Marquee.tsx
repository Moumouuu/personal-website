const Star2 = () => {
  return (
    <div className="mx-2">
      <svg
        className="h-12 w-12"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.7184 17.1578L51.8751 51.75L64.0318 17.1578C66.9771 8.77716 60.7582 3.00138e-06 51.8751 2.22479e-06C42.992 0 36.7731 8.77714 39.7184 17.1578ZM39.7184 86.5922L51.8751 52L64.0318 86.5922C66.9771 94.9729 60.7582 103.75 51.8751 103.75C42.992 103.75 36.7731 94.9729 39.7184 86.5922ZM52 51.8751L86.5922 39.7184C94.9729 36.7731 103.75 42.992 103.75 51.8751C103.75 60.7582 94.9728 66.9771 86.5922 64.0318L52 51.8751ZM17.1578 39.7183L51.75 51.8751L17.1578 64.0318C8.77715 66.9771 -5.81127e-06 60.7582 -6.19957e-06 51.8751C-6.58786e-06 42.9919 8.77713 36.7731 17.1578 39.7183ZM51.9634 51.9634L85.0198 67.8276C93.0285 71.6711 94.8375 82.2748 88.5561 88.5562C82.2748 94.8375 71.671 93.0285 67.8276 85.0199L51.9634 51.9634ZM35.9223 18.7301L51.7866 51.7866L18.7301 35.9224C10.7215 32.0789 8.91247 21.4752 15.1938 15.1938C21.4751 8.91251 32.0789 10.7215 35.9223 18.7301ZM51.7866 51.9634L35.9224 85.0198C32.0789 93.0285 21.4752 94.8375 15.1938 88.5561C8.91249 82.2748 10.7215 71.671 18.7301 67.8276L51.7866 51.9634ZM85.0199 35.9223L51.9634 51.7866L67.8276 18.7301C71.6711 10.7215 82.2748 8.91246 88.5562 15.1938C94.8375 21.4751 93.0285 32.0789 85.0199 35.9223Z"
          className="fill-text dark:fill-darkText"
        />
      </svg>
    </div>
  );
};

export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-darkBorder -darkBg text-darkText font-base">
      <div className="animate-marquee whitespace-nowrap py-12">
        {items.map((item, index) => {
          return (
            <span key={index} className="text-4xl inline-flex items-center">
              {item}
              <Star2 />
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
        {items.map((item, index) => {
          return (
            <span key={index} className="text-4xl inline-flex items-center">
              {item}
              <Star2 />
            </span>
          );
        })}
      </div>
    </div>
  );
}
