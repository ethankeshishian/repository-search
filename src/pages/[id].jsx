import "../app/globals.css";

import getRepo from "../api/getRepo";
import getRepoCommits from "../api/getRepoCommits";
import CommitCard from "@/components/CommitCard";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
    const [repoData, setRepoData] = useState(null);
    const [repoCommits, setRepoCommits] = useState(null);

    const router = useRouter();
    // const search = useSearchParams();
    // const pathname = usePathname();

    const getFirstPage = useEffect(() => {
        if (repoData === null && router.query.fullname !== undefined)
            getRepo(router.query.fullname).then((result) => {
                setRepoData(result);
            });
        if (repoCommits === null && router.query.fullname !== undefined)
            getRepoCommits(router.query.fullname).then((result) => {
                setRepoCommits(result);
                console.log(typeof result);
                console.log(result);
            });
    }, [router]);

    return (
        <div className="page-container">
            <h1>Commits</h1>
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
                    <div className="commits-container">
                        {repoCommits.map((item) => (
                            <CommitCard
                                key={item.sha}
                                message={item.commit.message}
                                commit={item.sha}
                                author={item.commit.author.name}
                                date={item.commit.author.date}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
