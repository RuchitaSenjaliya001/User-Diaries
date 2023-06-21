import React from "react";
import { useDropzone } from "react-dropzone";

export default function Drop() {
    const { acceptedFiles, getInputProps, getRootProps } = useDropzone();

    const files = acceptedFiles.map((file) => (
        <li key={file.path} className="list-disc">
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section className="container max-w-5xl m-auto my-5">
            <div
                {...getRootProps({ className: "dropzone" })}
                className="py-10 bg-gray-200 text-center text-gray-500 rounded-md"
            >
                <input {...getInputProps()} />
                <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
            </div>
            <aside className="my-4">
                <h4 className="text-center font-semibold text-xl">Files</h4>
                <ul className="ml-10">{files}</ul>
            </aside>
        </section>
    );
}
