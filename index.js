function MarkAsRead() {
  document.getElementById("notification-count").innerText = "0";
  [...document.querySelectorAll(".card")].map((card) =>
    card.classList.remove("unread")
  );
}
