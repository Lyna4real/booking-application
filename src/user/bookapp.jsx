import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [submit, setSubmit] = useState("Confirm Booking");
  const [docId, setDocId] = useState(null);

  function handleSubmit(event) {
    if (submit === "Confirm Booking") {
      event.preventDefault();
      setSubmit("Cancel booking");
      async function func() {
        try {
          const docRef = await addDoc(collection(db, "bookings"), {
            name: name,
            email: email,
            phone: phone,
            date: date,
          });
          console.log("Document written with ID: ", docRef.id);
          setDocId(docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
      func();
    }

    if (submit === "Cancel booking") {
      async function deleter() {
        event.preventDefault();
        await deleteDoc(doc(db, "bookings", docId));
        setDocId(null);
        setSubmit("Confirm Booking");
      }
      deleter();
    }
  }

  return (
    <section className="w-full p-4 sm:p-6 md:p-8" id="book">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
        Book an appointment
      </h2>

      <form
        className="max-w-md mx-auto flex flex-col gap-3 sm:gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Full name"
          className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email address"
          className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="date"
          className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          type="submit"
          className="bg-teal-700 text-white rounded-lg py-2 text-sm font-medium hover:bg-teal-800"
        >
          {submit}
        </button>
      </form>
    </section>
  );
}
