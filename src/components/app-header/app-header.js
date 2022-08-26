
import './app-header.css';
export default function Header({liked,allCount}) {
    return (
        <div className="app-header d-flex">
            <h1>React project</h1>
            <h2> {allCount} records of them liked {liked}</h2>
        </div>
    )
}