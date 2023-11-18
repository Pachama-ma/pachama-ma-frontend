import React from 'react';

interface HeadProps {
  title: string;
  description: string;
}

const Head: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link
        href='https://fonts.googleapis.com/css2?family=Playfair+Display&family=Public+Sans:wght@100&display=swap'
        rel='stylesheet'
      />
    </head>
  );
};

export default Head;
