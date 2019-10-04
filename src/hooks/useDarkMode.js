import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(initialValue) {
	const [darkMode, setDarkMode] = useLocalStorage('bits_darkmode', initialValue);
	useEffect(() => {
		const body = document.querySelector('body');
		if (darkMode) {
			body.classList.add('dark-mode')
		} else {
			body.classList.remove('dark-mode')
		}
	}, [darkMode])
	const toggleDarkMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	}
	return [darkMode, toggleDarkMode];
}