import { register } from "../../api/auth/register.js";
import { login } from "../../api/auth/login.js";
import { getPosts } from "../../api/posts/get.js";

//MY TEST
export async function onLoginAuth(event) {
  event.preventDefault();

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
