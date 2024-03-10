/**
 * Generates an HTML element for the card/post BODY of each social media post passed in
 * The function distinguishes posts with media attachements from the rest of the posts.
 *
 * @param {array, object} postData destructured to {title, body, media}. An array of objects or a single object conatining of social media post(s)
 * @returns {string} Returns a HTML elemement for the card/post body
 */
export function renderPostBody({title, body, media}) { 
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "position-relative");

  const caption = document.createElement("p");
  caption.classList.add("card-text");
  caption.innerText = body;

  if (media) {
    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = media.url;
    img.alt = `image from ${title}`;

    cardBody.append(img, caption);
  } else {
    const quote = document.createElement("p");
    quote.classList.add("text-center");
    quote.innerText = title;

    const blockquote = document.createElement("blockquote");
    blockquote.classList.add("blockquote");
    blockquote.append(quote);

    cardBody.append(blockquote, caption);
  }
  return cardBody;
}
