let ratingCheck = document.getElementById("selected-rating");
let stars = document.querySelectorAll(".stars");
let commentInput = document.getElementById("comment-input");
let sendButton = document.getElementById("send");
let commentList = document.getElementById("comment-list");

let selectedRating = 0; 
let comments = JSON.parse(localStorage.getItem("ss36_b6")) || [];

displayComments();

stars.forEach((star) => {
  star.addEventListener("click", function () {
    selectedRating = Number(this.getAttribute("data-value"));
    stars.forEach((s) => s.style.color = "#ddd");
    for (let i = 0; i < selectedRating; i++) {
      stars[i].style.color = "gold";
    }
    ratingCheck.innerText = `Bạn đã chọn ${selectedRating} sao!`;
  });
});

sendButton.addEventListener("click", function () {
  let commentText = commentInput.value
  if (selectedRating === 0) {
    alert("Bạn chưa chọn sao");
    return;
  }
  if (commentText === "") {
    alert("Bình luận không được trống");
    return;
  }

  let newComment = { rating: selectedRating, text: commentText };
  comments.push(newComment);
  localStorage.setItem("ss36_b6", JSON.stringify(comments));
  displayComments();
  commentInput.value = "";
  selectedRating = 0;
  ratingCheck.innerText = "Bạn chưa đánh giá.";
  stars.forEach((s) => s.style.color = "#ddd");
});

function displayComments() {
  commentList.innerHTML = "";
  comments.forEach((comment) => {
    let li = document.createElement("li");
    let starSpan = document.createElement("span");
    let commentSpan = document.createElement("b");

    starSpan.innerText = "★".repeat(comment.rating);
    starSpan.style.color = "gold";
    commentSpan.innerText = ` ${comment.text}`;

    li.appendChild(starSpan);
    li.appendChild(commentSpan);
    commentList.appendChild(li);
  });
}
