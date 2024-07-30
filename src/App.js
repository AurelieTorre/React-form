import { useForm } from "react-hook-form";
import './App.css';
import store from './store';
import { updateFirstname, updateLastname, updateAge, updateEmail, updatePassword } from './store';

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
    <div class="form-container">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="line">
          <input {...register("firstname", { required: "Vous devez indiquer au moins un prénom ou un pseudo" })} placeholder="Prénom" />
          <span class="star"> *</span>
        </div>
        <input {...register("lastname")} placeholder="Nom" />
        <input {...register("age", {
          validate: (value) => value >= 18 || "Vous devez avoir plus de 18 ans",
        })}
          placeholder="Âge" />
        <div class="line">
          <input {...register("email", { required: "Un email est obligatoire" })} placeholder="Email" />
          <span class="star"> *</span>
        </div>
        <div class="line">
          <input {...register("password", {
            required: "Un mot de passe est obligatoire", minLength: {
              value: 8,
              message: "Le mot de passe doit contenir au moins 8 caractères"
            }
          })} placeholder="Mot de passe" />
          <span class="star"> *</span>
        </div>
        <input type="submit" />
        <p class="star">{errors.firstname?.message}</p>
        <p class="star">{errors.age?.message}</p>
        <p class="star">{errors.email?.message}</p>
        <p class="star">{errors.password?.message}</p>
      </form>
    </div>
  );
}

export default App;
