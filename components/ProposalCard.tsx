import Link from "next/link"

const ProposalCard = () => {
    return (
        <div className="proposal-card">
            <div className="content-container">
                <h2 className="content-title">A unified solution designed for every businesses to grow and scale</h2>
                <Link href="#" className="btn card-btn">Get Proposal</Link>
            </div>
        </div>
    )
}

export default ProposalCard