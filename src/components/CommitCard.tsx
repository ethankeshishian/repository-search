export default function CommitCard({ message, commit, author, date }: any) {
    return (
        <div className="commit-details-container">
            <div className="commit-details-message">{message}</div>
            <div className="commit-details-commit">Commit ID: {commit}</div>
            <div className="commit-details-author">Authored by {author}</div>
            <div className="commit-details-date">
                Created{" "}
                {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </div>
        </div>
    );
}
