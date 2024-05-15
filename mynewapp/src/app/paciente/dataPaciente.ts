import { Paciente } from "./paciente";

export const dataPacientes = [
    new Paciente("Ana García", 35, "Hipertensión",)
    new Paciente("Fútbol 1", "Freddy Rincón", 2),
    new Paciente("Algoritmos", "Dennis Ritchie", 2),
    new Paciente("Estructuras de datos", "Yesid Donoso", 2),
    new Paciente("Fútbol 2", "James Rodríguez", 6)
];
[
    {
      "nombre": "Ana García",
      "edad": 35,
      "diagnostico": "Hipertensión",
      "historial": [
        {
          "fecha": "2023-05-10",
          "sintomas": "Dolor de cabeza, mareos"
        },
        {
          "fecha": "2023-05-15",
          "sintomas": "Presión arterial alta"
        }
      ]
    },
    {
      "nombre": "Carlos López",
      "edad": 42,
      "diagnostico": "Diabetes tipo 2",
      "historial": [
        {
          "fecha": "2023-05-12",
          "sintomas": "Fatiga, sed excesiva"
        },
        {
          "fecha": "2023-05-18",
          "sintomas": "Niveles elevados de glucosa"
        }
      ]
    },
    {
      "nombre": "María Rodríguez",
      "edad": 8,
      "diagnostico": "Asma",
      "historial": [
        {
          "fecha": "2023-05-14",
          "sintomas": "Dificultad para respirar, sibilancias"
        },
        {
          "fecha": "2023-05-20",
          "sintomas": "Ataque de asma"
        }
      ]
    },
    {
      "nombre": "Pedro Martínez",
      "edad": 50,
      "diagnostico": "Artritis reumatoide",
      "historial": [
        {
          "fecha": "2023-05-16",
          "sintomas": "Dolor e inflamación en las articulaciones"
        },
        {
          "fecha": "2023-05-22",
          "sintomas": "Rigidez matutina"
        }
      ]
    },
    {
      "nombre": "Laura Fernández",
      "edad": 5,
      "diagnostico": "Infección de garganta",
      "historial": [
        {
          "fecha": "2023-05-18",
          "sintomas": "Dolor de garganta, fiebre"
        },
        {
          "fecha": "2023-05-24",
          "sintomas": "Amigdalitis"
        }
      ]
    }
  ]