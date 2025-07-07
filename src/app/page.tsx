'use client';
import React, { useState } from 'react';

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

  return (
    <main>
      <p>App cargada</p>
    </main>
  );
}

