import { useNavigate } from 'react-router-dom';
import { LogOut} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function candidateDashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) return;
    if(userData.role !== 'candidate') {
      navigate('/login',{replace:True});
      return;
    } else {
      setUser(userData);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return null;

  return(
  <div>
    <h1>Candidate Portal</h1>
    <button onClick={handleLogout}>
      <LogOut size={20} />
        Logout
    </button>
  </div>
  );
}