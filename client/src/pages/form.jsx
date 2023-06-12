import React from "react";

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/contact-form", { // Replace with your server URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form data sent successfully");
        } else {
          console.error("Failed to send form data");
        }
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Here</h1>
      <input type="text" name="name" placeholder="Enter name" />
      <input type="email" name="email" placeholder="example@gmail.com"/>
      <input type="tel" name="phone" placeholder="+91"/>
      <textarea name="message" cols="30" rows="10" placeholder="Type here.."></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;
