const examples = [
    require('./files/Echo.blocks.json'),
    require('./files/Counter.blocks.json'),
    require('./files/Calculator.blocks.json'),
    // require('./files/WhoAmI.blocks.json'),
    require('./files/PhoneBook.blocks.json'),
    require('./files/ToDoList.blocks.json'),
    require('./files/SimpleCurrency.blocks.json'),
    require('./files/TextSharingApi.blocks.json'),
];

module.exports = {
    getExampleProjects() {
        return examples;
    },
};