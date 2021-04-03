import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  fullWidth: boolean;
};

const NextImage: React.VFC<Props> = ({ src, alt, fullWidth }: Props) => {
  return <Image src={src} alt={alt} layout={fullWidth ? 'fill' : ''} />;
};

export default NextImage;
