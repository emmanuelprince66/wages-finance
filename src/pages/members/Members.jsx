import React, { useState } from "react";
import AllMembers from "./AllMembers";
import MemberProfile from "./MemberProfile";
import MemberFullTransaction from "./MemberFullTransaction";
import { AuthAxios } from "../../helpers/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "../../utils/cookieAuth";

const Members = () => {
  const [showComp, setShowComp] = useState("members");
  const [memberId, setMemberId] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterValue, setFilterValue] = useState("");

  const token = getCookie("authToken");

  const apiUrl = `/admin/users/?page=${currentPage}&limit=${rowsPerPage}&status=${filterValue}`;

  const fetchMembers = async (url) => {
    try {
      const response = await AuthAxios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch customer data");
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchMembers", apiUrl],
    queryFn: () => fetchMembers(apiUrl),
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });

  const totalPages = data?.pages;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1 when limit changes
  };

  return (
    <>
      {showComp === "members" && (
        <AllMembers
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          setShowComp={setShowComp}
          setFilterValue={setFilterValue}
          setMemberId={setMemberId}
          filterValue={filterValue}
          totalPages={totalPages}
          data={data || []}
        />
      )}
      {showComp === "profile" && (
        <MemberProfile memberId={memberId} setShowComp={setShowComp} />
      )}
      {showComp === "all" && (
        <MemberFullTransaction setShowComp={setShowComp} />
      )}
    </>
  );
};

export default Members;
