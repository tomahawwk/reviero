'use strict';

import {sum, values} from 'lodash';

import {PriceText} from '../ui/PriceText';
import {PropertyDataConditionType} from '@/app/@types/protobuf-types';
import {PurchaseDetailsProps} from './types';
import PurchaseItem from './PurchaseItem';
import React from 'react';
import clsx from 'clsx';
import {useGetEstimatePurchasePriceQuery} from '@/app/store/reducers/calculations/calculations.api';

// const packets = [
//   {
//     name: 'Budget packet',
//     cost: 4000,
//     checked: true,
//   },
//   {
//     name: 'Average packet',
//     cost: 8000,
//   },
//   {
//     name: 'Expensive packet',
//     cost: 20000,
//   },
//   {
//     name: 'By myself',
//     cost: 0,
//   },
// ];

const PurchaseDetails: React.FC<PurchaseDetailsProps> = ({
  className,
  data: item,
  ...rest
}) => {
  const {data} = useGetEstimatePurchasePriceQuery(
    {
      price: item?.data?.price ?? -1,
    },
    {skip: !item},
  );

  //   const [currentPacket, setCurrentPacket] = useState<IPurchasePacket>({
  //     name: 'Budget packet',
  //     cost: 4000,
  //   });

  if (!data) return null;

  const purchaseCosts = sum(
    values(
      data?.purchaseCosts?.[
        item?.data?.conditionType === PropertyDataConditionType.NEW_DEVELOPMENT
          ? 'newDevelopment'
          : 'secondHand'
      ],
    ),
  );

  const preparatoryDocumentsCost = sum(
    values(data?.prePurchaseCosts?.individual),
  );

  return (
    <div
      className={clsx('flex flex-col items-end gap-md', className)}
      {...rest}>
      <div className="grid gap-[8px] w-full">
        <div
          className="shadow-card rounded-md px-sm md:px-md py-sm text-lg md:text-[18px]
        flex justify-between">
          <span className="font-medium">Asking price</span>
          <PriceText className="font-medium" value={data.purchasePrice} />
        </div>
        <PurchaseItem
          title="Another Cost"
          summary={<PriceText value={preparatoryDocumentsCost + purchaseCosts} />}>
          <div className="grid gap-[8px]">
            <div className="flex justify-between text-md rounded-xs px-sm py-xs bg-grey-500">
              <span className="max-sm:text-sm">
                Preparatory documents costs
              </span>
              <PriceText
                className="font-medium"
                value={preparatoryDocumentsCost}
              />
            </div>
            <div className="flex justify-between text-md rounded-xs px-sm py-xs bg-grey-500">
              <span className="max-sm:text-sm">Purchase costs</span>
              <PriceText className="font-medium" value={purchaseCosts} />
            </div>
            <div className="flex justify-between pt-[3px] pl-xs">
              <span className="text-md">Total</span>
              <PriceText
                className="max-sm:text-lg text-[18px] font-medium"
                value={preparatoryDocumentsCost + purchaseCosts}
              />
            </div>
          </div>
        </PurchaseItem>
        {/* <PurchaseItem
          title="Furniture and Appliances"
          summary={`€${currentPacket.cost.toLocaleString('en-US')}`}>
          <div className="grid gap-xs p-sm border border-grey-400 bg-grey-500 rounded-xs">
            {packets.map(item => {
              return (
                <div className="checkbox flex justify-between" key={item.name}>
                  <input
                    type="checkbox"
                    checked={currentPacket.name === item.name}
                    id={item.name}
                    onChange={() => setCurrentPacket(item)}
                  />
                  <label htmlFor={item.name}>
                    <span>{item.name}</span>
                  </label>
                  <span>€{item.cost.toLocaleString('en-US')}</span>
                </div>
              );
            })}
          </div>
        </PurchaseItem> */}
      </div>
      <div className="flex flex-col md:pr-md items-end gap-[5px]">
        <span className="text-sm text-p">Total price:</span>
        <PriceText
          className="text-[32px] leading-none font-medium"
          value={purchaseCosts + preparatoryDocumentsCost + data.purchasePrice}
        />
      </div>
    </div>
  );
};

export default PurchaseDetails;
