'use client';
import React, { useState, FormEvent } from 'react';
import { Registro } from '../page';

interface Props {
  agregarRegistro: (registro: Omit<Registro, 'id'>) => void;
}

export default function Formulario({ agregarRegistro }: Props) {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nombre || !edad || !categoria || !descripcion || !fecha) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const nuevo = { nombre, edad, categoria, descripcion, fecha };
    agregarRegistro(nuevo);
    setNombre('');
    setEdad('');
    setCategoria('');
    setDescripcion('');
    setFecha('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        alignItems: 'center',
        marginBottom: '20px'
      }}
    >
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="number" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Categoría</option>
        <option value="Evento">Evento</option>
        <option value="Proyecto">Proyecto</option>
        <option value="Beneficio">Beneficio</option>
      </select>
      <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  );
}
