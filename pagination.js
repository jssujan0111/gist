const generatePagination = (page,limit,totalItems) =>{
	const totalPage = Math.ceil(totalItems / limit);
    const pagination = {
        page,
        limit,
        totalItems,
        totalPage,
    };

    if (page < totalPage) {
        pagination.next = page + 1;
    }

    if (page > 1) {
        pagination.prev = page - 1;
    }
    return pagination;
}

module.exports = generatePagination;