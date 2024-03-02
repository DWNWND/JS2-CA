/**
 * Generates an HTML element for the card/post BODY of each social media post passed in
 * The function distinguishes posts with media attachements from the rest of the posts.
 *
 * @param {array, object} postData An array of objects or a single object conatining of social media post(s)
 * @returns {string} Returns a HTML elemement for the card/post body
 */
export function renderPostBody(postData) {
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "position-relative");

  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = postData.media.url;
    img.alt = `image from ${postData.title}`;

    const caption = document.createElement("p"); //maybe this can be in the footer or something? so it can be on both text and img posts
    caption.classList.add("card-text");
    caption.innerText = postData.body;

    cardBody.append(img, caption);
  } else {
    const quote = document.createElement("p");
    quote.classList.add("text-center");
    quote.innerText = postData.title;

    const blockquote = document.createElement("blockquote");
    blockquote.classList.add("blockquote");
    blockquote.append(quote);

    cardBody.append(blockquote);
  }
  return cardBody;
}
