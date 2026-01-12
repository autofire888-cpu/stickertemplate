const canvas = document.getElementById("preview");
const ctx = canvas.getContext("2d");

const base = new Image();
base.src = "https://stickertemplate.pages.dev/templates/qr-sticker-base.png";

base.onload = () => {
  ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
};

document.getElementById("logoInput").addEventListener("change", e => {
  const img = new Image();
  img.src = URL.createObjectURL(e.target.files[0]);
  img.onload = () => ctx.drawImage(img, 200, 80, 800, 300);
});

document.getElementById("qrInput").addEventListener("change", e => {
  const img = new Image();
  img.src = URL.createObjectURL(e.target.files[0]);
  img.onload = () => ctx.drawImage(img, 350, 450, 500, 500);
});
