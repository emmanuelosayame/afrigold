export type LoginResponse = {
  statusCode: number;
  message: 'success';
  data: {
    token: string;
    user: {
      id: string;
      email: string;
      role: number;
      account_status: number;
      created_at: string;
      last_updated: string;
      is_setup_complete: boolean;
      is_verified: boolean;
    };
  };
};

export type CreateAccountResponse = {
  statusCode: number;
  message: 'success';
  data: {
    token: string;
    user: {
      id: string;
      email: string;
      role: number;
      account_status: number;
      created_at: string;
      last_updated: string;
      is_setup_complete: boolean;
      is_verified: boolean;
    };
  };
};
