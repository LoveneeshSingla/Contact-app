import { ActionTypes } from '../constants/action-types'

export const setContacts1 = (contacts) => {
    return {
        type: ActionTypes.SET_CONTACTS,
        payload: contacts
    }
}

export const selectedContact = (contact) => {
    return {
        type: ActionTypes.SELECTED_CONTACT,
        payload: contact,
    }
}

export const updateContact = (contact) => {
    return {
        type: ActionTypes.UPDATE_CONTACT,
        payload: contact
    }

}




