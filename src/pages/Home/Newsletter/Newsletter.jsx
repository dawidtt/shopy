import Form from "./Form";
function Newsletter() {
  return (
    <div className="md:flex md:items center md:justify-center">
      <img
        className="md:max-w-[500px]"
        src="./src/assets/woman-shopping.jpg"
        alt=""
      />
      <div className="  md:flex flex-col  justify-around px-5 max-w-[600px]">
        <div className="p-5 ">
          <h3 className="text-lg font-bold  md:text-3xl">
            Stay Updated with FakeStore!
          </h3>
          <p className=" lg:text-lg mt-4 md:pt-6">
            Join our newsletter and be the first to know about exclusive deals,
            new arrivals, and special offers!
          </p>
        </div>
        <Form></Form>
      </div>
    </div>
  );
}

export default Newsletter;
