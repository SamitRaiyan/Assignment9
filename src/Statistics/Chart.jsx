import { faBox, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Assignment 1',
    fullmark: 120,
    Target: 60 ,
    YourScore: 60 ,
   
  },
  {
    name: 'Assignment 2',
    fullmark: 120,
    Target: 60 ,
    YourScore: 60 ,
    
  },
  {
    name: 'Assignment 3',
    fullmark: 120,
    Target: 60 ,
    YourScore: 56 ,
    
  },
  {
    name: 'Assignment 4',
    fullmark: 120,
    Target: 60 ,
    YourScore: 60 ,
      },
  {
    name: 'Assignment 5',
    fullmark: 120,
    Target: 60 ,
    YourScore: 60 ,
    
  },
  {
    name: 'Assignment 6',
    Target: 60 ,
    YourScore: 60 ,
    fullmark: 120,
  },
  {
    name: 'Assignment 7',
    Target: 60 ,
    YourScore: 60 ,
    fullmark: 120,
  },
  {
    name: 'Assignment 8',
    Target: 60 , 
    YourScore: 60 ,
    fullmark: 120,
  },
];

const Chart = () => {
    return (
        <div  className='flex items-center gap-3 '>
            
            <AreaChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="fullmark"/>
          <Tooltip />
          <Area type="monotone" dataKey="Target" stackId="1" stroke="#8884d8" fill="#fcf300" />
          <Area type="monotone" dataKey="YourScore" stackId="0" stroke="#0077b6" fill="#c670ff" />
        
        </AreaChart>
        <div >
            <div className='flex items-center gap-3'>
                <h1>Target score</h1>
                <FontAwesomeIcon className=' text-yellow-400' icon={faSquare}/>
            </div>
            <div className='flex items-center gap-3'>
                <h1>Your score</h1>
                <FontAwesomeIcon className='text-pink-400' icon={faSquare}/>
            </div>
        </div>
        </div>
    );
};

export default Chart;