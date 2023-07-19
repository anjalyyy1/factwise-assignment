import Dropdown from "elements/dropdown";
import Input from "elements/input";
import {
  AccordionBodyWrapper,
  Age,
  Country,
  Gender,
  FieldValue,
  LabelText,
  UserMeta,
  DescriptionWrapper,
  IconWrapper,
  ActionButton,
} from "pages/celebrities/celebrity.styles";
import { useState } from "react";
import { Celebrity } from "ts/types";
import getAge from "utils/celebrities";
import { ReactComponent as Delete } from "assets/icons/delete.svg";
import { ReactComponent as Edit } from "assets/icons/edit.svg";

type Props = {
  celebrity: Celebrity;
};

const UserDetailsAccordionBody = ({ celebrity }: Props) => {
  const { description, dob, gender, country } = celebrity;

  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  return (
    <AccordionBodyWrapper>
      <UserMeta>
        <Age>
          <LabelText>Age</LabelText>
          {isEditMode ? (
            <Input />
          ) : (
            <FieldValue> {getAge(dob)} Years</FieldValue>
          )}
        </Age>
        <Gender>
          <LabelText>Gender</LabelText>
          {isEditMode ? (
            <Dropdown options={[]} />
          ) : (
            <FieldValue> {gender} </FieldValue>
          )}
        </Gender>
        <Country>
          <LabelText>Country</LabelText>
          {isEditMode ? (
            <Dropdown options={[]} />
          ) : (
            <FieldValue> {country} </FieldValue>
          )}
        </Country>
      </UserMeta>
      <DescriptionWrapper>
        <LabelText>Description</LabelText>
        {isEditMode ? <textarea /> : <FieldValue> {description} </FieldValue>}
      </DescriptionWrapper>
      <ActionButton>
        <IconWrapper>
          <Delete onClick={handleDeleteMode} />
        </IconWrapper>
        <IconWrapper>
          <Edit onClick={handleEditMode} />
        </IconWrapper>
      </ActionButton>
    </AccordionBodyWrapper>
  );
};

export default UserDetailsAccordionBody;
