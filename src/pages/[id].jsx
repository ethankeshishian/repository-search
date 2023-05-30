import getRepo from "../api/getRepo";
import getRepoCommits from "../api/getRepoCommits";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
    const [loading, setLoading] = useState(true);
    const [repoData, setRepoData] = useState(null);
    const [repoCommits, setRepoCommits] = useState(null);

    const router = useRouter();
    // const search = useSearchParams();
    // const pathname = usePathname();

    const getFirstPage = useEffect(() => {
        getRepo(router.query.fullname).then((result) => {
            setLoading(false);
            setRepoData(result);
        });
        getRepoCommits(router.query.fullname).then((result) => {
            setLoading(false);
            setRepoCommits(result);
            console.log(repoCommits);
        });
    }, [router]);

    return (
        <div>
            {repoData === null || repoCommits === null ? (
                <div>Loading</div>
            ) : (
                <div>
                    <Head>
                        <title key="title">{repoData.name}</title>
                        <meta key="metatitle" name="title" content={repoData.name} />
                        <meta key="metadescription" name="description" content={repoData.description} />

                        {/* OG Tags */}
                        <meta key="ogtype" property="og:type" content="article" />
                        <meta key="ogtitle" prefix="og: http://ogp.me/ns#" property="og:title" content={repoData.name} />
                        <meta key="ogdescription" prefix="og: http://ogp.me/ns#" property="og:description" content={repoData.description} />

                        {/* Twitter */}
                        <meta key="twittercard" property="twitter:card" content="summary_large_image" />
                        <meta key="twittertitle" property="twitter:title" content={repoData.name} />
                        <meta key="twitterdescription" property="twitter:description" content={repoData.description} />
                    </Head>
                    <div>
                        {repoData.name}
                        {repoData.description}
                        {/* {repoCommits.map((item) => (
                            <div key={item.sha}>
                                <div>{item.sha}</div>
                                <div>{item.commit.author}</div>
                                <div>{item.commit.message}</div>
                                <div>Created {item.sha}</div>
                            </div>
                        ))} */}
                    </div>
                </div>
            )}
        </div>
    );
}
