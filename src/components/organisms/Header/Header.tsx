import { motion } from 'framer-motion';
import React from 'react';
import Container from '../../atoms/Container/Container';

export default function Header() {
  return (
    <header>
      <Container>
        <motion.h1
          initial={{ opacity: 0, scale: 0, y: '-120%' }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className="text-center font-bold text-2xl uppercase tracking-[0.2em]"
        >
          todo
        </motion.h1>
      </Container>
    </header>
  );
}
