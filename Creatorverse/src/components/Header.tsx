import React from 'react';
import { useEffect, useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router';

const Header: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = ["Welcome to CREATOVERSE!", "Discover New Creators", "Add Your Inspiration"];
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    const currentText = phrases[textIndex % phrases.length];
    const speed = isDeleting ? 60 : 100;
    const timeout = setTimeout(() => {
      setDisplayedText(prev =>
        isDeleting ? currentText.substring(0, prev.length - 1) : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTextIndex(prev => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  return (
    <div className="header">
        <div className="poster">
            <h1 className="headline">{displayedText}</h1>
            <div className="buttons_section">
                <button onClick = {() => navigate(`/NewInfluencer`)}>Add A New Creator</button>
                <button onClick = {() => navigate(`/`)}>Display All Creators</button>
            </div>
      </div>     
    </div>
  );
};

export default Header;
