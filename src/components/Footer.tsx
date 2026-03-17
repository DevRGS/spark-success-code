const Footer = () => (
  <footer className="border-t border-border py-16 text-center">
    <div className="container">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Domina Tu Mente. Todos los derechos reservados.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        Este sitio no es parte de Facebook ni de Google Inc. Los resultados pueden variar por persona.
      </p>
    </div>
  </footer>
);

export default Footer;
