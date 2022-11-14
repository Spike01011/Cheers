const link = "https://localhost:7021/";

const ana = async () => {
	return await fetch(link);
};

console.log(await ana());
