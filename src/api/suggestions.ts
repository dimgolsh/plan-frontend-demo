import axios from 'axios'

const DEFAULT_URL =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/'

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: process.env.DDATA_TOKEN,
}

interface Suggestions {
  suggestions: []
}

const getAdress = async (query: string) => {
  const data = await axios
    .post<Suggestions>(
      `${DEFAULT_URL}address`,
      {
        query,
        locations: [{ kladr_id: 31 }],
      },
      {
        headers,
      }
    )
    .then((res) => res.data.suggestions)

  return data
}

const getOrganizations = async (query: string) => {
  const data = await axios
    .post<Suggestions>(
      `${DEFAULT_URL}party`,
      {
        query,
        locations: [{ kladr_id: 31 }],
      },
      {
        headers,
      }
    )
    .then((res) => res.data.suggestions)

  return data
}

export { getAdress, getOrganizations }
