import { MdOutlineFileDownload } from "react-icons/md";
import '../styles/ExportBtn.css'

export default function ExportBtn() {
    return (
        <button className="export-btn flex-row">
            <MdOutlineFileDownload />  Export PDF
        </button>
    )
}