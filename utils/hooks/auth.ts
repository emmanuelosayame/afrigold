import useSwr from 'swr';
import { api } from '../api';

type LoginResponse = {
  statusCode: number;
  message: string;
  data: {
    id: string;
    email: 'captainlynks@gmail.com';
    role: 1 | 2 | 3;
    is_verified: boolean;
    account_status: number;
    createdAt: string;
    updatedAt: string;
  };
};

export const useAuth = () => {
  const { data, isLoading, error } = useSwr<LoginResponse>(
    ['/auth/current'],
    async ([url]) => (await api.get(url)).data,
    {
      onSuccess: (data) => {},
      revalidateOnFocus: false,
    }
  );

  return {
    user: data?.data,
    loading: isLoading,
    error: error?.response?.data as string,
  };
};
