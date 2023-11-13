import { Empleado } from "../types/Empleado";

const BASE_URL = 'http://localhost:8080/api/v1';

export const EmpleadoService = {

    
    getEmpleados: async (): Promise<Empleado[]> => {
       
        const response = await fetch(`${BASE_URL}/Cliente/paged?page=0&size=20&sort=id,asc`);
        const data = await response.json();
        return data;
    },

    
    getEmpleado: async (id:number): Promise<Empleado> => {

        const response = await fetch (`${BASE_URL}/Cliente/${id}`);
        const data = await response.json();
        return data;
        
    },

    createEmpleado:async (Empleado:Empleado):Promise<Empleado> => {

        const response = await fetch(`${BASE_URL}/Cliente`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Empleado)
        });

        const data = await response.json();
        return data;
        
    },

    updateEmpleado: async (id: number, Empleado: Empleado): Promise<Empleado> => {
        
        const response = await fetch(`${BASE_URL}/Cliente/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(Empleado)
        });

        const data = await response.json();
        return data;
    },


    deleteEmpleado: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/Cliente/${id}`, {
            method: "DELETE"
        });
    }
}
