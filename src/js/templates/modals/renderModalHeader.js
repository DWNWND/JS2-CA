
export async function modalHeader(postData) {
  const profilePicture = document.createElement("img");
  profilePicture.classList.add("img-fluid", "rounded-circle", "profile-img-nav");
  profilePicture.src = "../img/undraw_Drink_coffee_v3au.png"; //adding just a standard img
  profilePicture.alt = `The profile of: ${postData.author.name}`;

  const userLink = document.createElement("a");
  userLink.classList.add("nav-link"); //set href
  userLink.append(profilePicture);

  const userName = document.createElement("h3");
  userName.classList.add("username", "m-0");
  userName.innerText = postData.author.name;

  const user = document.createElement("div");
  user.classList.add("user", "d-flex", "align-items-center", "gap-2");
  user.append(userLink, userName);

  const date = document.createElement("p");
  date.classList.add("m-0");
  date.innerText = postData.updated;

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("btn-close");
  closeBtn.type = "button";
  closeBtn.setAttribute("data-bs-dismiss", "modal");
  closeBtn.setAttribute("aria-label", "Close");
  closeBtn.innerText = "close modal"

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  modalHeader.append(user, date, closeBtn);

  return modalHeader;
}