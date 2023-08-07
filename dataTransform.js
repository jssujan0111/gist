const {linkGenerator} = require("./util");

const dataTransform = (serviceName=[]) => {
    const data = serviceName.map((service) => ({
        ...service._doc,
        link: linkGenerator(serviceName,service),
    }));

    return data;
};

module.exports = dataTransform;