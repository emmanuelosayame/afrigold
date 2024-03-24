import { useEffect, useState } from 'react';
import { getCurrentUser } from '../api/api';

export const useProfile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);
        const data = await getCurrentUser();
        console.log(data);
        setCurrentUser(data);
      } catch (error) {
        setError('Failed to fetch current user');
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return { currentUser, loading, error };
};
