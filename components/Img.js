/* eslint-disable react/jsx-props-no-spreading */
import Image from 'next/image';

const Img = ({
  src, alt, sizes = '100vw', priority, key, fill = true,
}) => {
  if (!src) return null;

  return (
    <Image
      alt={alt}
      {...(fill && { fill })}
      objectFit="cover"
      sizes={sizes}
      src={src}
      placeholder="blur"
      blurDataURL={src}
      {...(key && { key })}
      {...(priority && { priority })}
    // onError={() => {
    //   setImageSource('/logo_error_image.png');
    // }}
    />
  );
};

export default Img;
