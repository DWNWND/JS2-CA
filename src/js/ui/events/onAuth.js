import { register } from "../../api/auth/register.js";
import { login } from "../../api/auth/login.js";
import { getPosts } from "../../api/posts/get.js";

//MY TEST
export async function onLoginAuth(event) {
  event.preventDefault();

  //This is how Oli did it on the CA solution on youtube (easy peasy lemon scweezy):
  const form = event.target;
  const formData = new FormData(form);
  const profile = Object.fromEntries(formData.entries());
  const action = form.action; //in this case this params are added the HMTL form element
  const method = form.method; //in this case this params are added the HMTL form element
  console.log(profile);

  register(profile, action, method); //this would be another function

  //This is how Oli did it (just a bit altered by me to understand it and separate login from registry) in the new API V2 loom video
  const email = event.target.loginEmail.value;
  const password = event.target.loginPassword.value;

  await login(email, password);

  const posts = await getPosts();
  console.log(posts);
}

export async function onRegisterAuth(event) {
  event.preventDefault();

  const name = event.target.registerUsername.value;
  const email = event.target.registerEmail.value;
  const password = event.target.registerPassword.value;

  await register(name, email, password);
  await login(email, password);

  const posts = await getPosts();
  console.log(posts);
}