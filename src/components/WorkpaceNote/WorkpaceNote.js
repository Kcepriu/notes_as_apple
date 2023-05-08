import { useNote } from 'hooks/noteContext';
import { formatDateTitleNote } from 'helpers/formatDateTime';

import {
  WrapWorkpaceNote,
  WrapContent,
  TitleDate,
  Title,
  Content,
} from './WorkpaceNote.styled';

const WorkpaceNote = () => {
  const { currentNote } = useNote();

  return (
    <WrapWorkpaceNote>
      <TitleDate>{formatDateTitleNote(currentNote.date)}</TitleDate>
      <WrapContent>
        <Title
          type="text"
          value={currentNote.tilte}
          disabled={!currentNote.editing}
        />
        <Content
          type="text"
          value={currentNote.content}
          disabled={!currentNote.editing}
        />
      </WrapContent>
    </WrapWorkpaceNote>
  );
};

export default WorkpaceNote;
