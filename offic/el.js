var fields = _.map(acfFields, function(field) {
    return {
        name: field.name,
        value: field.value
    };
});

console.log(fields);
