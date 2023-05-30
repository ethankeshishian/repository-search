export default async function getRepos(params: any) {
    const baseURL = `https://api.github.com/search/repositories?`;
    try {
        const keyValuePairs = [];
        for (const key in params) {
            keyValuePairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
        }
        const second = keyValuePairs.join("&");
        const query = baseURL + second;
        const ret = await fetch(query);
        const json = await ret.json();
        return json;
    } catch (err) {
        // console.log(err);
    }
}
