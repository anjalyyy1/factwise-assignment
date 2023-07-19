const getAge = (birthDateString: string) => {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  const yearsDifference = today.getFullYear() - birthDate.getFullYear();

  return yearsDifference;
};

export default getAge;
