function parseLink(markdown) {
  const match = markdown.match(/\[([^\]]+)\]\(([^)]+)\)/);
  
  if (match) {
    const linkText = match[1];
    const linkUrl = match[2];
    return `<a href="${linkUrl}">${linkText}</a>`;
  }
  
  return markdown;
}
