import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 text-white flex justify-between items-center shadow">
      <div className="font-bold text-2xl">School Logo</div>
      <ul className="flex space-x-8">
        <li className="relative group">
          <Link to="/">Home</Link>
        </li>
        <li className="relative group">
          <span>Admissions</span>
          <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 p-2 shadow">
            <li><Link to="/admissions">Apply Now</Link></li>
            <li><Link to="/admissions#requirements">Requirements</Link></li>
          </ul>
        </li>
        <li className="relative group">
          <span>Academics</span>
          <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 p-2 shadow">
            <li><Link to="/academics">Courses</Link></li>
            <li><Link to="/academics#calendar">Academic Calendar</Link></li>
          </ul>
        </li>
        <li><Link to="/downloads">Downloads</Link></li>
        <li><Link to="/media">Media</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;