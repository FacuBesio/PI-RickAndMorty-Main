import { useState } from "react";
import Logo from "../../assets/Img/thumbbig-909641.webp"
// import validate from "../../functions/validation";
import { validate } from '../../functions/validation';
import style from "./Form.module.css";



const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value });
        validate({ ...userData, [property]: value }, errors, setErrors)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!errors.email && !errors.password) {
            login(userData);
        } else {
            alert("Verifique la informacion requerida en los campos")
        }
    }


    return (
        <form onSubmit={submitHandler}>
            <div className={style.formImg}>
                <img src={Logo} alt="" />
            </div>

            <div className={style.formInputs}>
                <label htmlFor="email">Email: </label>
                <input type="text"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                />
                <span>{errors.email}</span>


                <label htmlFor="password">Password: </label>
                <input type="password"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="******"
                />
                <span>{errors.password}</span>
            </div>

            <div className={style.formButton}>
                <button type="submit" disabled={errors.email || errors.password}>LogIn</button>
            </div>
        </form>
    )
}

export default Form;