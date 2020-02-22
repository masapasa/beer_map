const tokenn = "pk.eyJ1IjoibWFzYXBhc2EiLCJhIjoiY2s2eGl6MThyMDV1MTNscGlycnE2MmZyYSJ9.06cdq_Q8od2PWwhgajWI7A"
console.log(tokenn)

const buildQuery = (query, token=tokenn , country = undefined) => {
  const base_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
  const no_country = `${base_url}${query}.json?access_token=${token}`
  const with_country = `${base_url}${query}.json?country=${country}&access_token=${token}`
  return country ? with_country : no_country
}

const getResults = async function (query, token=tokenn, country = undefined) {
  if (query === '') {
    return {
      response: {
        features: []
      }
    }
  }

  try {
    const path = buildQuery(query, token=tokenn, country)
    // Mapbox API returns an object which comes
    // with a .json() method which asynchronously
    // executes the query
    const testPath = await fetch(path, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // Handle error if response is bad
    if (!testPath.ok) throw Error(testPath.statusText)

    // Execute query
    const queryResults = await testPath.json()
    return {
      response: queryResults
    }
  } catch (error) {
    return { error }
  }
}

export { getResults }
