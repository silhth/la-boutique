import { reviewList } from "./reviews.js";

const reviewsClients = document.querySelector(".reviews")


const addReview = () =>{ reviewList.forEach((e) => {
  const review = document.createElement("li");
  review.setAttribute('class', 'review'),
    review.setAttribute('id', e.id),

    liCont(e, review)
  reviewsClients.appendChild(review)
})
}


function liCont(e, parent) {
  const stars = document.createElement("p");
  stars.textContent = e.stars

  const comment = document.createElement("p");
  comment.textContent = e.text;

  const client = document.createElement("p");
  client.setAttribute("class", "client")
  client.textContent = e.client;
  parent.append(stars, comment, client)

}

export { addReview }