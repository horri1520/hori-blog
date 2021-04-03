import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactChild;
};

const NextLink: React.FC<Props> = ({ children, href }: Props) => {
  return <Link href={href}>{children}</Link>;
};

export default NextLink;
