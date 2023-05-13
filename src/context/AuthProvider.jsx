import { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import auth from "../config/firebase.config";

export const AUTH_CONTEXT = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();

	const userSignUp = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const userSignIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setLoading(false);
			if (user) {
				setUser(user);
				setLoading(false);
			}
		});

		return () => {
			unsubscribe();
		};
	});

	const userInfo = {
		userSignUp,
		googleSignIn,
		userSignIn,
		user,
		loading,
	};

	return (
		<AUTH_CONTEXT.Provider value={userInfo}>{children}</AUTH_CONTEXT.Provider>
	);
};

export default AuthProvider;
