const getStorageBookApplication = () =>{
    const storedBookApplication = localStorage.getItem('book-applications');

    if(storedBookApplication){
        return JSON.parse(storedBookApplication)
    }
    return [];
}


const saveBookApplication = id =>{
    const storedBookApplications = getStorageBookApplication();
    const exists = storedBookApplications.find(bookId => id === bookId);

    if(!exists){
        storedBookApplications.push(id);
        localStorage.setItem('book-applications', JSON.stringify(storedBookApplications));
    }
}

export {saveBookApplication, getStorageBookApplication}