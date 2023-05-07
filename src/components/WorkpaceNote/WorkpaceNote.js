import { useNote } from 'hooks/noteContext';
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
      <TitleDate>{currentNote.date}</TitleDate>
      <WrapContent>
        <Title type="text" value={currentNote.tilte} />
        <Content type="text" value={currentNote.content} />
      </WrapContent>
    </WrapWorkpaceNote>
  );
};

export default WorkpaceNote;
