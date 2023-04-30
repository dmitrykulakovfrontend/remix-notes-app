import React from "react";

function newNote({}) {
  const today = new Date();

  return (
    <>
      <div className="flex flex-col h-full gap-4">
        <input
          className="text-3xl font-bold bg-transparent outline-none"
          type="text"
          placeholder="Your title"
        />
        <time dateTime={today.toISOString().slice(0, -8)}>
          {today.toUTCString().slice(0, -7)}
        </time>
        <input
          className="text-2xl bg-transparent outline-none"
          type="text"
          placeholder="Your note content"
        />
      </div>
    </>
  );
}

export default newNote;
