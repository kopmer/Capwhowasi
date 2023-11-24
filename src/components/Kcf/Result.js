import React from 'react';

const Result = ({ location }) => {
  const results = location.state ? location.state.results : [];
  
  return (
    <div>
      <h2>결과 페이지</h2>
      {/* 여기서 결과를 표시합니다 */}
      {results.map((result, index) => (
        <div key={index}>{result}</div>
      ))}
    </div>
  );
};

export default Result;