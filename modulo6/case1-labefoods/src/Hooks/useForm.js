import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    function onChange (event) {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });

  }
    const clear =() => {
        setForm(initialState)
    }
return {form, onChange, clear}
}

export default useForm