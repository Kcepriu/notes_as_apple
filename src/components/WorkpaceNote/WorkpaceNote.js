import { useEffect, useState } from 'react';
import { useNote } from 'hooks/noteContext';
import { formatDateTitleNote } from 'helpers/formatDateTime';
import { useDebouncedCallback } from 'use-debounce';

import {
  WrapWorkpaceNote,
  WrapContent,
  TitleDate,
  Title,
  Content,
} from './WorkpaceNote.styled';

const WorkpaceNote = () => {
  const { currentNote, setCurrentNote } = useNote();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [idCurentNote, setIdCurentNote] = useState(null);

  useEffect(() => {
    //Start Initial variables
    if (idCurentNote === currentNote.id) return;

    setTitle(currentNote.title);
    setContent(currentNote.content);

    setIdCurentNote(currentNote.id);
  }, [idCurentNote, currentNote]);

  const debouncedSaveNote = useDebouncedCallback((title, value) => {
    setCurrentNote(prev => ({ ...prev, [title]: value, toSave: true }));
  }, 1000);

  const handkerChangeTile = event => {
    setTitle(event.target.value);
    debouncedSaveNote('title', event.target.value);
  };

  const handkerChangeContent = event => {
    setContent(event.target.value);
    debouncedSaveNote('content', event.target.value);
  };

  return (
    <WrapWorkpaceNote>
      <TitleDate>{formatDateTitleNote(currentNote.date)}</TitleDate>
      <WrapContent>
        <Title
          autoFocus={true}
          type="text"
          placeholder="Please write here title"
          value={title}
          disabled={!currentNote.editing}
          onChange={handkerChangeTile}
        />
        <Content
          type="text"
          placeholder="Please write here content"
          value={content}
          disabled={!currentNote.editing}
          onChange={handkerChangeContent}
        />
      </WrapContent>
    </WrapWorkpaceNote>
  );
};

export default WorkpaceNote;
