function Name(username = 'Mohit Raj Purhohit'){
    // we can also set a default value as 
    // If (username == undefined) {
    // username  = 'Mohit Raj Purohit}
    console.log(`hey there my name is ${username}`)
    console.log('I am the pro coder man')
    return 'Mohit'
    // return username.charAt(0).toUpperCase() + username.slice(1);
}

Name('Mohit')