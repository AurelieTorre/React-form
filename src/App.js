import { useState } from 'react';
import { useForm } from "react-hook-form";
import './App.css';
import store from './store';
import { updateFirstname, updateLastname, updateAge, updateEmail, updatePassword } from './store';
import { useSelector } from "react-redux";

function App() {

  const [isClicked, setIsClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Réinitialise l'état du bouton après 200ms
    store.dispatch(updateFirstname(data.firstname));
    store.dispatch(updateLastname(data.lastname));
    store.dispatch(updateAge(data.age));
    store.dispatch(updateEmail(data.email));
    store.dispatch(updatePassword(data.password));
    console.log(data);
  };

  const user = useSelector(state => state.user);
  console.log('Current user state:', user); // Pour vérifier l'état actuel du store

  return (
    <div className="form-container">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="line">
          <input {...register("firstname", { required: "Vous devez indiquer au moins un prénom ou un pseudo" })} placeholder="Prénom" />
          <span className="star"> *</span>
        </div>
        <input {...register("lastname")} placeholder="Nom" />
        <input {...register("age", {
          validate: (value) => value >= 18 || "Vous devez avoir plus de 18 ans",
        })}
          placeholder="Âge" />
        <div className="line">
          <input {...register("email", { required: "Un email est obligatoire" })} placeholder="Email" />
          <span className="star"> *</span>
        </div>
        <div className="line">
          <input {...register("password", {
            required: "Un mot de passe est obligatoire", minLength: {
              value: 8,
              message: "Le mot de passe doit contenir au moins 8 caractères"
            }
          })} placeholder="Mot de passe" />
          <span className="star"> *</span>
        </div>
        <input type="submit" className={isClicked ? 'clicked' : ''} />
        <p className="star">{errors.firstname?.message}</p>
        <p className="star">{errors.age?.message}</p>
        <p className="star">{errors.email?.message}</p>
        <p className="star">{errors.password?.message}</p>
        {/* <div>
          <h3>Data de l'utilisateur dans le store :</h3>
          <p>firstname: {user.firstname}</p>
          <p>lastname: {user.lastname}</p>
          <p>age: {user.age}</p>
          <p>email: {user.email}</p>
          <p>password: {user.password}</p>
        </div> */}
      </form>
    </div>
  );
}

export default App;
