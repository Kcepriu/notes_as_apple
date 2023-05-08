import { useNote } from 'hooks/noteContext';
import { ListButtons, Button } from './Buttons.styled';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { GoPlus } from 'react-icons/go';
import { Colors } from 'constants/constantsStyle';

const Buttons = () => {
  const { currentNote, addNote, deleteNote, editNote } = useNote();

  const handlerAdd = () => {
    addNote();
  };

  const handlerDelete = () => {
    if (!currentNote) return;
    if (window.confirm('Are you sure you want to delete the note?')) {
      deleteNote(currentNote);
    }
  };

  const handlerEdit = () => {
    if (!currentNote) return;
    editNote(currentNote);
  };

  return (
    <ListButtons>
      <li>
        <Button type="button" onClick={handlerAdd}>
          <GoPlus size={24} />
        </Button>
      </li>

      <li>
        <Button type="button" disabled={!currentNote} onClick={handlerDelete}>
          <RiDeleteBin5Line size={24} />
        </Button>
      </li>

      <li>
        <Button type="button" disabled={!currentNote} onClick={handlerEdit}>
          <FaEdit
            size={24}
            color={currentNote?.editing ? Colors.colorIconButtonOn : null}
          />
        </Button>
      </li>
    </ListButtons>
  );
};

export default Buttons;
