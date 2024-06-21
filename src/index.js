// Full-page Alert Library

import 'animate.css';

class FullPageAlert {
  constructor(options = {}) {
    this.backgroundColor = options.backgroundColor || '#2ecc71';
    this.textColor = options.textColor || '#ffffff';
    this.animationDuration = options.animationDuration || 1000;
    this.autoHideDuration = options.autoHideDuration || 1000;
  }

  show(message) {
    const alertElement = document.createElement('div');
    alertElement.style.position = 'fixed';
    alertElement.style.top = '0';
    alertElement.style.left = '0';
    alertElement.style.width = '100%';
    alertElement.style.height = '100%';
    alertElement.style.backgroundColor = this.backgroundColor;
    alertElement.style.color = this.textColor;
    alertElement.style.display = 'flex';
    alertElement.style.justifyContent = 'center';
    alertElement.style.alignItems = 'center';
    alertElement.style.fontSize = '2rem';
    alertElement.style.fontWeight = 'bold';
    alertElement.style.zIndex = '9999';

    alertElement.textContent = message;
    alertElement.classList.add('animate__animated', 'animate__bounceIn');

    document.body.appendChild(alertElement);

    setTimeout(() => {
      alertElement.classList.remove('animate__bounceIn');
      alertElement.classList.add('animate__fadeOut');
      setTimeout(() => {
        document.body.removeChild(alertElement);
      }, this.animationDuration);
    }, this.autoHideDuration);
  }
}