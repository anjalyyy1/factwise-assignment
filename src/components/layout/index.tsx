import { Container } from "components/layout/layout.styles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Layout;
