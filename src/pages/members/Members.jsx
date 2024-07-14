import React, { useState } from "react";
import AllMembers from "./AllMembers";
import MemberProfile from "./MemberProfile";
import MemberFullTransaction from "./MemberFullTransaction";

const Members = () => {
  const [showComp, setShowComp] = useState("members");

  return (
    <>
      {showComp === "members" && <AllMembers setShowComp={setShowComp} />}
      {showComp === "profile" && <MemberProfile setShowComp={setShowComp} />}
      {showComp === "all" && (
        <MemberFullTransaction setShowComp={setShowComp} />
      )}
    </>
  );
};

export default Members;
