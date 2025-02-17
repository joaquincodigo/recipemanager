import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

const useLogin = () => {
  const [loginError, setLoginError] = useState(null);

  const handleLogin = useCallback(async (mail, password) => {
    // Query the 'demousers' table for matching credentials
    const { data, error } = await supabase
      .from('demousers')
      .select('*')
      .eq('email', mail)
      .eq('password', password)
      .single();

    if (error || !data) {
      setLoginError('Invalid credentials');
      return;
    }

    // Save the user ID in a cookie on successful login
    document.cookie = `userId=${data.id}; path=/;`;
    setLoginError(null);
  }, []);

  return { handleLogin, loginError };
};

export default useLogin;
