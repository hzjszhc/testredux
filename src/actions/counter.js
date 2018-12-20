const increment1 = ()=> {
    return {
        type: 'INCREMENT_COUNTER',
    }
};
const decrement1 = ()=> {
    return {type: 'DECREMENT_COUNTER'}
};

module.exports = {
    increment1,
    decrement1
};
