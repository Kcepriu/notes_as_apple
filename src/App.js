import './App.css';
import MainLayout from 'layout/MainLayout';
import Header from 'components/Header/Header';
import Workspace from 'components/Workspace/Workspace';

function App() {
  return (
    <MainLayout>
      <Header />

      <Workspace />
      <div></div>
    </MainLayout>
  );
}

export default App;
