import {
  AccordionHeadWrapper,
  AvatarWrapper,
  UserName,
  Picture,
} from "pages/celebrities/celebrity.styles";
import { Celebrity } from "ts/types";

type Props = {
  celebrity: Celebrity;
};

const UserDetailsAccordionHead = ({ celebrity }: Props) => {
  const { first, last, picture } = celebrity;
  const userName = `${first} ${last}`;

  return (
    <AccordionHeadWrapper>
      <AvatarWrapper>
        <Picture src={picture} alt={userName} />
      </AvatarWrapper>
      <UserName>{userName}</UserName>
    </AccordionHeadWrapper>
  );
};

export default UserDetailsAccordionHead;
