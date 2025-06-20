document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bgm');
  const btnPlay = document.getElementById('btnPlay');

  // Musik hanya diputar setelah klik
  btnPlay.addEventListener('click', function () {
    audio.play();
    alert("Musik dimulai 🎶");
  });
});

// Fungsi navigasi antar section tanpa reload
function navigate(targetId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  const target = document.getElementById(targetId);
  if (target) target.classList.add('active');
}
