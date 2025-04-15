// src/components/UserCard.jsx
import React from 'react';
import '../styles.css';

const UserCard = ({ user, onViewProfile }) => {
  return (
    <div className="UserCard-card">
      <img src={user.avatar} alt={user.name} className="UserCard-avatar" />
      <div className="UserCard-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>Role: {user.role}</p>
        <span className={user.isActive ? "UserCard-active" : "UserCard-inactive"}>
          {user.isActive ? 'Active' : 'Inactive'}
        </span>
      </div>
      <button onClick={() => onViewProfile(user)} className="UserCard-button">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;