import { useEffect, useRef, useState } from 'react';
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

  const refTitleNote = useRef();

  useEffect(() => {
    //Start Initial variables
    if (idCurentNote === currentNote.id) return;

    setTitle(currentNote.title);
    setContent(currentNote.content);

    setIdCurentNote(currentNote.id);
  }, [idCurentNote, currentNote]);

  // * Set focus on Input title
  useEffect(() => {
    if (!currentNote.editing) return;

    refTitleNote.current.focus();
  }, [currentNote.editing]);

  const saveNote = (field, value) => {
    setCurrentNote(prev => ({ ...prev, [field]: value, toSave: true }));
  };

  const debouncedSaveNote = useDebouncedCallback((field, value) => {
    saveNote(field, value);
  }, 1000);

  const handlerChangeTile = event => {
    setTitle(event.target.value);
    debouncedSaveNote('title', event.target.value);
  };

  const handlerChangeContent = event => {
    setContent(event.target.value);
    debouncedSaveNote('content', event.target.value);
  };

  const handlerBlur = event => {
    saveNote(event.target.name, event.target.value);
  };

  return (
    <WrapWorkpaceNote>
      <TitleDate>{formatDateTitleNote(currentNote.date)}</TitleDate>
      <WrapContent>
        <Title
          ref={refTitleNote}
          autoFocus
          name="title"
          type="text"
          placeholder="Please write here title"
          value={title}
          disabled={!currentNote.editing}
          onChange={handlerChangeTile}
          onBlur={handlerBlur}
        />
        <Content
          name="content"
          type="text"
          placeholder="Please write here content"
          value={content}
          disabled={!currentNote.editing}
          onChange={handlerChangeContent}
          onBlur={handlerBlur}
        />
      </WrapContent>
    </WrapWorkpaceNote>
  );
};

export default WorkpaceNote;
