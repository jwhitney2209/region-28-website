import React, { useState } from "react";

// firebase imports
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const AddDirector = () => {
  const [newDistrict, setNewDistrict] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [newSchool, setNewSchool] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newZip, setNewZip] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "directors"), {
      district: newDistrict,
      email: newEmail,
      name: newName,
      phone: newPhone,
      position: newPosition,
      school: newSchool,
      address: newAddress,
      city: newCity,
      zip: newZip,
    });

    // setNewDistrict('')
    setNewEmail('')
    setNewName('')
    // setNewPhone('')
    setNewPosition('')
    // setNewSchool('')
    // setNewAddress('')
    // setNewCity('')
    // setNewZip('')
  };

  return (
    <div className="my-4 mx-6">
      <form onSubmit={handleSubmit}>
      <div className="field">
          <label className="label">
            <span>School District:</span>
          </label>
          <div className="control">
            <input
              required
              className="input"
              type="text"
              onChange={(e) => setNewDistrict(e.target.value)}
              value={newDistrict}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">
            <span>Director Email:</span>
          </label>
          <div className="control">
            <input
              required
              className="input"
              type="email"
              onChange={(e) => setNewEmail(e.target.value)}
              value={newEmail}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">
            <span>Name (First and Last):</span>
            <div className="control">
              <input
                required
                className="input"
                type="text"
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
              />
            </div>
          </label>
        </div>
        <div className="field">
          <label className="label">
            <span>School/Office Phone:</span>
            <div className="control">
              <input
                required
                className="input"
                type="text"
                onChange={(e) => setNewPhone(e.target.value)}
                value={newPhone}
              />
            </div>
          </label>
        </div>
        <div className="field">
          <label className="label">
            <span>Director Position:</span>
            <div className="control">
              <input
                required
                className="input"
                type="text"
                onChange={(e) => setNewPosition(e.target.value)}
                value={newPosition}
              />
            </div>
          </label>
        </div>
        <div className="field">
          <label className="label">
            <span>School Name:</span>
            <div className="control">
              <input
                required
                className="input"
                type="text"
                onChange={(e) => setNewSchool(e.target.value)}
                value={newSchool}
              />
            </div>
          </label>
        </div>
        <div className="field">
          <label className="label">
            <span>School Address:</span>
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={(e) => setNewAddress(e.target.value)}
                value={newAddress}
              />
            </div>
          </label>
        </div>
        <div className="field">
          <label className="label">
            <span>City:</span>
            <div className="control">
              <input
                required
                className="input"
                type="text"
                onChange={(e) => setNewCity(e.target.value)}
                value={newCity}
              />
            </div>
          </label>
        </div>
        <div className="field">
          <label className="label">
            <span>Zipcode:</span>
            <div className="control">
              <input
                required
                className="input"
                type="text"
                onChange={(e) => setNewZip(e.target.value)}
                value={newZip}
              />
            </div>
          </label>
        </div>
        <button className="button is-info" type="submit">Add Director</button>
      </form>
    </div>
  );
};

export default AddDirector;
