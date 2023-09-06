import {FC, useState} from 'react';
import PurchaseItem from './PurchaseItem';
import {IPurchasePacket} from './types';

const packets = [
  {
    name: 'Budget packet',
    cost: 4000,
    checked: true,
  },
  {
    name: 'Average packet',
    cost: 8000,
  },
  {
    name: 'Expensive packet',
    cost: 20000,
  },
  {
    name: 'By myself',
    cost: 0,
  },
];

const askingPrice = 168400;
const anotherCost = 67110;

const PurchaseDetails: FC = () => {
  const [currentPacket, setCurrentPacket] = useState<IPurchasePacket>({
    name: 'Budget packet',
    cost: 4000,
  });
  
  return (
    <div className="flex flex-col items-end gap-md">
      <div className="grid gap-[8px] w-full">
        <div className="shadow-card rounded-md px-sm md:px-md py-sm text-lg md:text-[18px]
        flex justify-between">
          <span className="font-medium">Asking price</span>
          <b className="font-medium">€{askingPrice.toLocaleString('en-US')}</b>
        </div>
        <PurchaseItem title="Another Cost" summary={`€${anotherCost.toLocaleString('en-US')}`}>
          <div className="grid gap-[8px]">
            <div className="flex justify-between text-md rounded-xs px-sm py-xs bg-grey-500">
              <span className="max-sm:text-sm">Preparatory documents costs</span>
              <span className="font-medium">€610</span>
            </div>
            <div className="flex justify-between text-md rounded-xs px-sm py-xs bg-grey-500">
              <span className="max-sm:text-sm">Purchase costs</span>
              <span className="font-medium">€610</span>
            </div>
            <div className="flex justify-between pt-[3px] pl-xs">
              <span className="text-md">Total</span>
              <b className="max-sm:text-lg text-[18px] font-medium">
                €{anotherCost.toLocaleString('en-US')}
              </b>
            </div>
          </div>
        </PurchaseItem>
        <PurchaseItem title="Furniture and Appliances" summary={`€${currentPacket.cost.toLocaleString('en-US')}`}>
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
        </PurchaseItem>
      </div>
      <div className="flex flex-col md:pr-md items-end gap-[5px]">
        <span className="text-sm text-p">Total price:</span>
        <b className="text-[32px] leading-none font-medium">
          €
          {(askingPrice + anotherCost + currentPacket.cost).toLocaleString(
            'en-US',
          )}
        </b>
      </div>
    </div>
  );
};

export default PurchaseDetails;
