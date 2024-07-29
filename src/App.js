import { useForm } from "react-hook-form";
import './App.css';
import store from './store';

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    store.dispatch(updateFirstname(data.Firstname));
    store.dispatch(updateLastname(data.Lastname));
    store.dispatch(updateAge(data.age));
    store.dispatch(updateEmail(data.email));
    store.dispatch(updatePassword(data.password));
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstname", { required: "Vous devez indiquer au moins un prénom ou un pseudo" })} placeholder="Nom" />
      <p>{errors.firstname?.message}</p>
      <input {...register("lastname")} placeholder="Prénom" />
      <input {...register("age", {
        validate: (value) => value >= 18 || "Vous devez avoir plus de 18 ans",
      })}
        placeholder="Âge" />
      <p>{errors.age?.message}</p>
      <input {...register("email", { required: "Un email est obligatoire" })} placeholder="Email" />
      <p>{errors.email?.message}</p>
      <input {...register("password", {
        required: "Un mot de passe est obligatoire", minLength: {
          value: 8,
          message: "Le mot de passe doit contenir au moins 8 caractères"
        }
      })} placeholder="Mot de passe" />
      <p>{errors.password?.message}</p>
      <input type="submit" />
    </form>
  );
}

export default App;
