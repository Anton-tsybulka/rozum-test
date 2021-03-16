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
};

const careImpaired  = (arr, id) => {
    const impairedAdd = arr.map((item, ind, arr) => ({
      ...item, 
      from: Date.parse(item.from), 
      to: Date.parse(item.to), 
      impaired: arr.filter(({employee_id}) => item.employee_id !== employee_id)
        .filter(({from, to}) => from <= item.to && item.to <= to).length
      })
    );

    const item = impairedAdd.find((item) => item.id === id)


    return item.impaired < 3 ? {textDecoration: 'red wavy underline'} : null;
};

export {
    birthChange,
    lastNameSort,
    careImpaired
};