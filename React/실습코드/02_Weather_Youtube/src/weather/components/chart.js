import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines width={120} height={180} 
        data={props.data}>
          <SparklinesLine color={props.color}/>
          {/* 평균값 표시해줌 */}
          <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  );
};