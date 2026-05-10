import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { useAuth } from '../features/auth/AuthContext';
import './Login.scss';

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Enter a valid email';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 4) newErrors.password = 'Password must be at least 4 characters';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setErrors({ general: 'Invalid credentials. Please try again.' });
      }
    } catch {
      setErrors({ general: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="login-page">
        <h1 className="login-page__title">Welcome!</h1>
        <p className="login-page__subtitle">Enter details to login.</p>

        <form className="login-page__form" onSubmit={handleSubmit} noValidate>
          <div className="login-page__field">
            <div className="login-page__input-wrapper">
              <input
                type="email"
                className={`login-page__input${errors.email ? ' login-page__input--error' : ''}`}
                placeholder="Email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                autoComplete="email"
              />
            </div>
            {errors.email && <span className="login-page__error-msg">{errors.email}</span>}
          </div>

          <div className="login-page__field">
            <div className="login-page__input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`login-page__input login-page__input--password${errors.password ? ' login-page__input--error' : ''}`}
                placeholder="Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login-page__toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <span className="login-page__error-msg">{errors.password}</span>}
          </div>

          <a href="#" className="login-page__forgot" onClick={(e) => e.preventDefault()}>
            Forgot Password?
          </a>

          {errors.general && <span className="login-page__error-msg" style={{ textAlign: 'center' }}>{errors.general}</span>}

          <button type="submit" className="login-page__submit" disabled={loading}>
            {loading ? (
              <>
                <span className="login-page__loading-dot" />
                <span className="login-page__loading-dot" />
                <span className="login-page__loading-dot" />
              </>
            ) : (
              'Log In'
            )}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
