
import { useContext } from 'react';
import Button from './Button';
import { CurrentUserContext } from '../context/CurrentUserContext';

export default function LoginButton() {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    if (currentUser.name !== "") {
      return <p>Hola {currentUser.name}, te esperábamos.</p>;
    }
  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Emerson" });
      }}
    >
      Log in
    </Button>
  )
}
