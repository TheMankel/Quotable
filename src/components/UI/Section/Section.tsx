import { ReactNode } from 'react';
import { SectionWrapper } from './Section.style';

type Props = {
  id?: string | undefined;
  children: ReactNode;
};

const Section = ({ id, children }: Props) => {
  return <SectionWrapper id={id}>{children}</SectionWrapper>;
};

export default Section;
