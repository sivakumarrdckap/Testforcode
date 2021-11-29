import React, { useState} from "react";
import axios from "axios";
import { VscLoading } from "react-icons/vsc";

export default function DocUpload({
        setUploadFile,
        uploadFile,
        uploadErrorMsg,
        setUploadErrorMsg
    }) 
{
    const documentReciver = (e) => {
        setUploadFile(e.target.files[0]);
        setUploadErrorMsg("")
    };
    return (
        <div className="verification-level-1">
             <p>
                Unfortunately, Element Vape was unable to verify your age using
                the information provided. You must be of legal smoking age (21
                and over in the U.S.) to purchase.
            </p>
            <p>
                To increase your chances of being verified, please upload
                documents to verify your age and try again:
            </p>
            <div className="upload_documents_verification">
                <input className="ref_docs" onChange={(e) => documentReciver(e)} type="file"  accept="image/*,.pdf" name="Doc Upload" id="Doc" />
                <label htmlFor="Doc" className={`upload_document_input ${uploadFile ? "file_recived" : ""}`}>{uploadFile ? uploadFile.name : "Browse the file..."}</label>
            </div>
            {uploadErrorMsg&&<p className="error-msg-upload">{uploadErrorMsg}</p>}
        </div>
    );
}
