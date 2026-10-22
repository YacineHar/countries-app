const API_URL = 'https://countries.dev'

export async function getAllCountries() {
  const response = await fetch(`${API_URL}/countries`)

  if (!response.ok) {
    throw new Error('Erreur lors du chargement des pays')
  }

  return response.json()
}

export async function getCountriesByRegion(region) {
  const response = await fetch(`${API_URL}/region/${region}`)

  if (!response.ok) {
    throw new Error('Erreur lors du chargement de la région')
  }

  return response.json()
}

export async function getCountriesByName(name) {
  const response = await fetch(`${API_URL}/name/${name}`)

  if (response.status === 404) {
    return []
  }

  if (!response.ok) {
    throw new Error('Erreur lors de la recherche')
  }

  return response.json()
}

export async function getCountryByCode(code) {
  const response = await fetch(`${API_URL}/alpha/${code}`)

  if (!response.ok) {
    throw new Error('Pays introuvable')
  }

  return response.json()
}
