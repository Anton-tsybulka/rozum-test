const birthChange = (str) => str.split('-').reverse().join('.');

const lastNameSort = (arr) => {
    const lastnameSort = [];
    const newArr = [];
    arr.forEach(({lastName})=> {
        lastnameSort.push(lastName);
    });
    lastnameSort.sort()
    lastnameSort.forEach(item => {
        newArr.push(arr.find(({lastName})=> lastName === item));
    });
    return newArr;
}

export {
    birthChange,
    lastNameSort
};