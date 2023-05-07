import { Container, WraperPage } from './MainLayout.styles';

// import Spinner from "components/Spinner/Spinner";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <WraperPage>{children}</WraperPage>
    </Container>
  );
};

export default MainLayout;
