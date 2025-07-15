'use client';
import React, { useState, useEffect } from 'react';
import { db } from './conexionFirebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

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

  return (
    <main>
      <h1>Conexión a Firestore funcionando</h1>
      {registros.map((registro) => (
        <div key={registro.id}>
          <p>Nombre: {registro.nombre}</p>
        </div>
      ))}
    </main>
  );
}
