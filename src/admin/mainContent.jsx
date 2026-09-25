import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.js";
import { useEffect, useState } from "react";

function formatDate(date) {
  if (!date) return "";
  if (typeof date.toDate === "function")
    return date.toDate().toLocaleDateString();
  if (typeof date === "object" && "seconds" in date) {
    return new Date(date.seconds * 1000).toLocaleDateString();
  }
  return date;
}

export default function MainContent({ search }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "bookings"), (snapshot) => {
      const bArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookings(bArray);
    });
    return () => unsubscribe();
  }, []);

  const filtered = search
    ? bookings.filter((item) =>
        item.name?.toLowerCase().startsWith(search.toLowerCase()),
      )
    : bookings;

  return (
    <table className="ml-8 mt-50 w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
      <thead className="bg-slate-800 text-white">
        <tr>
          <th className="px-4 py-3 text-left">Name</th>
          <th className="px-4 py-3 text-left">Phone</th>
          <th className="px-4 py-3 text-left">Email</th>
          <th className="px-4 py-3 text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((booking, i) => (
          <tr
            key={booking.id}
            className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
          >
            <td className="px-4 py-2 border-t border-slate-200">
              {booking.name}
            </td>
            <td className="px-4 py-2 border-t border-slate-200">
              {booking.phone}
            </td>
            <td className="px-4 py-2 border-t border-slate-200">
              {booking.email}
            </td>
            <td className="px-4 py-2 border-t border-slate-200">
              {formatDate(booking.date)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
