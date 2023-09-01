import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './StartingPage.css'

const StartingPage = () => {
    useEffect(() => {
        document.title = 'Nexy';
      }, []); 

  return (
    <div>
        <div className="starting-page">
            <div className="starting-content">
                <h1>Wypełnij Formularz</h1>
                <p>Zapraszamy do wypełnienia formularza poniżej.</p>
                <Link to="/formularz">
                <button className="go-button">Przejdź do formularza</button>
                </Link>
            </div>
            <span>© nexy 2023 - All Rights Reserved</span>
        </div>
    </div>
  );
};

export default StartingPage;
