export const fetchPokemons = async () => {
  const response = await fetch('https://graphql.pokeapi.co/v1beta2/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      accept: '*/*'
    },
    body: JSON.stringify({
      query: `
                query teste {
                    pokemon(limit: 151) {
                        id
                        name
                    }
                }
            `,
      variables: null,
      operationName: 'getItems'
    })
  })
  const result = await response.json()
  return result.data
}
