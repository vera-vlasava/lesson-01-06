const personsArray = JSON.parse(localStorage.getItem('persons'));
export default personsArray || []

export const setPersonsToStorage = persons => localStorage.setItem('persons',JSON.stringify(persons))

export const activePersonId = localStorage.getItem('activePersonId')
export const setActivePersonIdToStorage = id => localStorage.setItem('activePersonId',id)