/**import { auth } from "../../firebase";


export function signUp(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function logout() {
    return auth().signOut();
  } **/
  const users = [
    { email: "kim@test.com", password: "123", name: "Kim" },
    { email: "lee@test.com", password: "456", name: "Lee" },
    { email: "park@test.com", password: "789", name: "Park" },
  ];
  
  export function signIn({ email, password }) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  }
