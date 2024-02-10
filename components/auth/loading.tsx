import Image from "next/image";
const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-ping duration-700"
      />
    </div>
  );
};
export default Loading;