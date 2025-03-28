import PropTypes from "prop-types";
import MainButton from "../../../components/MainButton/MainButton";
function Form() {
  return (
    <form className="flex flex-col p-4 md:gap-4 ">
      <input
        className="mb-4 text-sm px-4  py-3  md:text-lg   lg:text-xl rounded-xl shadow-2xl"
        type="email"
        name="email"
        id="email"
        placeholder="email@example.com"
      />
      <MainButton text={"Sign Up"}></MainButton>
    </form>
  );
}

Form.PropTypes = {};
export default Form;
