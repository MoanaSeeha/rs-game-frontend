import React from "react";

import Filter from "./Filter";
import LandView from "./Land";
import { IProps } from "../../components/Input";

const statuses: IProps[] = [
  { title: 'All', value: -1 },
  { title: 'For Sale', value: 0 },
  { title: 'Not for sale', value: 1 },
  { title: 'For Lease', value: 2 }
]

const classes: IProps[] = [
  { title: 'King', value: 0 },
  { title: 'Not for sale', value: 1 },
  { title: 'For Lease', value: 2 },
  { title: 'King', value: 3 },
  { title: 'Queen', value: 4 },
  { title: 'Witches', value: 5 },
  { title: 'Royal Knights', value: 6 },
  { title: 'Guards', value: 7 },
  { title: 'Stewards', value: 8 },
  { title: 'Servants', value: 9 },
  { title: 'Peasants', value: 10 }
]

interface IAssest {
  name: string,
  id: number,
  class: number,
  status: number,
  price?: number,
  level: number,
  img: string
}

const Assests: IAssest[] = [{
  name: 'Sword',
  id: 0,
  class: 0,
  status: 1,
  price: 20000,
  level: 1,
  img: 'land-1.png',
}, {
  name: 'Sword',
  id: 1,
  class: 0,
  status: 1,
  price: 10000,
  level: 1,
  img: 'land-2.png',
}, {
  name: 'Sword',
  id: 2,
  class: 1,
  status: 1,
  level: 1,
  img: 'land-3.png',
}, {
  name: 'Sword',
  id: 3,
  class: 2,
  status: 0,
  price: 330000,
  level: 1,
  img: 'land-4.png',
}, {
  name: 'Sword',
  id: 4,
  class: 3,
  status: 1,
  price: 20000,
  level: 1,
  img: 'land-5.png',
}, {
  name: 'Sword',
  id: 5,
  class: 4,
  status: 1,
  price: 20000,
  level: 1,
  img: 'land-1.png',
}, {
  name: 'Sword',
  id: 6,
  class: 0,
  status: 2,
  level: 1,
  img: 'land-2.png',
}]

// interface IFilter {
//   assetId: string;
//   selectedClasses: number[];
//   selectedStatuses: number[];
// }

const LandAuction = () => {

  // const [filter, setFilter] = React.useState<IFilter>({
  //   assetId: '',
  //   selectedClasses: [],
  //   selectedStatuses: []
  // });

  return (
    <div className="land-auction overlay row ">
      <Filter classes={classes} statuses={statuses} />
      <LandView />
    </div>
  )
}

export default LandAuction;