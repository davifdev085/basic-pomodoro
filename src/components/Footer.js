// Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="org">
        <h6>Organize seu tempo!</h6>
      </div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#privacy">Privacidade</a>
        <a href="#terms">Termos de uso</a>
        <a href="#contact">Contato</a>
      </div>
      <div className="footer-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p className="footer-text">Feito por: Davi Felipe</p>
      <p className="footer-copyright">PomodoroX 2024.</p>
    </footer>
  );
}

export default Footer;
