export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br />
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br /><br />
            <textarea id="wd-description">
                The assignment is available online
                Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                    <br /><br /></tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="DUMMY2">DUMMY2</option>
                        </select>
                    </td>
                    <br /><br />
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Points</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="Percentage">Percentage</option>
                            <option value="DUMMY2">DUMMY2</option>
                        </select>
                    </td>
                    <br /><br />
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Points</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="Online">Online</option>
                            <option value="DUMMY2">DUMMY2</option>
                        </select>
                    </td>
                    <br /><br />
                </tr>
                <tr>
                    <td></td>
                    <label>Online Entry Options</label><br />

                    <input type="checkbox" name="check-entry" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry">Text Entry</label><br />

                    <input type="checkbox" name="check-entry" id="wd-website-url" />
                    <label htmlFor="wd-website-url">Website URL</label><br />

                    <input type="checkbox" name="check-entry" id="wd-media-recordings" />
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                    <input type="checkbox" name="check-entry" id="wd-student-annotation" />
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                    <input type="checkbox" name="check-entry" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload">File Uploads</label>
                    <br /><br />
                </tr>
                <tr>
                    <td></td>
                    <label htmlFor="wd-assign-to">Assign Assign to</label><br />
                    <input type="text" id="wd-assign-to" value="Everyone" />
                    <br /><br />
                </tr>
                <tr>
                    <td></td>
                    <label htmlFor="wd-due-date">Due</label><br />
                    <input type="date" id="wd-due-date" value="2024-05-13" />
                    <br /><br />
                </tr>
                <tr>
                    <td></td>
                    <label htmlFor="wd-available-from">Available from     </label>
                    <label htmlFor="wd-available-until">Until</label><br />
                    <input type="date" id="wd-available-from" value="2024-05-06" />
                    <input type="date" id="wd-available-until" value="2024-05-20" /><br />
                    <br /><br />
                </tr>
                <tr>
                    <td></td>
                    <button >cancel</button>
                    <button>save</button>
                </tr>
            </table>
        </div>
    );
}
