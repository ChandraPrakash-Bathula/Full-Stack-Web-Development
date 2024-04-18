const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center m-4 p-4">
        This is a contact page bro.
      </h1>
      <form>
        <input type="text" className="border border-black m-2 p-2 rounded-sm" placeholder="name" />
        <input type="text" className="border border-black m-2 p-2 rounded-sm" placeholder="message" />
        <button className="border border-sky-800 m-2 p-2 rounded-lg hover:text-white hover:bg-sky-800" >Submit</button>
      </form>
    </div>
  );
};

export default Contact;
