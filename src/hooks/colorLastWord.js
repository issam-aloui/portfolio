export default function colorLastWord() {
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  headings.forEach((heading) => {
    if (heading.id === "Skip") {
      return; // Skip this heading
    }
    const words = heading.textContent.split(" ");
    const lastWord = words.pop();
    const rest = words.join(" ");
    heading.innerHTML = `${rest} <span class="text-cyanThm">${lastWord}</span>`;
  });
}
