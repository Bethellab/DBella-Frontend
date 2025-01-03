import useOverview from "./useOverview";
import { motion } from "framer-motion";
import { Table } from "@/components/core/Table/Table";
import { RecentTransactionHeading } from "@/constants/settings";
import { Fragment } from "react/jsx-runtime";

const RecentTransaction = () => {
  const { transactionsData, getStatusClass } = useOverview();

  const MotionTr = motion.tr;

  return (
    <div className="border p-4 rounded-lg mt-6 overflow-hidden">
      <div className="flex items-center justify-between border-b py-2">
        <h1 className="text-lg font-semibold">Recent Transactions</h1>
      </div>
      <div className="h-[600px] overflow-x-auto w-full">
        <Table headers={RecentTransactionHeading} data={transactionsData}>
          <>
            {transactionsData &&
              transactionsData.map((item: any) => (
                <Fragment key={item?.id}>
                  <MotionTr
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="cc-custom-table-data-row"
                  >
                    {/* Transaction Type */}
                    <td className="px-3 py-4 text-sm bg-white border-b border-gray-200">
                      <div className="flex items-start">
                        <div className="flex flex-col">
                          <p className="text-gray-900 truncate whitespace-nowrap font-semibold text-base">
                            {item.type}
                          </p>
                          <p className="text-gray-600 truncate whitespace-nowrap">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Total */}
                    <td className="px-3 py-4 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 font-semibold truncate whitespace-nowrap">
                        {item.total}
                      </p>
                    </td>

                    {/* Payment Method */}
                    <td className="px-3 py-4 text-sm bg-white border-b border-gray-200">
                      <div className="flex items-start">
                        <div className="flex flex-col">
                          <p className="text-gray-900 font-semibold text-base truncate whitespace-nowrap">
                            {item.card}
                          </p>
                          <p className="text-gray-600 truncate whitespace-nowrap">
                            {item.online}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-3 py-4 text-sm bg-white border-b border-gray-200 font-semibold">
                      <span className={`${getStatusClass(item.status)} truncate`}>
                        {item.status}
                      </span>
                    </td>
                  </MotionTr>
                </Fragment>
              ))}
          </>
        </Table>
      </div>
    </div>
  );
};

export default RecentTransaction;
