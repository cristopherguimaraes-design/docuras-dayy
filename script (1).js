const cards = document.querySelectorAll(".card");

cards.forEach(card => {

```
card.addEventListener("mouseenter", () => {
    card.style.boxShadow =
    "0 15px 30px rgba(212,163,115,0.5)";
});

card.addEventListener("mouseleave", () => {
    card.style.boxShadow =
    "0 8px 20px rgba(0,0,0,0.4)";
});
```

});
