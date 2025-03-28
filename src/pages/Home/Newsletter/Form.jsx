import MainButton from "../../../components/MainButton/MainButton";
import { useState } from "react";
function Form() {
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    setIsEmailWrong(!emailRegex.test(email));
  };
  return (
    <form
      noValidate
      className="flex flex-col p-4 md:gap-4 relative"
      onSubmit={onSubmit}
    >
      <input
        className={
          "mb-4 text-sm px-4  py-3  md:text-lg   lg:text-xl rounded-xl shadow-2xl focus:outline-1 outline-blue-500 " +
          (isEmailWrong ? "border-1 border-red-500 focus:outline-red-500 " : "")
        }
        type="email"
        name="email"
        id="email"
        placeholder="email@example.com"
        onChange={onChange}
      />

      <MainButton text={"Sign Up"}></MainButton>
      {isEmailWrong && (
        <span className="absolute top-[-6px] left-[20px] text-red-500 text-xs md:text-sm">
          Please enter a valid email
        </span>
      )}
    </form>
  );
}

export default Form;
