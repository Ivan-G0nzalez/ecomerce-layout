

const data = [
  {
    imgelink:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  },
  {
    imgelink:
    "	https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=2258"
  }
];

const FeaturedImageGallery = () => {
  return (
    <div className='grid grid-cols-6 gap-8 2xl:gap-13 px-30 w-full'>
      {data.map(({ imgelink }, index) => (
        <div key={index}>
          <img
            
            src={imgelink}
            className='h-full w-full cursor-pointer  object-cover object-center'
            alt='gallery-image'
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedImageGallery;
