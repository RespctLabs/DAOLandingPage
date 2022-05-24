import Image from 'next/image';

const Blog = () => (
  <div className="mb-6 bg-[#2C2F36] w-full h-fit flex py-4 px-10 rounded-2xl z-20">
    <div className="w-12 h-12 relative rounded-full overflow-hidden ">
      <Image src="/images/user-demo.png" alt="guild" layout="fill" />
    </div>

    <div className="flex-1 mx-4">
      <p className="text-[#666666] text-base">Name XYZ</p>
      <p className="text-white text-lg mt-1">
        Absolutely amaxing acfsdas asdasdasdad cascsacsa asdas asfsadsads
        bdfbggdfgdf css ...
      </p>
    </div>

    <div className="flex-1 relative ml-10">
      <Image
        src="/images/guild-main.png"
        alt="guild"
        layout="fill"
        className="rounded-3xl"
      />
    </div>
  </div>
);

const BlogMobile = () => (
  <>
    <div className="mb-6 w-full h-fit flex z-20">
      <div className="flex-1 mx-4">
        <p className="text-[#666666] text-base">Name XYZ</p>
        <p className="text-white text-base md:text-lg mt-1">
          Absolutely amaxing hey there man
        </p>
      </div>

      <div className="flex-1 relative">
        <Image
          src="/images/guild-main.png"
          alt="guild"
          layout="fill"
          className="rounded-3xl"
        />
      </div>
    </div>
    <div className="border md:border-2 border-[#CECECE3D] my-4" />
  </>
);

export { Blog, BlogMobile };
