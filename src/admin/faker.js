import { db } from "../firebase.js";
import { faker } from "@faker-js/faker";
import { collection, addDoc } from "firebase/firestore";

export function createRandomUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const fullName = `${firstName} ${lastName}`;

  return {
    name: fullName,
    email: faker.internet.email({ firstName, lastName }),
    phone: faker.phone.number(),
    date: faker.date.soon(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 50,
});
console.log("starting....");
async function addFakers() {
  try {
    for (const user of users) {
      const docRef = await addDoc(collection(db, "bookings"), user);
      console.log("Added:", docRef.id);
    }
    console.log("Done");
  } catch (e) {
    console.error("Error: ", e);
  }
}

export { addFakers };
