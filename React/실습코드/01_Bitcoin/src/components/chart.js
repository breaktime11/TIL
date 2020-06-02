import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  console.log("propsdata: " + props.data);
  return (
    <div>
      <Sparklines width={150} height={80}
        data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  );
};