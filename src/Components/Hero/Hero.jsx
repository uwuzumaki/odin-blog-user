import heroImage from "../../assets/heroImage.jpg";

const Hero = () => {
  return (
    <div className="relative flex h-[300px] flex-col items-center justify-center overflow-hidden">
      <div className="absolute z-2 flex h-full w-full flex-col items-center justify-center bg-black/60">
        <p className="mb-2 text-4xl text-white opacity-100">I love to blog!</p>
        <p className="mt-2 text-xl text-[#FFFFFF] opacity-100">
          Find more blogs about my journey through web development here!
        </p>
      </div>
      <img
        className="left h-full w-full object-cover opacity-75"
        src={heroImage}
      />
      <div className="absolute bottom-2 z-3 self-end rounded-xl px-2 text-xs text-white sm:text-sm">
        Photo by{" "}
        <a href="https://unsplash.com/@amyhirschi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Amy Hirschi
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/a-keyboard-and-a-mouse-on-a-desk-szrJ3wjzOMg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default Hero;
