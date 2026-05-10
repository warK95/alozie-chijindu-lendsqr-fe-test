import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnClickOutside } from '../../hooks';
import { ViewDetailsIcon, BlacklistUserIcon, ActivateUserIcon } from '../../assets/icons';

interface ActionMenuProps {
  userId: string;
  onClose: () => void;
}

export const ActionMenu: React.FC<ActionMenuProps> = ({ userId, onClose }) => {
  const navigate = useNavigate();
  const handleClickOutside = useCallback(() => onClose(), [onClose]);
  const ref = useOnClickOutside<HTMLDivElement>(handleClickOutside);

  return (
    <div className="users-page__action-menu" ref={ref}>
      <div
        className="users-page__action-item"
        onClick={() => { navigate(`/users/${userId}`); onClose(); }}
      >
        <ViewDetailsIcon />
        View Details
      </div>
      <div className="users-page__action-item" onClick={onClose}>
        <BlacklistUserIcon />
        Blacklist User
      </div>
      <div className="users-page__action-item" onClick={onClose}>
        <ActivateUserIcon />
        Activate User
      </div>
    </div>
  );
};
