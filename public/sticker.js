function setupCanvas(canvasId, baseImageUrl) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  const base = new Image();
  base.src = baseImageUrl;

  base.onload = () => {
    ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
  };

  return (logoFile, qrFile) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(base, 0, 0, canvas.width, canvas.height);

    if (logoFile) {
      const logo = new Image();
      logo.src = URL.createObjectURL(logoFile);
      logo.onload = () => {
        ctx.drawImage(logo, 200, 80, 800, 300);
      };
    }

    if (qrFile) {
      const qr = new Image();
      qr.src = URL.createObjectURL(qrFile);
      qr.onload = () => {
        ctx.drawImage(qr, 350, 450, 500, 500);
      };
    }
  };
}

const renderTH = setupCanvas("previewTH", "/templates/qr-sticker-base.png");
const renderEN = setupCanvas("previewEN", "/templates/qr-sticker-base-en.png");

function updatePreview() {
  const logo = document.getElementById("logoInput").files[0];
  const qr = document.getElementById("qrInput").files[0];
  renderTH(logo, qr);
  renderEN(logo, qr);
}

document.getElementById("logoInput").addEventListener("change", updatePreview);
document.getElementById("qrInput").addEventListener("change", updatePreview);
