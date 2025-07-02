import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">📚 Le Romancier</div>
      <ul className="flex gap-4">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/boutique">Boutique</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/elearning">Cours</Link></li>
        <li><Link to="/login">Connexion</Link></li>
      </ul>
    </nav>
  );
}