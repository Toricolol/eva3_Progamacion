'use client';
import React, { useState } from 'react';
import Formulario from './components/Formulario';

export interface Registro {
  id: number;
  nombre: string;
  edad: string;
  categoria: string;
  descripcion: string;
  fecha: string;
}

export default function Page() {
  const [registros, setRegistros] = useState<Registro[]>([]);

  const agregarRegistro = (nuevo: Registro) => {
    setRegistros([...registros, nuevo]);
  };

  return (
    <main>
      <Formulario agregarRegistro={agregarRegistro} />
    </main>
  );
}
