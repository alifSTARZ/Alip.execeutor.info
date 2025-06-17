document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn[data-target]");
  const sections = document.querySelectorAll(".section");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");

      // Hapus kelas "active" dari semua section
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // Tambahkan kelas "active" ke section yang dipilih
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      // Optional: efek aktif di tombol
      buttons.forEach(btn => btn.classList.remove("active-btn"));
      button.classList.add("active-btn");
    });
  });
});