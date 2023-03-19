import React, { useState } from "react";
import vmsg from "vmsg";

const recorder = new vmsg.Recorder({
  wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm",
});

const RecorderComponent = () => {
  const [value, setValue] = useState({
    isLoading: false,
    isRecording: false,
    recordings: [],
  });
  const newRecordings = value.recordings;
  const fooditems =newRecordings.map((element)=>{
    return (
      <li key={element}>
        <audio controls>
          <source src={element} />
        </audio>
      </li>
    );
  });
  const record = async () => {
    setValue({ isLoading: true });
    if (value.isRecording) {
      const blob = await recorder.stopRecording();
      setValue({
        isRecording: false,
        isLoading: false,
        recordings: value.recordings.concat(URL.createObjectURL(blob)),
      });
    } else {
      try {
        await recorder.initAudio();
        await recorder.initWorker();
        recorder.startRecording();
        setValue({
          isLoading: false,
          isRecording: true,
        });
      } catch (e) {
        console.error(e);
        setValue({ isLoading: false });
      }
    }
  };
  return (
    <>
      <div>
        <button onClick={record} disabled={value.isLoading}>
          {value.isRecording ? "Stop" : "Record"}
        </button>
        {/* style={{listStyle:'none',padding:0}} */}
        <ul>
          {/* {value.recordings.map((url) => (
            <li key={url}>
              <audio controls>
                <source src={url} />
              </audio>
            </li>
          ))} */}
          {fooditems}
        </ul>
      </div>
    </>
  );
};

export default RecorderComponent;
