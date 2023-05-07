import WorkpaceNote from 'WorkpaceNote/WorkpaceNote';
import ListItem from 'ListItem/ListItem';

import { WorkspaceStyle } from './Workspace.styled';

const Workspace = () => {
  return (
    <WorkspaceStyle>
      <ListItem />
      <WorkpaceNote />
    </WorkspaceStyle>
  );
};

export default Workspace;
