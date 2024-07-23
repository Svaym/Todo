import React from 'react';
import Container from '../../atoms/Container/Container';

export default function Header() {
  return (
    <header>
      <Container>
        <h1 className="text-center font-bold text-2xl uppercase tracking-[0.2em]">
          todo
        </h1>
      </Container>
    </header>
  );
}
