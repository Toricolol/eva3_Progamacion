'use client';
import React from 'react';
import { Registro } from '../page';

interface Props {
  registros: Registro[];
  eliminarRegistro: (id: number) => void;
  editarRegistro: (registro: Registro) => void;
}

export default function ListaRegistros({ registros, eliminarRegistro, editarRegistro }: Props) {
  if (registros.length === 0) return <p>No hay registros aún.</p>;

  return (
    <div>
      <h2>Lista de Registros</h2>
      {registros.map((r) => (
        <div key={r.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <p><strong>Nombre:</strong> {r.nombre}</p>
          <p><strong>Edad:</strong> {r.edad}</p>
          <p><strong>Categoría:</strong> {r.categoria}</p>
          <p><strong>Descripción:</strong> {r.descripcion}</p>
          <p><strong>Fecha:</strong> {r.fecha}</p>
          <button onClick={() => editarRegistro(r)}>Editar</button>
          <button onClick={() => eliminarRegistro(r.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
