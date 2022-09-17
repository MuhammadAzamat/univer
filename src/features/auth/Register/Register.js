import { useState } from "react";
import FormInput from "./FormInput";
import "./register.css"

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    fullName: "",
    surName: "",
    number: "",
    date: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errorMessage: "Iltimos 3-16 gacha so'zdan foydalaning",
      pattern: "^[A-Za-z0-9]{3,16}",
      placeholder: "Ismingizni kiriting",
    },
    {
      id: 2,
      type: "text",
      name: "fullName",
      errorMessage: "Iltimos 3-16 gacha so'zdan foydalaning",
      pattern: "^[A-Za-z0-9]{3,16}",
      placeholder: "Familyangizni kiriting",
    },
    {
      id: 3,
      type: "text",
      name: "surName",
      errorMessage: "Iltimos 3-16 gacha so'zdan foydalaning",
      pattern: "^[A-Za-z0-9]{3,16}",
      placeholder: "Sharifingizni kiriting",
    },
    {
      id: 4,
      type: "tel",
      name: "number",
      errorMessage: "Noto'g'ri raqam kiritlidi",
      pattern: "[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}",
      placeholder: "Raqamingizni kiriting ",
    },
    {
      id: 5,
      type: "date",
      name: "date",
      placeholder: "Tug'ilgan sanangizni kiriting",
    },
    {
      id: 6,
      type: "password",
      name: "password",
      errorMessage: "Iltimos kuchliroq parol yozing",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",
      placeholder: "Parol kiriting",
    },
    {
      id: 7,
      type: "password",
      name: "confirmPassword",
      errorMessage: "Parol tasdiqlanmadi",
      pattern: values.password,
      placeholder: "Parolni tasdiqlang",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  return (
    <div className="Login">
      <div className="Parent_form">
        <h1 className="Login_title">Ro'yhatdan o'tish</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((item) => {
            return (
              <FormInput
                key={item.id}
                {...item}
                value={values[item.name]}
                onChange={onChange}
              />
            );
          })}
          <div className="parent_checkbox">
            <input id="id" type="checkbox" className="checkbox" />
            <label htmlFor="id">Saytdan foydalanish shartlariga roziman</label>
          </div>

          <div className="Parent_Register_btn">
            <button className="submit">Ro'yhatdan o'tish</button>
            <p className="register">Allaqachon ro'yhatdan o'tganmisiz?</p>
            <button className="tizimga_kirish_btn">Tizimga kirish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
