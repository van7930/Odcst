import { useNavigate } from 'react-router-dom';
import { LogOut} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function systemadminDashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData || userData.role !== 'system_admin') {
      navigate('/login');
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
    <h1>System Admin Dashboard</h1>
    <button onClick={handleLogout}>
      <LogOut size={20} />
        Logout
    </button>
  </div>
  );
}