import React, { useState, useEffect } from "react";
import { Web3Storage } from "web3.storage";

const upload = () => {
  const client = new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5OGM0MzkzRDk3NzFhZTVlOEZGNTIwODlGMTYwMjQwN0VFNjNDZGIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDgxNTQxMjc5MTMsIm5hbWUiOiJUb2tlbiJ9.aITjRenUZ57Qda2dF8ZWDq19_jxDhSynN7-maK3ez-Y",
  });
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [cids, setCids] = useState("");
  useEffect(async () => {
    setCids("");
    if (selectedFiles != null) {
      const rootCid = await client.put(selectedFiles, {
        name: "any name",
        maxRetries: 3,
      });

      const res = await client.get(rootCid);
      const files = await res.files();

      files.forEach((file) => {
        setCids(file.cid + " ");
      });
    }
  }, [selectedFiles]);

  return (
    <>
      <form>
        <input type="file" onChange={(e) => setSelectedFiles(e.target.files)} />
      </form>

      <p>Uploaded Files CID: </p>
      <span>{cids}</span>
    </>
  );
};

export default upload;
