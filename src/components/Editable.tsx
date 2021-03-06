import { useState, useRef, MutableRefObject, ChangeEventHandler } from 'react';

interface Props {
  value: string;
  onDone: (name: string) => void;
}

const Editable: React.FC<Props> = ({ value, onDone }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    // console.log( e.target.value );
    // your awesome stuffs goes here
  };
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleDoneEditing = () => {
    setIsEditing(false);
    console.log(inputRef.current?.value);
    onDone(inputRef.current?.value);
  };
  return (
    <div className='flex gap-6'>
      {isEditing ? (
        <input
          type='text'
          ref={inputRef}
          onChange={handleInputChange}
          defaultValue={value}
        />
      ) : (
        <h1>{value}</h1>
      )}
      {isEditing ? (
        <button onClick={() => handleDoneEditing()}>Done</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Editable;
