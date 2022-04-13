export default function validate(values) {
    let errors = {};

    //first name
    if (!(values.firstName === undefined) && !values.firstName.trim()) {
        errors.firstName = 'firstname required';
    }

    //last
    if (!(values.lastName === undefined) && !values.lastName.trim()) {
        errors.lastName = 'lastname required';
    }

    //email
    if (!(values.email === undefined) && !values.email) {
        errors.email = 'Email required'
    }

    //pass

    if (!(values.email === undefined)) {
        if (!values.password) {
            errors.password = 'Password required'
        } else if (values.password.length < 5) {
            errors.password = 'Password do not match '
        }
    }

    return errors
}