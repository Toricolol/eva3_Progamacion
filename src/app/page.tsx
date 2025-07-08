'use client';
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaRegistros from './components/ListaRegistros';

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

  useEffect(() => {
    const datos = localStorage.getItem('registros');
    if (datos) {
      setRegistros(JSON.parse(datos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('registros', JSON.stringify(registros));
  }, [registros]);

  const agregarRegistro = (nuevo: Registro) => {
    setRegistros([...registros, nuevo]);
  };

  const eliminarRegistro = (id: number) => {
    const actualizados = registros.filter((r) => r.id !== id);
    setRegistros(actualizados);
  };

  const editarRegistro = (editado: Registro) => {
    const actualizados = registros.map((r) =>
      r.id === editado.id ? editado : r
    );
    setRegistros(actualizados);
  };

  return (
    <main>
      <Formulario agregarRegistro={agregarRegistro} />
      <ListaRegistros
        registros={registros}
        eliminarRegistro={eliminarRegistro}
        editarRegistro={editarRegistro}
      />
    </main>
  );
}
