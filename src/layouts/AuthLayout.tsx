import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../assets/icons';
import './AuthLayout.scss';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const IllustrationSVG: React.FC = () => (
  <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background shapes */}
    <circle cx="380" cy="80" r="60" fill="#E9B200" fillOpacity="0.2"/>
    <circle cx="100" cy="320" r="40" fill="#39CDCC" fillOpacity="0.15"/>
    <rect x="300" y="180" width="80" height="80" rx="12" fill="#FF3366" fillOpacity="0.12" transform="rotate(20 300 180)"/>
    <rect x="60" y="120" width="50" height="50" rx="8" fill="#5718FF" fillOpacity="0.1" transform="rotate(-15 60 120)"/>
    <ellipse cx="240" cy="350" rx="160" ry="20" fill="#213F7D" fillOpacity="0.06"/>

    {/* Door frame */}
    <rect x="190" y="120" width="120" height="200" rx="4" fill="#213F7D" fillOpacity="0.08" stroke="#213F7D" strokeWidth="2"/>
    <rect x="202" y="132" width="96" height="176" rx="2" fill="white" fillOpacity="0.6"/>
    <circle cx="286" cy="222" r="4" fill="#213F7D" fillOpacity="0.4"/>

    {/* Person body */}
    <ellipse cx="230" cy="340" rx="30" ry="8" fill="#213F7D" fillOpacity="0.08"/>
    {/* Legs */}
    <rect x="215" y="290" width="14" height="50" rx="7" fill="#39CDCC"/>
    <rect x="233" y="290" width="14" height="50" rx="7" fill="#39CDCC"/>
    {/* Shoes */}
    <ellipse cx="222" cy="340" rx="12" ry="6" fill="#E9B200"/>
    <ellipse cx="240" cy="340" rx="12" ry="6" fill="#E9B200"/>
    {/* Torso */}
    <rect x="205" y="210" width="50" height="80" rx="10" fill="#5718FF" fillOpacity="0.8"/>
    {/* Bag */}
    <rect x="165" y="230" width="40" height="50" rx="8" fill="#213F7D" fillOpacity="0.7"/>
    <path d="M175 230 Q185 218 195 230" stroke="#213F7D" strokeWidth="2" fill="none"/>
    {/* Head */}
    <circle cx="232" cy="195" r="22" fill="#E9B200" fillOpacity="0.85"/>
    {/* Hair */}
    <path d="M210 190 Q220 172 240 178 Q252 180 254 192" fill="#213F7D" fillOpacity="0.7"/>
    {/* Face */}
    <circle cx="225" cy="196" r="2" fill="#213F7D" fillOpacity="0.6"/>
    <circle cx="238" cy="196" r="2" fill="#213F7D" fillOpacity="0.6"/>
    <path d="M223 205 Q231.5 210 241 205" stroke="#213F7D" strokeWidth="1.5" strokeLinecap="round" fill="none" fillOpacity="0.6"/>
    {/* Glasses */}
    <rect x="221" y="192" width="10" height="7" rx="3" stroke="#213F7D" strokeWidth="1.5" fill="none" fillOpacity="0.7"/>
    <rect x="234" y="192" width="10" height="7" rx="3" stroke="#213F7D" strokeWidth="1.5" fill="none" fillOpacity="0.7"/>
    <path d="M231 195.5H234" stroke="#213F7D" strokeWidth="1.5" fillOpacity="0.7"/>
    {/* Arms */}
    <path d="M205 240 Q185 255 180 270" stroke="#5718FF" strokeWidth="12" strokeLinecap="round" fill="none" strokeOpacity="0.8"/>
    <path d="M255 240 Q270 250 260 270" stroke="#5718FF" strokeWidth="12" strokeLinecap="round" fill="none" strokeOpacity="0.8"/>
    {/* Speech bubble */}
    <rect x="80" y="140" width="100" height="50" rx="12" fill="white" stroke="#E0E0E0" strokeWidth="1.5"/>
    <path d="M140 190 L130 205 L150 190" fill="white" stroke="#E0E0E0" strokeWidth="1.5"/>
    <rect x="92" y="157" width="60" height="6" rx="3" fill="#213F7D" fillOpacity="0.3"/>
    <rect x="92" y="168" width="40" height="6" rx="3" fill="#213F7D" fillOpacity="0.2"/>
    {/* Stars */}
    <path d="M400 140 L402 147 L409 147 L403.5 151 L406 158 L400 154 L394 158 L396.5 151 L391 147 L398 147 Z" fill="#E9B200" fillOpacity="0.6"/>
    <path d="M420 200 L421.5 205 L427 205 L422.6 208 L424 213 L420 210.5 L416 213 L417.4 208 L413 205 L418.5 205 Z" fill="#39CDCC" fillOpacity="0.5"/>
  </svg>
);

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__container">
        <div className="auth-layout__illustration">
          <div className="auth-layout__illustration-svg">
            <IllustrationSVG />
          </div>
        </div>
        <div className="auth-layout__form-wrapper">
          <div className="auth-layout__form-box">
            <Link to="/" className="auth-layout__logo" style={{ marginBottom: 32, display: 'flex' }}>
              <LogoIcon />
              <span className="auth-layout__logo-text">lendsqr</span>
            </Link>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
