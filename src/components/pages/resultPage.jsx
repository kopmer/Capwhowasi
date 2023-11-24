import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div>
      <h2>Result Page</h2>
      <div>
        {results.length > 0 ? (
          <div>
            <h3>Results:</h3>
            {results.map((result, index) => (
              <div key={index}>{result}</div>
            ))}
          </div>
        ) : (
          <p>No results available.</p>
        )}
      </div>
    </div>
  );
};

export default ResultPage;