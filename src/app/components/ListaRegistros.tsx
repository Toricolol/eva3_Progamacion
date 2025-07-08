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

  if (registros.length === 0) return <p>No hay registros aún.</p>;

  return (
    <div>
      <h2>Lista de Registros</h2>
      {registros.map((r) =>
        modoEdicion === r.id ? (
          <div key={r.id} style={{ marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <input name="nombre" value={formEdit.nombre} onChange={manejarCambio} />
            <input name="edad" type="number" value={formEdit.edad} onChange={manejarCambio} />
            <select name="categoria" value={formEdit.categoria} onChange={manejarCambio}>
              <option value="">Seleccione</option>
              <option value="Evento">Evento</option>
              <option value="Proyecto">Proyecto</option>
              <option value="Beneficio">Beneficio</option>
            </select>
            <textarea name="descripcion" value={formEdit.descripcion} onChange={manejarCambio} />
            <input name="fecha" type="date" value={formEdit.fecha} onChange={manejarCambio} />
            <button onClick={manejarGuardarClick}>Guardar</button>
            <button onClick={manejarCancelar}>Cancelar</button>
          </div>
        ) : (
          <div key={r.id} style={{ marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <p><strong>Nombre:</strong> {r.nombre}</p>
            <p><strong>Edad:</strong> {r.edad}</p>
            <p><strong>Categoría:</strong> {r.categoria}</p>
            <p><strong>Descripción:</strong> {r.descripcion}</p>
            <p><strong>Fecha:</strong> {r.fecha}</p>
            <button onClick={() => manejarEditarClick(r)}>Editar</button>
            <button onClick={() => eliminarRegistro(r.id)}>Eliminar</button>
          </div>
        )
      )}
    </div>
  );
}

 