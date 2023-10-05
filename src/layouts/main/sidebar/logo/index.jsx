import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="Logo py-0.5">
      <Link
        to="/"
        className="flex items-center justify-center w-[52px] h-[52px] rounded-full transition-colors hover:bg-[rgba(239,243,244,0.1)]"
      >
        <svg viewBox="0 0 24 24" width={30} height={30}>
          <path
            fill="#eff3f4"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
