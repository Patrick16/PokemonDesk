import React from 'react';

interface IEmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<IEmptyPageProps> = ({ title }) => {
  return (
    <div>
      <div>This is empty page for {title}!</div>
    </div>
  );
};

export default EmptyPage;
