import { ReactComponent as UpArrow } from "assets/icons/up-arrow.svg";
import { ReactComponent as DownArrow } from "assets/icons/down-arrow.svg";
import {
  AccordionBody,
  AccordionHead,
  AccordionWrapper,
  IconComponent,
  TitleComponent,
} from "components/accordion/accordion.styles";

type Props = {
  isOpen: boolean;
  accordionHead: React.ReactNode;
  accordionBody: React.ReactNode;
  handleAccordion: (id: number) => void;
  currentId: number;
};

const Accordion = ({
  isOpen,
  accordionHead,
  accordionBody,
  handleAccordion,
  currentId,
}: Props) => {
  const setActiveAccordion = () => {
    handleAccordion(currentId);
  };

  return (
    <AccordionWrapper isOpen={isOpen}>
      <AccordionHead onClick={setActiveAccordion}>
        <TitleComponent isOpen={isOpen}>
          {accordionHead}
          <IconComponent>{isOpen ? <UpArrow /> : <DownArrow />}</IconComponent>
        </TitleComponent>
      </AccordionHead>
      {isOpen && <AccordionBody> {accordionBody} </AccordionBody>}
    </AccordionWrapper>
  );
};

export default Accordion;
