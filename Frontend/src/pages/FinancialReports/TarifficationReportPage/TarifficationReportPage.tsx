import React from "react";
import {TarifficationTable} from "./view/TarifficationTable";
import {useSelector} from "react-redux";
import {TarifficationReportPageData} from "./model/types";

const TarifficationReportPage = () => {
  const data = useSelector((
    state: {
      tarifficationReportPageStore: TarifficationReportPageData,
    }
  ) => state.tarifficationReportPageStore);

  return (
    <>
      <TarifficationTable
        title={"Тарификация"}
        data={data.main}
      />
      <TarifficationTable
        title={"Тарификация внеурочная (спецкурс)"}
        data={data.course}
      />
    </>
  );
};

export default TarifficationReportPage;
