import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Newsletter: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleUserEmail = (e: any) => {
    e.preventDefault();
    setUserEmail(e.target.value);
  };

  const handleSubscription = (e: any) => {
    e.preventDefault();
    if (userEmail) {
      setSubscribed(true);
      toast.success("Thanks for subscribing!");
    } else {
      return toast.error("Please input your email");
    }
  };

  //   useEffect(() => {
  //     setInterval(() => setSubscribed(false), 5000);
  //   }, [subscribed]);
  return (
    <section className="w-full flex flex-col space-y-4 items-center justify-center px-3 md:px-12 lg:px-32 min-h-[30vh] md:h-[50vh] rounded-md bg-stone-300">
      <h3 className="text-3xl font-bold">Subscribe to our newsletter</h3>

      <form
        onSubmit={handleSubscription}
        className="flex flex-col space-y-2 w-full"
      >
        <input
          type="email"
          value={userEmail}
          onChange={handleUserEmail}
          placeholder="Input your email"
          className="h-10 bg-gray-100 rounded-full px-3 outline-none text-gray-500"
        />
        <button
          type="submit"
          className="w-full h-10 text-2xl opacity-90 hover:opacity-100 font-bold rounded-full bg-gradient-to-r from-btn to-btnHov text-white"
        >
          Subscribe
        </button>
        {/*         
        {subscribed ? (
          <span>Thanks for subscribing</span>
        ) : (
          <button
            type="submit"
            className="w-full h-10 text-2xl opacity-90 hover:opacity-100 font-bold rounded-full bg-gradient-to-r from-btn to-btnHov text-white"
          >
            Subscribe
          </button>
        )} */}
      </form>
    </section>
  );
};
export default Newsletter;
