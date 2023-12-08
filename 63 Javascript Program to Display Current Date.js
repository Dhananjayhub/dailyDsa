function displayCurrentDate() {
    const today = new Date();
    const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    console.log(date);
}

displayCurrentDate();
