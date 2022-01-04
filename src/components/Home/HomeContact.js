import React from "react";
import Button from "../base/Button";
import Input from "../base/Input";
import TextArea from "../base/TextArea";
function HomeContact() {
  return (
    <form className="my-32 py-12 p-4 bg-gray-100 rounded-md">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">
          Have an Idea for a project ?
        </h1>
        <p className="text-md mb-6">Send Me Details</p>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email Address" />
        <TextArea placeholder="Tell me more about your idea" />
        <Button text="Send Message" />
      </div>
    </form>
  );
}

export default HomeContact;
