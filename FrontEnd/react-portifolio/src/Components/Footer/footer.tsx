function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <p>© {year} - Todos os direitos reservados - Santos, F. Álisson</p>
      </div>
    </footer>
  );
}

export default Footer;