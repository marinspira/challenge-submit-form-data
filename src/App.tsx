import { useState } from "react";
import "./styles.css";

export default function App() {
  const [form, setForm] = useState({
    username: "",
    fullname: "",
    age: "",
  });

  const [isSubmited, setIsSubmited] = useState(false);

  const formSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmited(true);
  };

  const updateFields = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setIsSubmited(false);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={formSubmit}>
        <label htmlFor="username">
          Username
          <input
            placeholder="Username"
            name="username"
            onChange={updateFields}
            value={form.username || ""}
          />
        </label>
        <label>FullName</label>
        <input
          placeholder="FullName"
          name="fullname"
          onChange={updateFields}
          value={form.fullname || ""}
        />
        <label>Age</label>
        <input
          placeholder="Age"
          name="age"
          type="number"
          onChange={updateFields}
          value={form.age || ""}
        />
        <button>Submit</button>
      </form>
      {isSubmited && (
        <ul>
          <li>{`Username: ${form.username}`}</li>
          <li>{`FullName: ${form.fullname}`}</li>
          <li>{`Age: ${form.age}`}</li>
        </ul>
      )}
    </div>
  );
}
