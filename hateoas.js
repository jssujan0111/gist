const {generateQueryString} = require("./util")

const generateHateoas = (url,query,path,page,pagination) => {
    const links = {
        self: url,
    };

    if (pagination.next) {
        const queryStr = generateQueryString({ ...query, page: page + 1 });
        links.next = `${path}?${queryStr}`;
    }
    if (pagination.prev) {
        const queryStr = generateQueryString({ ...query, page: page - 1 });
        links.prev = `${path}?${queryStr}`;
    }
    return links;
}
module.exports = generateHateoas;