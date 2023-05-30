"use client";

import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import Search from "./Search";
import getRepos from "@/api/getRepos";

export default function RepoSearch() {
    const default_params = {
        q: "Netflix",
        sort: "stars",
        order: "desc",
    };
    const [loading, setLoading] = useState(true);
    const [repoData, setRepoData] = useState(null);

    const getFirstPage = useEffect(() => {
        getRepos(default_params).then((result) => {
            setLoading(false);
            setRepoData(result);
        });
    }, []);

    return (
        <div>
            {repoData === null ? (
                <div>Loading</div>
            ) : (
                <div>
                    {/* <Search /> */}
                    <div className="cards-container">
                        {repoData.items?.map((repo) => (
                            <RepoCard
                                key={repo.id}
                                name={repo.name}
                                language={repo.language}
                                description={repo.description}
                                stars={repo.stargazers_count}
                                forks={repo.forks_count}
                                created={repo.created_at}
                                fullname={repo.full_name}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
