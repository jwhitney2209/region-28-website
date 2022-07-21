import React from "react";
import AnimatePage from "../components/AnimatePage";
import HSDirectoryList from '../components/DirectoryList/HSDirectoryList';
import MSDirectoryList from '../components/DirectoryList/MSDirectoryList';
import { useCollection } from '../hooks/useCollection'

export default function Directory() {
  const { documents: directors } = useCollection('directors')
  const { documents: directorsMS } = useCollection('directors_ms')
  return (
    <AnimatePage>
    <div>
      <div className="m-4 notification has-text-centered">
        Schools are in Alphabetical Order <br />
        Click to expand directories
      </div>
      {directors && <HSDirectoryList directors={directors} />}
      {directorsMS && <MSDirectoryList directorsMS={directorsMS} />}
    </div>
    </AnimatePage>

  );
};

