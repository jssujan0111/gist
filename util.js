
const linkGenerator = (serviceName,service={})=>{
    return `/${serviceName}/${service.id}`
}
const generateQueryString = (query) => {
	return Object.keys(query)
		.map(
			(key) => encodeURIComponent(key) + '=' + encodeURIComponent(query[key])
		)
		.join('&');
};

module.exports = {
    linkGenerator,generateQueryString
}