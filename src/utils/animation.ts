
export const tiltEffect = (event: React.MouseEvent<HTMLDivElement>, intensity = 20) => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const posX = (centerX - x) / centerX * intensity;
  const posY = (centerY - y) / centerY * intensity;
  
  card.style.transform = `perspective(1000px) rotateX(${posY * -1}deg) rotateY(${posX}deg)`;
  card.style.setProperty('--x', `${x}px`);
  card.style.setProperty('--y', `${y}px`);
};

export const resetTilt = (event: React.MouseEvent<HTMLDivElement>) => {
  const card = event.currentTarget;
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
};

export const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

export const createIntersectionObserver = (callback: IntersectionObserverCallback) => {
  return new IntersectionObserver(callback, observerOptions);
};
