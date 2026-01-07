function parseUnorderedList(markdown) {

  return `<ul>${markdown.split(`\n`).map(item => `<li>${item.replace(`-`, ``).trim()}</li>`).join().replaceAll(`,`,``)}</ul>`;
}
