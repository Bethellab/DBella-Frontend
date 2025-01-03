


import useTransactions from "./useTransactions";
import { motion } from "framer-motion";
import { Table } from "@/components/core/Table/Table";
import { TransactionHeading } from "@/constants/settings";
import { Fragment } from "react/jsx-runtime";



const Transactions = () => {
  const { transactionsData, getStatusClass } = useTransactions();

  const MotionTr = motion.tr;
  return (
    <div className="lg:px-24">
      <div className="flex items-center justify-between">
        <h1 className="text-lg">All Transactions</h1>
        <div>
          <input type="search" placeholder="Search services or date" className="border border-gray-300 py-1 px-2 rounded-full " />
        </div>

      </div>

      <div>
        <div>
          <Table headers={TransactionHeading} data={transactionsData}>
            <>
              {transactionsData
                ? transactionsData?.map((item: any) => (
                  <Fragment>
                    <MotionTr
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="cc-custom-table-data-row"
                      data-testid={item?.id}
                    >
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap font-semibold">{item.ID}</p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">

                          <div>
                            <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">
                              {item.type}
                            </p>
                            <p className="text-gray-600">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap font-semibold">{item.total}</p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">

                        <div className="flex items-center">

                          <div>
                            <p className="text-gray-900 whitespace-no-wrap font-semibold text-md">
                              {item.date}
                            </p>
                            <p className="text-gray-600">
                              {item.time}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">

                          <div>
                            <p className="text-gray-900 whitespace-no-wrap font-semibold text-md">
                              {item.card}
                            </p>
                            <p className="text-gray-600">
                              {item.online}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        className={`px-5 py-5 text-sm border-b border-gray-200 font-semibold }`}
                      >
                        <span className={`${getStatusClass(item.status)}`}>  {item.status}</span>

                      </td>




                    </MotionTr>


                  </Fragment>

                )) : null}

            </>

          </Table>







        </div>

      </div>


    </div>
  )
}

export default Transactions
