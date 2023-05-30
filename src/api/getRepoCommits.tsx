export default async function getRepoCommits(fullname: string) {
    const query = `https://api.github.com/repos/${fullname}/commits`;
    console.log(query);
    try {
        const ret = await fetch(query);
        const json = await ret.json();
        return json;
    } catch (err) {
        // console.log(err);
    }
}
