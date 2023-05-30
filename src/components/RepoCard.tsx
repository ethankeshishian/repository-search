import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RepoCard({ fullname, name, language, description, stars, forks, created }: any) {
    const router = useRouter();

    const handleClick = (e: any) => {
        e.preventDefault();
        router.push(`/${name}?fullname=${fullname}`);
    };

    return (
        <div className="card-container">
            <Link href={name} onClick={handleClick}>
                <div className="name-details-container">
                    <div className="repo-card-name">{name}</div>
                    <div className="star-fork-container">
                        <div>{stars}</div> | <div>{forks}</div>
                    </div>
                </div>
                <div className="repo-card-description">{description}</div>
                {language && <div className="repo-card-language">Written in {language}</div>}
                {created && (
                    <div className="repo-card-date">
                        Created{" "}
                        {new Date(created).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </div>
                )}
            </Link>
        </div>
    );
}
