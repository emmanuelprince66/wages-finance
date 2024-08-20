export const allMembersUrl = (
  currentPage,
  rowsPerPage,
  filterValue,
  searchValue
) => {
  return `/admin/users/?page=${currentPage}&limit=${rowsPerPage}&status=${filterValue}&search=${searchValue}`;
};

export const overveiwUrl = (selectedDates) => {
  return `/admin/overview/?start_date=${selectedDates?.startDate}&end_date=${selectedDates?.endDate}`;
};

export const corporativeDataUrl = () => {
  return `/admin/coporative_stats/`;
};
export const corporativeMembersUrl = (searchValue) => {
  return `/admin/active_coporative_members/?search=${searchValue}`;
};
export const targetSavingsUrl = () => {
  return "/admin/savings_stats";
};
export const membersProfileUrl = (memberId) => {
  return `/admin/user/${memberId}`;
};
export const investmentListDataUrl = (filterValue) => {
  return `/admin/investment_stats/?status=${filterValue}`;
};
export const loanStatisticsDataUrl = () => {
  return "/admin/loan_dashboard/";
};
export const loanRequestsDataUrl = (
  currentPage,
  rowsPerPage,
  searchValue,
  filterValue
) => {
  return `/admin/loan_overview/?page=${currentPage}&limit=${rowsPerPage}&search=${searchValue}&status=${filterValue}`;
};
export const transactionsDataUrl = (currentPage, rowsPerPage, searchValue) => {
  return `/admin/transactions/?page=${currentPage}&limit=${rowsPerPage}&search=${searchValue}`;
};
export const administratorDataUrl = () => {
  return "/admin/team/";
};
export const referralDataUrl = (
  searchValue,
  currentPage,
  rowsPerPage,
  selectedDates
) => {
  return `/admin/referals?searchValue=${searchValue}&page=${currentPage}&limit=${rowsPerPage}&start_date=${selectedDates?.startDate}&end_date=${selectedDates?.endDate}`;
};
export const corporativeBreakdownUrl =  (id, selectedDates) => {
  return `/admin/user/coop_breakdown/${id}?start_date=${selectedDates?.startDate}&end_date=${selectedDates?.endDate}`;
};
export const savingsBreakdownUrl =  (id, selectedDates) => {
  return `/admin/user/savings/${id}?start_date=${selectedDates?.startDate}&end_date=${selectedDates?.endDate}`;
};
export const activeInvestmentsUrl =  (id) => {
  return `/admin/user/active_investment/${id}`;
};
export const investmentsHistoryUrl =  (id) => {
  return `/admin/user/active_investment/${id}`;
};

