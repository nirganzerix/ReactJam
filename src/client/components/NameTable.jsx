import Arrow from 'material-ui/svg-icons/content/forward';
import React from 'react';

const NameTable = ({ nameList }) => {
  const arrowStyle = {
    verticalAlign: 'bottom',
    height: '1rem'
  }
  return (
    <div id="name-list">
      { nameList.map((name, index, array) => (
        <h5 key={name}>
          {name}
          <Arrow style={arrowStyle} />
          {array[index+1] || array[0]}
        </h5>
      ))}
    </div>
  );
}

export default NameTable;
