import { useForm } from "react-hook-form";

const AñadirPokemon = (props) => {

    const pokemonPlantilla = {
        id: 'id',
        nombre: "nombre",
        tipos: "tipos",
        imagen: "imagen"
    }

    const pokemonInicial = {
        id: 0,
        nombre: "",
        tipos: "",
        imagen: ""
    }

    const {register,
           handleSubmit,
           reset,
           formState : {errors}} = useForm({defaultValues: pokemonInicial});

    const manejarFormulario = handleSubmit((nuevoPokemon) => {

        nuevoPokemon.tipos = nuevoPokemon.tipos.split(',').map(tipo => tipo.trim());

        // A través de la función que recibe el componente como props, devolvemos el nuevo contacto
        // al componente padre para que lo añada a la agenda
        props.manejarNuevoPokemon(nuevoPokemon);

        // Reseteamos los campos del formulario al estado inicial
        reset(pokemonInicial);
    });

    return (
        <div className="row">
            <div className="col-md-6">
                <form id="form" onSubmit={manejarFormulario}>
                    <h2>Añadir Pokemon</h2>
                    <label htmlFor={pokemonPlantilla.nombre}>Nombre</label> <br/>
                    <input id={pokemonPlantilla.nombre} type="text"
                        {...register(pokemonPlantilla.nombre,
                            {required : { value : true,
                                          message: "El nombre es obligatorio"
                                        }
                            })
                        }>
                    </input><br/>
                    <span>{errors.nombre?.message}</span><br/>

                    <label htmlFor={pokemonPlantilla.tipos}>Tipos</label> <br/>
                    <input id={pokemonPlantilla.tipos} type="text"
                        {...register(pokemonPlantilla.tipos,
                            {required : { value : true,
                                          message: "El tipo es obligatorio"
                                        }
                            })
                        }>
                    </input><br/>
                    <span>{errors.tipos?.message}</span><br/>

                    <label htmlFor={pokemonPlantilla.imagen}>Imagen</label> <br/>
                    <input id={pokemonPlantilla.imagen} type="text"
                        {...register(pokemonPlantilla.imagen,
                            {required : { value : true,
                                          message: "La imagen es obligatoria"
                                        }
                            })
                        }>
                    </input><br/>
                    <span>{errors.imagen?.message}</span><br/>

                    <button>Añadir</button>
                </form>
            </div>
        </div>
    )
}

export default AñadirPokemon;