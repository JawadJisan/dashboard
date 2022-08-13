import React, { useState } from 'react';
import './Ecommerce.css'
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar4 from '../data/avatar4.jpg'

import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { FcInfo } from 'react-icons/fc';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData, recentActivity } from '../data/dummy';
import { useStateContext } from '../contexts/ContexProvider';
import product9 from '../data/product9.jpg';
import useAllData from '../contexts/useAllData';
import { Area, PieChart, Pie, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  const [allData, setAllData] = useAllData();
  const sampleData = allData.slice(0, 10)
  console.log(sampleData[0])

  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ];
  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Completed",
      "value": 2400
    },
    {
      "name": "Pending",
      "value": 4567
    },
    {
      "name": "Cancel",
      "value": 1398
    }
  ];

  return (
    <div className="mt-24 overflow-auto md:overflow-scroll parentDiv pb-32">
      <div>

        <div className=" newDiv m-3  justify-between gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg  flex  p-4  rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl mr-3 opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <p className="text-sm text-black text-2xl font-extrabold mt-1">{item.title}</p>
                <span className="text-xl font-semibold">{item.amount}</span>
              </p>
              <span className={`text-sm ml-8 text-${item.pcColor} ml-2 align-bottom`}>
                {item.percentage}
              </span>
            </div>
          ))}
        </div>

        <div className="div2 m-3 bg-white justify-center justify-between gap-1 items-center dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl   ">
          {/* <div className=" border-r-1 border-color m-4 pr-10"> */}
          <div className=" p-4 rounded-3xl border-r-1 border-color">
            <div>
              <h1 className='text-xl font-semibold'>Overview</h1>
              <p>
                <p className='text-gray-600 font-bold text-xl mt-3 mb-2'>This Month</p>
                <span className="text-2xl font-semibold">$24,568</span>
                <span className="p-1.5 ml-14 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                  +2.65%
                </span>
              </p>
            </div>

            <div className="mt-8 overview ">
              <div className='m-3  p-1 mr-12'>
                <p className="text-gray-500 mt-1 text-xl font-bold">Orders</p>
                <p className="text-2xl font-semibold">$5,643</p>
              </div>
              <div className='m-3 p-1'>
                <p className="text-gray-500 mt-1 text-xl font-bold">Sales</p>
                <p className="text-2xl font-semibold">$16,273</p>
              </div>
              <div className='m-3  p-1 mr-12'>
                <p className="text-gray-500 mt-1 text-xl font-bold">Order Value</p>
                <p className="text-2xl font-semibold">12.03%</p>
              </div>
              <div className='m-3 p-1'>
                <p className="text-gray-500 mt-1 text-xl font-bold">Customers</p>
                <p className="text-2xl font-semibold">21,456</p>
              </div>
              <div className='m-3  p-1 mr-12'>
                <p className="text-gray-500 mt-1 text-xl font-bold">Income</p>
                <p className="text-2xl font-semibold">$35,652</p>
              </div>
              <div className='m-3 p-1'>
                <p className="text-gray-500 mt-1 text-xl font-bold">Expemses</p>
                <p className="text-2xl font-semibold">$12,248</p>
              </div>
            </div>
          </div>


          <div className='bg-yellow-600  rounded-3xl'>
            <Stacked currentMode={currentMode} height="360px" />
          </div>
        </div>




        <div className="justify-center finalDiv">

          <div className=" bg-white w-80 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">User Activity</p>
              <button type="button" className=" font-semibold flex text-gray-500">
                Weekly<MdKeyboardArrowDown className='text-2xl' />
              </button>
            </div>
            <div className='mt-5'>
              <p className='font-semibold flex text-gray-500'>This Month</p>
              <h1 className='font-bold text-2xl'>16,543</h1>
            </div>
            <div className=' text-right w-full'>
              <span>
                <button
                  type="button"
                  // style={{ color }}
                  className="relative text-xl rounded-full p-3 hover:bg-light-gray"
                >
                  <span
                    style={{ background: 'rgb(59,118,225)' }}
                    className="inline-flex rounded-full h-4 w-4 "
                  />
                </button>
                Current</span>
              <span><button
                type="button"
                // style={{ color }}
                className="relative text-xl rounded-full p-3 hover:bg-light-gray"
              >
                <span
                  style={{ background: 'rgb(243,110,110)' }}
                  className="inline-flex rounded-full h-4 w-4 "
                />
              </button>Previous</span>
            </div>
            <div className="mt-10 ">
              <div className="mt-4">
                <AreaChart width={260} height={250} data={data}
                  margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" w-80 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Order Stats</p>
              <button type="button" className=" font-semibold flex text-gray-500">
                <span className='text-2xl' >...</span>
              </button>
            </div>

            <div className="mt-10 text-center">
              <PieChart width={260} height={250}>
                {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
                <Tooltip />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
              </PieChart>
            </div>
            <div className='flex items-center justify-center justify-between text-xl font-semibold'>
              <p className='bg-green-500 p-2 rounded-2xl'>Completed</p>
              <p className='bg-blue-500 p-2 rounded-2xl'>Pending</p>
              <p className='bg-orange-500 p-2 rounded-2xl'>cancel</p>
            </div>
          </div>



          {/*  */}
          <div className="bg-white w-80 dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-semibold">Top Product</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className="mt-10 ">
              {recentTransactions.map((item) => (
                <div key={item.title} className="flex justify-between mt-4">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className="text-xl rounded-lg p-3 hover:drop-shadow-xl"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="text-md font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>









      <div className=''>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-2 m-3">

          <div>
            <img className='background' src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png" alt="" />
          </div>
          <img className='images' src={avatar4} alt="" />

          <div className='text-center mt-4'>
            <h1 className='text-xl font-bold p-2'>Jawad Jisan</h1>
            <p className=''>Web Developer</p>
          </div>

          <div className='flex items-center justify-around'>
            <div className='p-3  text-center m-5'>
              <h1 className='text-xl font-semibold'>1,269</h1>
              <p className='font-semibold'>Products</p>
            </div>
            <div className='p-3 text-center  m-5'>
              <h1 className='text-xl font-semibold'>5.2k</h1>
              <p className='font-semibold'>Followers</p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between p-3 mt-5">
            <p className="text-xl pl-3 pr-3 font-semibold">Earnings</p>
            <button type="button" className=" font-semibold flex text-gray-500">
              <span className='text-2xl pl-3 pr-3 ' ><FcInfo /> </span>
            </button>
          </div>

          <div className='flex justify-center items-center'>
            <div className='box'>
              <div className='percent'>
                <svg>
                  <circle cx='70' cy='70' r='70'></circle>
                  <circle cx='70' cy='70' r='70'></circle>
                </svg>
                <div className='number'>
                  <h2>87<span>%</span>  </h2>
                </div>
              </div>
              <h2 className='text text-center text-2xl font-semibold '>$26,256</h2>
            </div>
          </div>
          <h2 className='text text-center text-xl p-2 '>Earning this Month</h2>
          <h2 className='text text-center text-xl p-1'><span className='text-green-700 ml-5 mr-5'>+2.65%</span> From Previous Period</h2>
          <h1 className='mt-10 font-semibold text-2xl p-5'>Recent Activity</h1>
          <div className="mt-5 ">
            <div>
                      <div className='flex items-center'>
                        <h1 className='text-center p-3 ml-5 bg-slate-100 rounded-xl text-xl font-semibold'>12 <br /> Sep</h1>
                        <p className='text-xl p-5 ml-6'>Respond to need "Volunteer Activities" </p>
                      </div>
                      <div className='flex items-center'>
                        <h1 className='text-center p-3 ml-5 bg-slate-100 rounded-xl text-xl font-semibold'>11 <br /> Sep</h1>
                        <p className='text-xl p-5 ml-6'>Everyone realizes would be desirable .. <br /> <span className='text-blue-700'>Read more.</span> </p>
                      </div>
                      <div className='flex items-center'>
                        <h1 className='text-center p-3 ml-5 bg-slate-100 rounded-xl text-xl font-semibold'>10 <br /> Sep</h1>
                        <p className='text-xl p-5 ml-6'>Joined the "Boardsmanship Forum<br /> </p>
                      </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Ecommerce;