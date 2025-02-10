export default function useVisibleLinks(listLink, currentIndex) {
  if (!listLink.length) return [];

  // Get current window width
  const width = window.innerWidth;

  // Return different sized arrays based on screen width
  if (width < 768) {
    // Mobile: 1 item
    return [listLink[currentIndex]];
  } else if (width < 976) {
    // Tablet: 2 items
    return [
      listLink[currentIndex],
      listLink[(currentIndex + 1) % listLink.length],
    ];
  } else {
    // Desktop: 3 items
    return [
      listLink[currentIndex % listLink.length],
      listLink[(currentIndex + 1) % listLink.length],
      listLink[(currentIndex + 2) % listLink.length],
    ];
  }
}
