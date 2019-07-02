import { useState } from 'react';
import { Ajax } from 'services';

function useLogin() {
    const [username, setRawUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remembers, setRemembers] = useState(true);
    const login = () => {
        console.log('Username: ' + username)
        console.log('Password: ' + password)
        console.log('Remembers: ' + remembers)


        //Example request
        // Ajax.get('r/pics/search.json', {
        //     restrict_sr: 'on',
        //     limit: 1,
        //     sort: 'new',
        //     q: 'cat'
        // })

    }

    const setUsername = (text) => {
        setRawUsername(text.trim())
    }

    return { username, setUsername, password, setPassword, remembers, setRemembers, login };
}

export default useLogin