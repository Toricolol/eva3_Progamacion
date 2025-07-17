'use client';
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaRegistros from './components/ListaRegistros';
import { db } from './conexionFirebase/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export interface Registro {
  id: string;
  nombre: string;
  edad: string;
  categoria: string;
  descripcion: string;
  fecha: string;
}

export default function Page() {
  const [registros, setRegistros] = useState<Registro[]>([]);

  const obtenerRegistros = async () => {
    const querySnapshot = await getDocs(collection(db, "registros"));
    const datos = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })) as Registro[];
    setRegistros(datos);
  };

  useEffect(() => {
    obtenerRegistros();
  }, []);

  const agregarRegistro = async (nuevo: Omit<Registro, 'id'>) => {
    await addDoc(collection(db, "registros"), nuevo);
    obtenerRegistros();
  };

  const eliminarRegistro = async (id: string) => {
    await deleteDoc(doc(db, "registros", id));
    obtenerRegistros();
  };

  const editarRegistro = async (editado: Registro) => {
    const ref = doc(db, "registros", editado.id);
    await updateDoc(ref, {
      nombre: editado.nombre,
      edad: editado.edad,
      categoria: editado.categoria,
      descripcion: editado.descripcion,
      fecha: editado.fecha
    });
    obtenerRegistros();
  };

  return (
    <main>
      <h1>Reguistros</h1>
      <Formulario agregarRegistro={agregarRegistro} />
      <ListaRegistros
        registros={registros}
        eliminarRegistro={eliminarRegistro}
        editarRegistro={editarRegistro}
      />
    </main>
  );
}
