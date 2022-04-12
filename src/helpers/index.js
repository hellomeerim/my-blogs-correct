export const getCurrentDate = () => {
    ///yyyy-mm-dd-hh
    const date = new Date();
    const currentDate = date.getFullYear() + '-' + (date.getMonth()+1) + "-" + date.getDate();
    console.log(currentDate);

    const currentTime = date.getHours() + ":" + date.getMinutes();
    console.log(currentTime);
}

