import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

const useLogin = () => {
  const [loginError, setLoginError] = useState(null);
  const [isLoginPending, setIsLoginPending] = useState(false);

  const handleLogin = useCallback(async (mail, password) => {
    setIsLoginPending(true);

    const { data, error } = await supabase
      .from('demousers')
      .select('*')
      .eq('email', mail)
      .eq('password', password)
      .single();

    if (error || !data) {
      setLoginError('Invalid credentials');
      setIsLoginPending(false);
      return false;
    }

    document.cookie = `userId=${data.id}; path=/;`;
    setLoginError(null);
    setIsLoginPending(false);
    return true
  }, []);

  return { handleLogin, loginError, isLoginPending, setIsLoginPending };
};

export default useLogin;
