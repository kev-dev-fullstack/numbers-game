import Image from "next/image";

export const Logo = () => (
  <Image
    src="/svs-logo.png"
    alt="Svenska Spel"
    width={384}
    height={192}
    priority
    className="mx-auto mb-10 h-48 w-auto"
  />
);
