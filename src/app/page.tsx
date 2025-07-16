'use client';
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import { db } from './conexionFirebase/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

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

  return (
    <main>
      <Formulario agregarRegistro={agregarRegistro} />
    </main>
  );
}

