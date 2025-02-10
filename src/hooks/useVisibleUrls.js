export default function useVisibleUrls(listURL, currentIndex) {
  if (!listURL.length) return [];

  // Get current window width
  const width = window.innerWidth;

  // Return different sized arrays based on screen width
  if (width < 768) {
    // Mobile: 1 item
    return [listURL[currentIndex % listURL.length]];
  } else if (width < 976) {
    // Tablet: 2 items
    return [
      listURL[currentIndex % listURL.length],
      listURL[(currentIndex + 1) % listURL.length],
    ];
  } else {
    // Desktop: 3 items
    return [
      listURL[currentIndex % listURL.length],
      listURL[(currentIndex + 1) % listURL.length],
      listURL[(currentIndex + 2) % listURL.length],
    ];
  }
}
