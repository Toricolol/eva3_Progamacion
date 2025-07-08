'use client';
import React, { useState, ChangeEvent } from 'react';
import { Registro } from '../page';

interface Props {
  registros: Registro[];
  eliminarRegistro: (id: number) => void;
  editarRegistro: (registro: Registro) => void;
}

export default function ListaRegistros({ registros, eliminarRegistro, editarRegistro }: Props) {
  const [modoEdicion, setModoEdicion] = useState<number | null>(null);
  const [formEdit, setFormEdit] = useState<Registro>({
    id: 0,
    nombre: '',
    edad: '',
    categoria: '',
    descripcion: '',
    fecha: '',
  });

  const manejarEditarClick = (registro: Registro) => {
    setModoEdicion(registro.id);
    setFormEdit(registro);
  };

  const manejarGuardarClick = () => {
    editarRegistro(formEdit);
    setModoEdicion(null);
  };

  const manejarCancelar = () => {
    setModoEdicion(null);
  };

  const manejarCambio = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormEdit({ ...formEdit, [name]: value });
  };

  if (registros.length === 0) {
    return <p>No hay registros aún.</p>;
  }


return (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {registros.map((r) =>
      modoEdicion === r.id ? (
        <div key={r.id} style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <input name="nombre" value={formEdit.nombre} onChange={manejarCambio} />
          <input name="edad" type="number" value={formEdit.edad} onChange={manejarCambio} />
          <select name="categoria" value={formEdit.categoria} onChange={manejarCambio}>
            <option value="">Seleccione</option>
            <option value="Evento">Evento</option>
            <option value="Proyecto">Proyecto</option>
            <option value="Beneficio">Beneficio</option>
          </select>
          <input name="descripcion" value={formEdit.descripcion} onChange={manejarCambio} />
          <input name="fecha" type="date" value={formEdit.fecha} onChange={manejarCambio} />
          <button onClick={manejarGuardarClick}>Guardar</button>
          <button onClick={manejarCancelar}>Cancelar</button>
        </div>
      ) : (
        <div key={r.id} style={{ display: 'flex', flexDirection: 'row', gap: '15px', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
          <span><strong>Nombre:</strong> {r.nombre}</span>
          <span><strong>Edad:</strong> {r.edad}</span>
          <span><strong>Categoría:</strong> {r.categoria}</span>
          <span><strong>Descripción:</strong> {r.descripcion}</span>
          <span><strong>Fecha:</strong> {r.fecha}</span>
          <button onClick={() => manejarEditarClick(r)}>Editar</button>
          <button onClick={() => eliminarRegistro(r.id)}>Eliminar</button>
        </div>
      )
    )}
  </div>
);
}
