const captureForms = document.querySelectorAll("[data-capture-form]");

captureForms.forEach((form) => {
  const handleCapture = (event) => {
    event.preventDefault();
    const email = form.querySelector('input[type="email"]');
    const note = form.querySelector("[data-form-note]");

    if (!email.checkValidity()) {
      email.reportValidity();
      return;
    }

    note.textContent = "Thanks. Your Governance Health Check App is ready. Get it ";
    const link = document.createElement("a");
    link.href =
      "https://marketplace.atlassian.com/apps/1237740/content-retention-manager-lite-for-confluence?hosting=cloud&tab=overview";
    link.textContent = "here";
    link.target = "_blank";
    link.rel = "noopener";
    note.append(link);
    note.classList.add("success");
    form.reset();
  };

  form.addEventListener("submit", handleCapture);
  form.querySelector('button[type="submit"]').addEventListener("click", handleCapture);
});
