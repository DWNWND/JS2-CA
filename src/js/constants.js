export const API_KEY = "d2abe438-b85e-4837-bb83-2678d612f606";
export const API_BASE = "https://v2.api.noroff.dev";
export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN = "/login";
export const API_KEY_URL = "/create-api-key";
export const API_POSTS = "/social/posts";

export const authorParam = "_author=true";
export const commentsParam = "_comments=true";
export const reactionsParam = "_reactions=true";
export const limitParam = "limit";
export const postLimit = 10;

export const loadMoreBtn = document.querySelector(".load-more");
export const loader = document.querySelector(".spinner-grow");
export const feedContainer = document.querySelector(".feed-container");
export const displayMessage = document.querySelector(".massage");
export const generalErrorContainer = document.querySelector(".error-message");
export const newPostErrorContainer = document.querySelector(".post-error-message");
export const allErrorContaines = document.querySelector(".all-errors");

export const sortingByLikes = document.getElementById("sortbymostliked");
export const sortingByComments = document.getElementById("sortbymostcommented");
export const sortingByThreads = document.getElementById("sortbytypethreads");
export const sortingByPhotos = document.getElementById("sortbytypephoto");

export const registerForm = document.querySelector("#register");
export const email = document.querySelector("#registerEmail");
export const emailError = document.querySelector("#emailHelpBlock");
export const username = document.querySelector("#registerUsername");
export const usernameError = document.querySelector("#usernameHelpBlock");
export const password = document.querySelector("#registerPassword");
export const passwordError = document.querySelector("#passwordHelpBlock");
export const repeatPassword = document.querySelector("#registerRepeatPassword");
export const repeatPasswordError = document.querySelector("#registerRepeatPasswordError");
