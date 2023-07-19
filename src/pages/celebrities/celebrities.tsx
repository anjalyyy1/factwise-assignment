/* eslint-disable @typescript-eslint/no-floating-promises */
import Input from "elements/input";
import {
  ListWrapper,
  PageWrapper,
  SearchWrapper,
  UserHeading,
} from "pages/celebrities/celebrity.styles";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { map } from "lodash";

import Accordion from "components/accordion";
import UserDetailsAccordionHead from "pages/celebrities/components/userDetailsHead";
import UserDetailsAccordionBody from "pages/celebrities/components/userDetailDescription";
import { Celebrity } from "ts/types";

const Celebrities = () => {
  // hooks
  const [selectedAccordionId, setSelectedAccordionId] = useState<number | null>(
    null
  );
  const [celebritiesList, setCelebritiesList] = useState<Celebrity[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("celebrities.json")
      .then((res) => res.json())
      .then((data: Celebrity[]) => {
        setCelebritiesList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAccordion = (celebId: number) => {
    if (celebId === selectedAccordionId) {
      setSelectedAccordionId(null);
      return;
    }
    setSelectedAccordionId(celebId);
  };

  return (
    <PageWrapper>
      <UserHeading>Users</UserHeading>
      <SearchWrapper>
        <Input
          icon={<Search />}
          placeholder="Search users with names"
          refVal={searchRef}
        />
      </SearchWrapper>
      <ListWrapper>
        {map(celebritiesList, (eachCeleb) => {
          const { id } = eachCeleb;
          return (
            <Accordion
              currentId={id}
              isOpen={selectedAccordionId === id}
              accordionHead={<UserDetailsAccordionHead celebrity={eachCeleb} />}
              handleAccordion={handleAccordion}
              accordionBody={<UserDetailsAccordionBody celebrity={eachCeleb} />}
            />
          );
        })}
      </ListWrapper>
    </PageWrapper>
  );
};

export default Celebrities;
