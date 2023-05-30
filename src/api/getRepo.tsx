export default async function getRepo(fullname: string) {
    const query = `https://api.github.com/repos/${fullname}`;
    console.log(query);
    try {
        const ret = await fetch(query);
        const json = await ret.json();
        return json;
    } catch (err) {
        // console.log(err);
    }
}
