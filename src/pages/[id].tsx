import getRepo from "../api/getRepo";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
    const [loading, setLoading] = useState(true);
    const [repoData, setRepoData] = useState(null);

    const router = useRouter();
    // const search = useSearchParams();
    // const pathname = usePathname();

    const getFirstPage = useEffect(() => {
        getRepo(router.query.fullname).then((result) => {
            setLoading(false);
            setRepoData(result);
        });
    }, [router]);

    return (
        <div>
            {repoData === null ? (
                <div>Loading</div>
            ) : (
                <div>
                    <Head>
                        <title key="title">{repoData.title}</title>
                        <meta key="metatitle" name="title" content={repoData.title} />
                        <meta key="metadescription" name="description" content={repoData.description} />

                        {/* OG Tags */}
                        <meta key="ogtype" property="og:type" content="article" />
                        <meta key="ogtitle" prefix="og: http://ogp.me/ns#" property="og:title" content={repoData.title} />
                        <meta key="ogdescription" prefix="og: http://ogp.me/ns#" property="og:description" content={repoData.description} />

                        {/* Twitter */}
                        <meta key="twittercard" property="twitter:card" content="summary_large_image" />
                        <meta key="twittertitle" property="twitter:title" content={repoData.title} />
                        <meta key="twitterdescription" property="twitter:description" content={repoData.description} />
                    </Head>
                    <div>
                        {repoData.title}
                        {repoData.description}
                    </div>
                </div>
            )}
        </div>
    );
}
function useQueryParams() {
    throw new Error("Function not implemented.");
}
