export const isPasswordValid = async (password: String) => {
    const requestPath = "http://192.168.0.14:8080/password"
    
    const response = await fetch(requestPath, 
      {method: 'POST', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        password:password
      })
      })
    return response.text()
}