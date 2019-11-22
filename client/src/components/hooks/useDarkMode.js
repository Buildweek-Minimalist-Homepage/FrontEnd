import {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage(false)

    useEffect(() => {
        if(isDarkMode === true) {
            document.body.classList.add('dark-mode')
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?urban,night')";
        }
        else {
            document.body.classList.remove('dark-mode')
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?animals,day')";
        }
    }, [isDarkMode])

    return [isDarkMode, setIsDarkMode]
}

export default useDarkMode;