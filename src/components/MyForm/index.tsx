import React from "react";
import MyButton from "../MyButton";

class MyForm extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                    />

                </div>
                <div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <MyButton />
            </form>
        )
    }
}

export default MyForm;