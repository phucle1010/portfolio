import Image from "next/image";

export function GlobalLoading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image
        className="animate-pulse rounded-xl"
        src="/images-v2/logo-v2.png"
        alt="Loading Logo"
        width={400}
        height={400}
      />
    </div>
  );
}
