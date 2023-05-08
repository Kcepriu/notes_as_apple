import './App.css';
import MainLayout from 'layout/MainLayout';
import Header from 'components/Header/Header';
import Workspace from 'components/Workspace/Workspace';

function App() {
  return (
    <MainLayout>
      <Header />

      <Workspace />
      {/* next div necessary  for to stretch the window 
      to the full height of the screen  */}
      <div></div>
    </MainLayout>
  );
}

export default App;
