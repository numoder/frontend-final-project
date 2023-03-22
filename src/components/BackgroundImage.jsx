export default function setBackground(element) {
    const backgroundImage = `url(${element.image})`;
    document.body.style.backgroundImage = backgroundImage;
  }