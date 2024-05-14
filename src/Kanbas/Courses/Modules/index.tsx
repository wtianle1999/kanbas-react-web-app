export default function Modules() {
    return (
        <div>
            {/* Collapse All button, View Progress button, etc. */}
            <button>Collapse All</button>
            <button>View Progress</button>
            <select id="wd-select-one-genre">
                <option selected value="Publish All">Publish All</option>
                <option value="Dummy1">Drama</option>
                <option value="Dummy2">Science Fiction</option>
            </select>
            <button>+ Modules</button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
