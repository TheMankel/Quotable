import { ReactNode } from 'react';

type Props = {
  id?: string | undefined;
  children: ReactNode;
};

const Section = ({ id, children }: Props) => {
  return <section id={id}>{children}</section>;
};

export default Section;
