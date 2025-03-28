import Testimonial from "./Testimonial";

Testimonial;
function Testimonials() {
  return (
    <div className="py-4 px-8 text-center my-16">
      <h3 className="text-lg font-bold mb-6 md:text-2xl">
        What Our Customers Say
      </h3>
      <div className="md:flex md:gap-8 justify-center">
        <Testimonial
          text={"Great quality and fast shipping! Highly recommend."}
          author={"Emma L."}
        ></Testimonial>
        <Testimonial
          text={
            "Amazing deals! I found exactly what I was looking for at a great price."
          }
          author={"James W."}
        ></Testimonial>
        <Testimonial
          text={"Super customer service. Will definitely shop here again!"}
          author={"Sophia M."}
        ></Testimonial>
      </div>
    </div>
  );
}

export default Testimonials;
