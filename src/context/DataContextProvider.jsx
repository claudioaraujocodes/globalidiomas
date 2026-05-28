import { DataContext } from "./DataContext";
import { useState } from "react";

export const DataContextProvider = ({ children }) => {

    const [dataState, setDataState] = useState({

        curso: "",
        conhece: "",
        nivel: "",
        objetivo: [],
        nome: "",
        email: "",
        tel: "",
        comentario: "",

    });

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;

        // Lógica para os checkbox

        if (name === "objetivo") {
            setDataState(prevData => {
                if(checked) {
                    return { 
                       ...prevData, 
                       objetivo: [...prevData.objetivo, value] //value do atributo value="" no checkbox
                    };
                } else {
                    return {
                       ...prevData,
                       objetivo: prevData.objetivo.filter(ob => ob !== value)
                    };
                };

            });
        } else {

            // Lógica para outros inputs
            
            setDataState(prevData => ({
                ...prevData, [name]: value //value - valor de entrada digitado
            }));

        };
    
        console.log(dataState);
    }


    return (


        <DataContext.Provider value={{ dataState, setDataState, handleInputChange }}>
            {children}
        </DataContext.Provider>


    )
}