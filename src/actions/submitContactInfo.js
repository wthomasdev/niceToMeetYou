

const submmitContactInfo = (name, email) => {
    return fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({name, email})
    })
}

export default submmitContactInfo